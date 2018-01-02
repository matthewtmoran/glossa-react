import React from 'react';

class TranscriptionForm extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    const title = this.refs.title.value;
    const desc = this.refs.desc.value;
    this.props.addTranscription(title, desc);
    this.refs.title.value = '';
    this.refs.desc.value = '';
  }

  render() {
    return (
      <div>
        <h5>Transcription form</h5>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>Name</label>
            <input ref="title" placeholder="title"/>
            <label>Description</label>
            <textarea ref="desc"/>
            <button type="submit">Add transcription</button>
          </form>
      </div>
    )
  }
}

export default TranscriptionForm;