import React from 'react';
import {connect} from 'react-redux';
import Modal from 'material-ui/Modal';

import {MODAL_TYPE} from '../../state/ducks/ui/types';
import NotebookDetailsModal from './notebook/NotebookDetailsModal'

const MODAL_COMPONENTS = {};
MODAL_COMPONENTS[`${MODAL_TYPE}`] = NotebookDetailsModal;

function rand() {
  return Math.floor(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    position: 'absolute',
    width: '50%',
    minHeight: '400px',
    top: `50%`,
    left: `50%`,
    transform: `translate(-${top}%, -${left}%)`,
    border: '1px solid #e5e5e5',
    backgroundColor: '#fff',
    boxShadow: '0 5px 15px rgba(0, 0, 0, .5)',
    padding: 8 * 4,
  };
}

const ModalRoot = ({modalType, modalProps}) => {

  if (!modalType) {
    return null // after React v15 you can return null here
  }
  const SpecificModal = MODAL_COMPONENTS[modalType];
  return (
      <Modal
        open={true}
        disableBackdropClick={true}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        <div style={getModalStyle()}>
          <SpecificModal {...modalProps} />
        </div>
      </Modal>
    )
};


const mapStateToProps = state => {
  return {
    modalType: state.ui.modal.modalType,
    modalProps: state.ui.modal.modalProps,
  }
};

export default connect(mapStateToProps)(ModalRoot)