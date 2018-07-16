import React from "react";
import TextField from "material-ui/TextField";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    flex: 1
  },
  formFields: {
    marginBottom: "auto",
    flexGrow: 1,
    flex: 1
  },
  formActions: {
    marginTop: "auto",
    textAlign: "right"
  }
});

class NotebookForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  //this only updates component/local state
  handleChange(e) {
    let field = e.target.name;
    let value = e.target.value;
    this.props.handleChange(field, value);
  }

  render() {
    const { classes, notebook } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.formFields}>
          <TextField
            value={notebook.title || ""}
            name="title"
            placeholder="Notebook Title"
            fullWidth={true}
            onChange={this.handleChange}
          />
          <TextField
            value={notebook.desc || ""}
            name="desc"
            placeholder="Notebook Description"
            fullWidth={true}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(NotebookForm);
