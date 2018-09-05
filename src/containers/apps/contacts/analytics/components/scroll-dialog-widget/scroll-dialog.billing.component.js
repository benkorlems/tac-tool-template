import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class ScrollDialog extends React.Component {
  state = {
    open: false,
    scroll: "body"
  };

  handleClickOpen = scroll => () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button
          variant="raised"
          color="primary"
          style={{ width: "100%", height: "5%" }}
          label="Data Usage History"
          onClick={this.handleClickOpen()}
        >
          View Data Usage History
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title">Data Usage History</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <div>No Data</div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ScrollDialog;
