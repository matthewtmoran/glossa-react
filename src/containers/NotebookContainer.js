import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Notebooks from "../components/Notebooks/Notebooks";

import * as actionCreators from '../actions';

const mapStateToProps = state => {
  return {
    notebooks: state.notebooks,
    searchTerm: state.searchTerm
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const NotebookContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notebooks);

export default NotebookContainer;