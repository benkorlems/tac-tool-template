import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import TableFooter from "@material-ui/core/TableFooter";

import genericSearchData from "../../../../../../assets/data/dashboards/generic-search.json";

import scss from "./table-widget.module.scss";

class TableWidget extends React.Component {
  state = {
    activeTabIndex: 0,
    page: 0,
    rowsPerPage: 7,
    data: [],
    contact: null,
    formatedData: []
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const field_names = [
      "Admin State",
      "Operational State",
      "OLT Rx Power",
      "Rx Power",
      "Voice IP",
      "VLAN",
      "Sync State",
      "Public IP",
      "Provisioned Bandwidth",
      "OLT",
      "Port",
      "MST",
      "ONT",
      "ONT network status"
    ];
    let formatted = [];
    Object.keys(nextProps.fiber_data).map((c, i) => {
      formatted.push({ field: field_names[i], value: nextProps.fiber_data[c] });
    });
    return { data: formatted };
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  /** 
  changeTab = (event, tabIndex) => {
    const newData = tabIndex === 0 ? genericSearchData : paidSearchData;
    this.setState({ activeTabIndex: tabIndex, data: newData, page: 0 });
  }; */

  render() {
    const { rowsPerPage, page, data } = this.state;

    return (
      <div className={scss["portal-chart-tabs"]}>
        <Table>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((n, i) => (
                <TableRow key={i}>
                  <TableCell>{n.field}</TableCell>
                  <TableCell>{n.value}</TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                colSpan={4}
                count={genericSearchData.length}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[7]}
                page={page}
                backIconButtonProps={{ "aria-label": "Previous Page" }}
                nextIconButtonProps={{ "aria-label": "Next Page" }}
                onChangePage={this.handleChangePage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    );
  }
}

export default TableWidget;
