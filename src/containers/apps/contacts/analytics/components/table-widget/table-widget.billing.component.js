import React from "react";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import TableFooter from "@material-ui/core/TableFooter";

import genericSearchData from "../../../../../../assets/data/dashboards/generic-search.json";
import paidSearchData from "../../../../../../assets/data/dashboards/paid-search.json";

import ScrollDialog from "../../components/scroll-dialog-widget/scroll-dialog.component";

import scss from "./table-widget.module.scss";

const tabs = [
  {
    title: "Customer"
  },
  {
    title: "Details"
  }
];

class TableWidget extends React.Component {
  state = {
    activeTabIndex: 0,
    page: 0,
    rowsPerPage: 7,
    data: genericSearchData
  };

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
          <TableHead />
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(n => (
                <TableRow key={n.url}>
                  <TableCell>{n.url}</TableCell>
                  <TableCell>{n.views}</TableCell>
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
        <ScrollDialog />
      </div>
    );
  }
}

export default TableWidget;
