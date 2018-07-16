import React from "react";

import Button from "material-ui/Button";

const NotebookActions = ({
  actionClass,
  isSaved,
  handleUpdate,
  handleCancel
}) => {
  return (
    <div className={actionClass}>
      <Button onClick={handleUpdate}>Save Text</Button>
      <Button onClick={handleCancel}>{isSaved ? "Close" : "Cancel"}</Button>
    </div>
  );
};
export default NotebookActions;
