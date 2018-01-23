import React from 'react';
import TextField from 'material-ui/TextField';
import { debounce } from 'lodash'

class TranscriptionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      _id: this.props.transcription._id,
      desc: this.props.transcription.desc,
      title: this.props.transcription.title
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.transcription._id !== this.state._id) {
      this.setState({
        _id: nextProps.transcription._id,
        desc: nextProps.transcription.desc,
        title: nextProps.transcription.title
      });
    }
  }

  //this only updates component/local state
  handleChange(e) {
    e.persist();
    let myObj = {};
    myObj[e.target.name] = e.target.value;
    this.setState(myObj);
    this.trueChange(e.target.name, e.target.value)
  }

  //this actually sends changes up to redux....
  trueChange = debounce((name, val) => {
    let myTransCopy = Object.assign({}, this.props.transcription);
    myTransCopy[name] = val;
    this.props.update(myTransCopy);
  }, 500);

  render() {
    return (
      <div>
        <TextField
          value={this.state.title}
          name="title"
          fullWidth={true}
          onChange={(e) => {
            e.persist();
            this.handleChange(e)
          }}
        />
        <TextField
          value={this.state.desc || ""}
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