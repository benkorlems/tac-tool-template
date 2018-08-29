import React from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import OntWifiTableWidget from "./components/table-widget/table-widget.ontwifi.component";
import ConnectedDevicesTableWidget from "./components/table-widget/table-widget.connectedDevices.component";
import OntWanTableWidget from "./components/table-widget/table-widget.ontwan.component";
import OntLanTableWidget from "./components/table-widget/table-widget.ontlan.component";
import OntSipTableWidget from "./components/table-widget/table-widget.ontsip.component";
import ClearBrasConfirm from "./components/confirm-widget/clearBras.confirm.component";
import RebootOntConfirm from "./components/confirm-widget/rebootOnt.confirm.component";

import styles from "./analytics.style";
import { Button } from "../../../../../node_modules/@material-ui/core";

const Analytics = props => {
  const { classes } = props;

  return (
    <div className={classes.portalDashboardPageWrapper}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={16}>
          <Grid
            key={0}
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
              ONT (WiFi)
            </Typography>
            <Paper className={classes.portalWidgetContent}>
              <OntWifiTableWidget />
            </Paper>
          </Grid>

          <Grid
            key={9}
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
              CONNECTED DEVICES
            </Typography>
            <Paper className={classes.portalWidgetContent}>
              <ConnectedDevicesTableWidget />
            </Paper>
          </Grid>

          <Grid
            key={8}
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
              ONT (WAN)
            </Typography>
            <Paper className={classes.portalWidgetContent}>
              <OntWanTableWidget />
            </Paper>
          </Grid>

          <Grid
            key={7}
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
              ONT (LAN)
            </Typography>
            <Paper className={classes.portalWidgetContent}>
              <OntLanTableWidget />
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
              ONT (SIP)
            </Typography>
            <Paper className={classes.portalWidgetContent}>
              <OntSipTableWidget />
            </Paper>
          </Grid>

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
              Actions
            </Typography>
            <Paper style={{ display: "flex", justifyContent: "space-between" }}>
              <RebootOntConfirm />
              <ClearBrasConfirm />
              <Button
                variant="raised"
                color="primary"
                style={{ height: "4em", minWidth: "170px" }}
              >
                Ping DNS
              </Button>
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
