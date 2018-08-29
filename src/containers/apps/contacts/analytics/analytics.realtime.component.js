import React from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import TabbedChartWidget from "./components/tabbed-chart-widget/tabbed-chart-widget.component";

import Raisecom from "./analytics.raisecom.component";

import styles from "./analytics.style";

const Analytics = props => {
  const { classes } = props;

  return (
    <div className={classes.portalDashboardPageWrapper}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={16}>
          <Grid
            key={5}
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
              ONT LED Status
            </Typography>
            <Paper className={classes.portalWidgetContent}>
              <Raisecom />
            </Paper>
          </Grid>

          <Grid
            key={6}
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
