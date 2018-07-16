import React from "react";

import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import CachedIcon from "material-ui-icons/Cached";
import DoneIcon from "material-ui-icons/Done";

const SaveStatus = ({ request }) => {
  return (
    <div>
      {!!request ? (
        <IconButton disabled={true}>
          <CachedIcon />
          <Typography type="caption">Saving... </Typography>
        </IconButton>
      ) : (
        <IconButton disabled={true}>
          <DoneIcon />
          <Typography type="caption">Saved!</Typography>
        </IconButton>
      )}
    </div>
  );
};
export default SaveStatus;
