import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function DeleteDialog({ openForDelete, handleDelete }) {
  return (
    <div>
      <Dialog
        open={openForDelete}
        aria-labelledby="delete-confirmation"
        aria-describedby="delete-confirmation"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure to delete this?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Once you click yes, this post will be permanently deleted and
            you cannot undo it afterwards. Do you still wish to proceed? If so,
            press yes, otherwise, press no.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>No</Button>
          <Button onClick={handleDelete} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      :
    </div>
  );
}
