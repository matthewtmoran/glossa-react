import React from 'react';
import PropTypes from 'prop-types';

class NotebookForm extends React.Component {
  create = () => {
    if (this.refs.notebookTitle.value.length > 3) {
      this.props.addNotebook(this.refs.notebookTitle.value);
      this.refs.notebookTitle.value = '';
    }
  };

  render() {
    return (
      <div className="NotebookForm">
        <h5>Notebook form</h5>
        <label >Notebook Title:</label>
        <input ref="notebookTitle" type="text"/>
        <button onClick={this.create.bind(this)}>Submit</button>
      </div>
    )
  }
}

export default NotebookForm;