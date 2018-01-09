import React from 'react';
import TextField from 'material-ui/TextField';

class TranscriptionForm extends React.Component {

  handleChange(e) {
    e.preventDefault();
    this.props.transcription[e.target.name] = e.target.value;
    this.props.update(this.props.transcription);
  }

  render() {
    const {transcription} = this.props;
    return (
      <div>
        <TextField
          value={transcription.title}
          name="title"
          fullWidth={true}
          onChange={this.handleChange.bind(this)}
        />
        <TextField
          value={transcription.desc || ""}
          name="desc"
          placeholder="Description..."
          fullWidth={true}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    )
  }
}


export default TranscriptionForm;