import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import {withStyles} from 'material-ui/styles';
import { debounce } from 'lodash'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flex: 1
  },
  formFields: {
    marginBottom: 'auto',
    flexGrow: 1,
    flex:1

  },
  formActions: {
    marginTop: 'auto',
    textAlign: 'right'
  }
});

class NotebookForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notebook: {...this.props.notebook},
      unsaved: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.notebook._id !== this.state.notebook._id) {
      this.setState({
        notebook: {
          _id: nextProps.notebook._id,
          desc: nextProps.notebook.desc,
          title: nextProps.notebook.title
        },
        unsaved: false
      });
    }
  }

  //this only updates component/local state
  handleChange(e) {
    //TODO: add unsaved changes notification
    e.persist();
    let myObj = Object.assign({}, this.state.notebook);
    myObj[e.target.name] = e.target.value;
    this.setState({notebook:myObj});
    if (this.state.notebook !== this.props.notebook) {
      this.setState({unsaved: true});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.update(this.state.notebook);
    this.setState({unsaved: false});
  }

  //this actually sends changes up to redux....
  trueChange = debounce((name, val) => {
    let myNbCopy = Object.assign({}, this.state.notebook);
    myNbCopy[name] = val;
    this.props.update(myNbCopy);
  }, 500);

  render() {
    const {classes, deselectAndModal} = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.formFields}>
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
        </div>
        <div className={classes.formActions}>
          <Button onClick={(e) => this.handleSubmit(e)}>Save Text</Button>
          <Button onClick={deselectAndModal}>{this.state.unsaved ? 'Cancel' : 'Close' }</Button>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(NotebookForm);
