import React from 'react';
import TextField from 'material-ui/TextField';
import {withStyles} from 'material-ui/styles';

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
      notebook: {...this.props.notebook}
    };
  }


  //this only updates component/local state
  handleChange(e) {
    let field = e.target.name;
    let value = e.target.value;
    let notebook = this.state.notebook;
    notebook[field] = value;
    this.setState({notebook});
    this.props.handleChange(field, value);
  }

  render() {
    const {classes} = this.props;
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
      </div>
    )
  }
}

export default withStyles(styles)(NotebookForm);
