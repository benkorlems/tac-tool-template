import React from "react";
import PropTypes from "prop-types";
import compose from "recompose/compose";
import moment from "moment";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchFiber } from "../../../../actionCreators/fiberActionCreators";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import BillingTableWidget from "./components/table-widget/table-widget.billing.component";
import FiberOpstateTableWidget from "./components/table-widget/table.widget.fiber.component";

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
      fetching_fiber: "",
      fiber_error: null,
      last_poll: null
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.contact !== prevState.contact) {
      let last_poll = "";
      last_poll = moment
        .unix(nextProps.fiber.fiber_data.last_poll)
        .format("DD/MM/YYYY HH:MM:SS");
      if (last_poll == "Invalid date") {
        last_poll = "Not Available";
      }
      return {
        contact: nextProps.contact,
        fiber_data: nextProps.fiber.fiber_data,
        fiber_error: nextProps.fiber.fiber_error,
        last_poll: last_poll
      };
    } else return null;
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
              md={6}
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
              md={6}
              className={this.props.classes.portalWidget}
            >
              <Typography
                variant="heading"
                className={this.props.classes.portalWidgetHeading}
              >
                Fiber
              </Typography>
              <Typography>
                {this.state.last_poll ? (
                  <div variant="caption">Last Poll: {this.state.last_poll}</div>
                ) : (
                  <div>{null}</div>
                )}
              </Typography>
              <Paper className={this.props.classes.portalWidgetContent}>
                {this.state.fetching_fiber ? (
                  <Loader size={20} />
                ) : (
                  <FiberOpstateTableWidget />
                )}
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
                <PortstatusTableWidget contact={this.state.contact} />
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
