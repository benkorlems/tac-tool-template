import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableFooter from "@material-ui/core/TableFooter";
import Button from "@material-ui/core/Button";

import portStatusData from "../../../../../../assets/data/dashboards/port-status-data.json";

import scss from "./table-widget.module.scss";

class TableWidget extends React.Component {
  state = {
    activeTabIndex: 0,
    page: 0,
    rowsPerPage: 5,
    data: portStatusData
  };

  render() {
    const { data } = this.state;

    return (
      <div className={scss["portal-chart-tabs"]}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Device Type</TableCell>
              <TableCell>MAC</TableCell>
              <TableCell>IP</TableCell>
              <TableCell>Tx Rate</TableCell>
              <TableCell>Rx Rate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => (
              <TableRow key={n.port}>
                <TableCell component="th" scope="row">
                  {n.port}
                </TableCell>
                <TableCell>{n.configStatus}</TableCell>
                <TableCell>{n.adminStatus}</TableCell>
                <TableCell>{n.operationalStatus}</TableCell>
                <TableCell>{n.operationalStatus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter />
        </Table>
        <Button
          variant="raised"
          style={{ width: "100%", height: "5%" }}
          color="primary"
          aria-label="Reload"
        >
          REFRESH
        </Button>
      </div>
    );
  }
}

export default TableWidget;
