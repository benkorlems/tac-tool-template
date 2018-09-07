import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchFaultAlarm } from "../../../../../../actionCreators/faultAlarmActionCreators";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { TableHead, Table } from "@material-ui/core";

class ScrollDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      scroll: "body",
      olt_details: {},
      fetching_fault_alarm: false,
      fault_alarm_data: null
    };
  }

  /** 
  static getDerivedStateFromProps(nextProps, prevState) {
    let olt_details = { olt: "", port: "", slot: "" };
    olt_details.olt = nextProps.fiber.fiber_data.olt;
    olt_details.port = nextProps.fiber.fiber_data.port;
    olt_details.slot = nextProps.fiber.fiber_data.ont;
    return {
      fetching_fault_alarm: nextProps.faults.fetching_fault_alarm,
      olt_details: olt_details,
      fault_alarm_data: nextProps.faults.fault_alarm_data
    };
  } */

  componentWillReceiveProps(nextProps) {
    //console.log(nextProps.fiber);
    let olt_details = { olt: "", port: "", slot: "" };
    olt_details.olt = nextProps.fiber.fiber_data.olt;
    olt_details.port = nextProps.fiber.fiber_data.port;
    olt_details.slot = nextProps.fiber.fiber_data.ont;
    this.setState({
      fetching_fault_alarm: nextProps.faults.fetching_fault_alarm,
      olt_details: olt_details
    });
    if (nextProps.faults.fault_alarm_data == []) {
      this.setState({
        fault_alarm_data: null
      });
    } else
      this.setState({ fault_alarm_data: nextProps.faults.fault_alarm_data });
  }

  componentDidUpdate() {
    //console.log(this.state.fault_alarm_data);
  }

  handleClickOpen = scroll => () => {
    this.props.fetchFaultAlarm(this.state.olt_details);
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <div>
        {this.state.fetching_fault_alarms ? (
          <Button
            variant="raised"
            color="primary"
            style={{ marginBottom: "5px", width: "100%", height: "5%" }}
            label="Data Usage History"
            Disbaled
          >
            Fetching Fault Alarms...
          </Button>
        ) : (
          <Button
            variant="raised"
            color="primary"
            style={{ marginBottom: "5px", width: "100%", height: "5%" }}
            label="Data Usage History"
            onClick={this.handleClickOpen()}
          >
            View Historical Fault Alarms
          </Button>
        )}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
          fullWidth={true}
        >
          <DialogTitle id="scroll-dialog-title">
            Historical Fault Alarms
          </DialogTitle>
          <DialogContent>
            {this.state.fault_alarm_data ? (
              this.state.fault_alarm_data.map(n => (
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Trap Id</TableCell>
                      <TableCell>Message</TableCell>
                      <TableCell>Action</TableCell>
                      <TableCell>Trap State</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>{n.trap_id}</TableCell>
                      <TableCell>{n.message}</TableCell>
                      <TableCell>{n.action}</TableCell>
                      <TableCell>{n.trap_state}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              ))
            ) : (
              <div>No Fault Alarms over the last two weeks</div>
            )}
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
function mapStateToProps(state) {
  return {
    themeConfig: state.theme,
    faults: state.faults,
    fiber: state.fiber
  };
}
const mapDispatchToProps = dispatch => {
  return { fetchFaultAlarm: bindActionCreators(fetchFaultAlarm, dispatch) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScrollDialog);
