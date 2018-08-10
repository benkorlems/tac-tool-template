import React from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import TabbedChartWidget from "./components/tabbed-chart-widget/tabbed-chart-widget.component";
import DoughnutChartWidget from "./components/doughnut-chart-widget/doughnut-chart-widget.component";
import ActiveUsersWidget from "./components/active-users-widget/active-users-widget.component";
import BillingTableWidget from "./components/table-widget/table-widget.billing.component";
import FiberOpstateTableWidget from "./components/table-widget/table.widget.fiber.component";
import FiberOltinfoTableWidget from "./components/table-widget/table-widget.oltinfo.component";
import TableWidget from "./components/table-widget/table-widget.component";
import PortstatusTableWidget from "./components/table-widget/table-widget.portstatus.component";

import styles from "./analytics.style";

const Analytics = props => {
  const { classes } = props;

  return (
    <div className={classes.portalDashboardPageWrapper}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={16}>
          <Grid
            key={1}
            item
            xs={12}
            sm={12}
            md={4}
            className={classes.portalWidget}
          >
            <Typography
              variant="subheading"
              className={classes.portalWidgetHeading}
            >
              Fiber
            </Typography>
            <Paper className={classes.portalWidgetContent}>
              <FiberOpstateTableWidget />
            </Paper>
          </Grid>
          <Grid
            key={1}
            item
            xs={12}
            sm={12}
            md={4}
            className={classes.portalWidget}
          >
            <Typography
              variant="subheading"
              className={classes.portalWidgetHeading}
            >
              OLT INFO
            </Typography>
            <Paper className={classes.portalWidgetContent}>
              <FiberOltinfoTableWidget />
            </Paper>
          </Grid>
          <Grid
            key={2}
            item
            xs={12}
            sm={12}
            md={4}
            className={classes.portalWidget}
          >
            <Typography
              variant="subheading"
              className={classes.portalWidgetHeading}
            >
              Billing
            </Typography>
            <Paper className={classes.portalWidgetContent}>
              <BillingTableWidget />
            </Paper>
          </Grid>
          <Grid
            key={2}
            item
            xs={12}
            sm={12}
            md={12}
            className={classes.portalWidget}
          >
            <Typography
              variant="subheading"
              className={classes.portalWidgetHeading}
            >
              PORT STATUS
            </Typography>
            <Paper className={classes.portalWidgetContent}>
              <PortstatusTableWidget />
            </Paper>
          </Grid>
          <Grid
            key={3}
            item
            xs={12}
            sm={12}
            md={4}
            className={classes.portalWidget}
          >
            <Typography
              variant="subheading"
              className={classes.portalWidgetHeading}
            >
              ONT WiFi
            </Typography>
            <Paper className={classes.portalWidgetContent}>
              <DoughnutChartWidget />
            </Paper>
          </Grid>

          <Grid
            key={4}
            item
            xs={12}
            sm={12}
            md={8}
            className={classes.portalWidget}
          >
            <Typography
              variant="subheading"
              className={classes.portalWidgetHeading}
            >
              ONT WAN
            </Typography>
            <Paper className={classes.portalWidgetContent}>
              <TableWidget />
            </Paper>
          </Grid>

          <Grid
            key={4}
            item
            xs={12}
            sm={12}
            md={6}
            className={classes.portalWidget}
          >
            <Typography
              variant="subheading"
              className={classes.portalWidgetHeading}
            >
              ONT LED Status
            </Typography>
            <Paper className={classes.portalWidgetContent}>
              <TableWidget />
            </Paper>
          </Grid>

          <Grid
            key={4}
            item
            xs={12}
            sm={12}
            md={6}
            className={classes.portalWidget}
          >
            <Typography
              variant="subheading"
              className={classes.portalWidgetHeading}
            >
              ONT Utilization
            </Typography>
            <Paper className={classes.portalWidgetContent}>
              <TabbedChartWidget />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Analytics.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles, { withTheme: true })(Analytics);
