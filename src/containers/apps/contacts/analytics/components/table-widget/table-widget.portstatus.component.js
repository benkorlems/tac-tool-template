import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import TableFooter from "@material-ui/core/TableFooter";
import ScrollAlarmDialog from "../../components/scroll-dialog-widget/scroll-dialog.alarms.component";
import ScrollSessionDialog from "../../components/scroll-dialog-widget/scroll-dialog.session.component";

import portStatusData from "../../../../../../assets/data/dashboards/port-status-data.json";

import scss from "./table-widget.module.scss";

class TableWidget extends React.Component {
  state = {
    activeTabIndex: 0,
    page: 0,
    rowsPerPage: 5,
    data: portStatusData,
    contact: ""
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      contact: nextProps.contact
    });
  }

  render() {
    const { data } = this.state;

    return (
      <div className={scss["portal-chart-tabs"]}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <span style={{ fontWeight: 900 }}>Port</span>
              </TableCell>
              <TableCell>
                <span style={{ fontWeight: 900 }}>Configuration State</span>
              </TableCell>
              <TableCell>
                <span style={{ fontWeight: 900 }}>Admin State</span>
              </TableCell>
              <TableCell>
                <span style={{ fontWeight: 900 }}>Operational Status</span>
              </TableCell>
              <TableCell>
                <span style={{ fontWeight: 900 }}>Speed/Duplex</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => (
              <TableRow key={n.port}>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ fontWeight: 550 }}
                >
                  {n.port}
                </TableCell>
                <TableCell>{n.configStatus}</TableCell>
                <TableCell>{n.adminStatus}</TableCell>
                <TableCell>{n.operationalStatus}</TableCell>
                <TableCell>{n.speed}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter />
        </Table>
        <span>
          <ScrollAlarmDialog />
        </span>
        <span>
          <ScrollSessionDialog />
        </span>
      </div>
    );
  }
}

export default TableWidget;
