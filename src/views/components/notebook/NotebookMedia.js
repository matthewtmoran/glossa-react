import React from "react";
import IconButton from "material-ui/IconButton";
import VisibilityOffIcon from "material-ui-icons/VisibilityOff";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  mediaImage: {
    margin: "auto",
    maxWidth: "100%",
    maxHeight: "500px",
    overflow: "hidden"
  },
  hideButton: {
    position: "absolute",
    top: 36,
    right: 12,
    margin: "auto",
    color: "white"
  }
});

const NotebookMedia = props => {
  const { classes, imageSrc, remove } = props;
  return (
    <div>
      <img className={classes.mediaImage} src={imageSrc} alt="" />
      <IconButton className={classes.hideButton} onClick={remove}>
        <VisibilityOffIcon style={{ color: "white" }} />
      </IconButton>
    </div>
  );
};

export default withStyles(styles)(NotebookMedia);
