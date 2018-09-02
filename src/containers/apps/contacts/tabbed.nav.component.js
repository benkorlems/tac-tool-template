import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import AnalyticsStatusComponent from "./analytics/analytics.status.component";
import AnalyticsOntComponent from "./analytics/analytics.ont.component";
import AnalyticsRealtimeComponent from "./analytics/analytics.realtime.component";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
});

class ScrollableTabsButtonAuto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      contact: null
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.contact !== prevState.contact) {
      return { contact: nextProps.contact };
    }
  }

  componentDidUpdate() {
    //console.log(this.state.contact);
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            fullWidth
          >
            <Tab label="Billing" />
            <Tab label="ONT" />
            <Tab label="Real-time Status" />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <AnalyticsStatusComponent contact={this.state.contact} />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <AnalyticsOntComponent contact={this.state.contact} />
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <AnalyticsRealtimeComponent contact={this.state.contact} />
          </TabContainer>
        )}
      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScrollableTabsButtonAuto);
