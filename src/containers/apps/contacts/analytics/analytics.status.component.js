import React from "react";
import PropTypes from "prop-types";
import compose from "recompose/compose";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchFiber } from "../../../../actionCreators/fiberActionCreators";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import BillingTableWidget from "./components/table-widget/table-widget.billing.component";
import FiberOpstateTableWidget from "./components/table-widget/table.widget.fiber.component";
import FiberOltinfoTableWidget from "./components/table-widget/table-widget.oltinfo.component";
import ScrollBillingDialog from "./components/scroll-dialog-widget/scroll-dialog.billing.component";
import Loader from "../../../../layouts/components/layout-loader/layout-loader.component";

import PortstatusTableWidget from "./components/table-widget/table-widget.portstatus.component";

import styles from "./analytics.style";

class Analytics extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: null,
      fiber_data: null,
      fetching_fiber: ""
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.contact !== prevState.contact) {
      return {
        contact: nextProps.contact,
        fiber_data: nextProps.fiber.fiber_data
      };
    }
  }

  render() {
    return (
      <div className={this.props.classes.portalDashboardPageWrapper}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={16}>
            <Grid
              key={3}
              item
              xs={12}
              sm={12}
              md={4}
              className={this.props.classes.portalWidget}
            >
              <Typography
                variant="subheading"
                className={this.props.classes.portalWidgetHeading}
              >
                Billing
              </Typography>
              <Paper className={this.props.classes.portalWidgetContent}>
                <BillingTableWidget contact={this.state.contact} />
              </Paper>
              <ScrollBillingDialog />
            </Grid>
            <Grid
              key={1}
              item
              xs={12}
              sm={12}
              md={4}
              className={this.props.classes.portalWidget}
            >
              <Typography
                variant="subheading"
                className={this.props.classes.portalWidgetHeading}
              >
                Fiber
              </Typography>
              <Paper className={this.props.classes.portalWidgetContent}>
                {this.state.fetching_fiber ? (
                  <Loader size={20} />
                ) : (
                  <FiberOpstateTableWidget fiber_data={this.state.fiber_data} />
                )}
              </Paper>
            </Grid>
            <Grid
              key={2}
              item
              xs={12}
              sm={12}
              md={4}
              className={this.props.classes.portalWidget}
            >
              <Typography
                variant="subheading"
                className={this.props.classes.portalWidgetHeading}
              >
                OLT INFO
              </Typography>
              <Paper className={this.props.classes.portalWidgetContent}>
                <FiberOltinfoTableWidget />
              </Paper>
            </Grid>
            <Grid
              key={4}
              item
              xs={12}
              sm={12}
              md={12}
              className={this.props.classes.portalWidget}
            >
              <Typography
                variant="subheading"
                className={this.props.classes.portalWidgetHeading}
              >
                PORT STATUS
              </Typography>
              <Paper className={this.props.classes.portalWidgetContent}>
                <PortstatusTableWidget />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
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

const mapDispatchToProps = dispatch => {
  return {
    fetchFiber: bindActionCreators(fetchFiber, dispatch)
  };
};

Analytics.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Analytics);
