import React from 'react';

class TranscriptionForm extends React.Component {

  handleChange(e) {
    e.preventDefault();
    this.props.transcription[e.target.name] = this.refs[e.target.name].value;
    this.props.update(this.props.transcription);
  }

  render() {
    const {transcription} = this.props;
    return (
      <div>
        <h5>Transcription form</h5>
        <label>Name</label>
        <input value={transcription.title} name="title" ref="title" placeholder="title" onChange={this.handleChange.bind(this)}/>
        <label>Description</label>
        <textarea value={transcription.desc} name="desc" ref="desc" onChange={this.handleChange.bind(this)}/>
      </div>
    )
  }
}


export default TranscriptionForm;