import React from 'react';
import TextField from 'material-ui/TextField';
// import Button from 'material-ui/Button';
import { debounce } from 'lodash'

class NotebookForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      notebook: {...this.props.notebook}
    };

    // this.state = {
    //   _id: this.props.notebook._id || null,
    //   desc: this.props.notebook.desc || null,
    //   title: this.props.notebook.title || null
    // }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.notebook._id !== this.state.notebook._id) {
      this.setState({
        notebook: {
          _id: nextProps.notebook._id,
          desc: nextProps.notebook.desc,
          title: nextProps.notebook.title
        }
      });
    }
  }

  //this only updates component/local state
  handleChange(e) {
    e.persist();
    let myObj = Object.assign({}, this.state.notebook);
    myObj[e.target.name] = e.target.value;
    this.setState({notebook:myObj});
    this.trueChange(e.target.name, e.target.value)
  }

  //this actually sends changes up to redux....
  trueChange = debounce((name, val) => {
    let myNbCopy = Object.assign({}, this.state.notebook);
    myNbCopy[name] = val;
    console.log('myNbCopy ',myNbCopy );
    this.props.update(myNbCopy);
  }, 500);

  render() {
    // const {remove} = this.props;
    return (
      <div>
        <TextField
          value={this.state.notebook.title || ""}
          name="title"
          placeholder="Notebook Title"
          fullWidth={true}
          onChange={this.handleChange.bind(this)}
        />
        <TextField
          value={this.state.notebook.desc || ""}
          name="desc"
          placeholder="Notebook Description"
          fullWidth={true}
          onChange={this.handleChange.bind(this)}
        />
        {/*<Button onClick={(t) => remove(this.state)}>Delete Text</Button>*/}
      </div>
    )
  }
}


export default NotebookForm;