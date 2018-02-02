import React from 'react';
import {connect} from 'react-redux';
import Modal from 'material-ui/Modal';

import {MODAL_TYPE} from '../../state/ducks/ui/types';
import NotebookDetailsModal from './notebook/NotebookDetailsModal'
import {notebookOperations} from '../../state/ducks/notebook/index';

const MODAL_COMPONENTS = {};
MODAL_COMPONENTS[`${MODAL_TYPE}`] = NotebookDetailsModal;


function getModalStyle() {
  return {
    position: 'absolute',
    width: '80%',
    minHeight: '800px',
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    // border: '1px solid #e5e5e5',
    backgroundColor: '#fff',
    boxShadow: '0 5px 15px rgba(0, 0, 0, .5)',
    // padding: 8 * 4,
  };
}

const ModalRoot = ({modalType, modalProps, update}) => {
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
          <SpecificModal {...modalProps} update={update} />
        </div>
      </Modal>
    )
};

const mapDispatchToProps = {
    update: (d) => notebookOperations.updateNotebook(d),
};

const mapStateToProps = state => {
  return {
    modalType: state.ui.modal.modalType,
    modalProps: state.ui.modal.modalProps,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalRoot)