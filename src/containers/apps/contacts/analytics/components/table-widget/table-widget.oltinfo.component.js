import React from "react";
import { connect } from "react-redux";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import TableFooter from "@material-ui/core/TableFooter";

import scss from "./table-widget.module.scss";
import { format } from "url";

class TableWidget extends React.Component {
  state = {
    activeTabIndex: 0,
    page: 0,
    rowsPerPage: 7,
    data: [],
    contact: null,
    formatedData: [],
    fiber_error: null
  };

  static getDerivedStateFromProps(nextProps) {
    const field_names = ["OLT", "Port", "MST", "ONT"];
    let formatted = [];

    if (nextProps.fiber.fetching_fiber) {
      return { data: [] };
    }
    for (let i = 0; i < field_names.length; i++) {
      switch (field_names[i]) {
        case "OLT":
          formatted.push({
            field: "OLT",
            value: nextProps.fiber.fiber_data["olt"]
          });
          break;
        case "Port":
          formatted.push({
            field: "Port",
            value: nextProps.fiber.fiber_data["port"]
          });
          break;
        case "MST":
          formatted.push({
            field: "MST",
            value: nextProps.fiber.fiber_data["mst"]
          });
          break;
        case "ONT":
          formatted.push({
            field: "ONT",
            value: nextProps.fiber.fiber_data["ont"]
          });
          break;
        default:
          formatted.push({
            field: "",
            value: ""
          });
      }
    }

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
                count={data.length}
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
function mapStateToProps(state) {
  return {
    themeConfig: state.theme,
    fiber: state.fiber
  };
}

export default connect(mapStateToProps)(TableWidget);
