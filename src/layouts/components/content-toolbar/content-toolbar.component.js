import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import compose from "recompose/compose";

// Material components
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import NotificationsIcon from "@material-ui/icons/Notifications";
import withTheme from "@material-ui/core/styles/withTheme";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";

import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

// Actions
import {
  updateLayout,
  toggleSidenav,
  toggleNotifications
} from "../../../actions/layout.actions";
import {
  changeTheme,
  changeThemeDirection
} from "../../../actions/theme.actions";

function setTitle() {
  return "iTAC Diagnostic Tool";
}

class ContentToolbar extends React.Component {
  state = {
    layoutMenuEl: null,
    layoutMenuOpen: false,
    themeMenuEl: null,
    themeMenuOpen: false
  };

  handleOpenLayoutClick = event => {
    this.setState({ layoutMenuEl: event.currentTarget, layoutMenuOpen: true });
  };

  handleCloseLayoutClick = () => {
    this.setState({ layoutMenuEl: null, layoutMenuOpen: false });
  };

  handleOpenThemeClick = event => {
    this.setState({ themeMenuEl: event.currentTarget, themeMenuOpen: true });
  };

  handleSelectThemeClick = selectedTheme => {
    this.props.changeTheme(selectedTheme.theme);
    this.setState({ themeMenuEl: null, themeMenuOpen: false });
  };

  handleCloseThemeClick = () => {
    this.setState({ themeMenuEl: null, themeMenuOpen: false });
  };

  handleDirectionChange = checked => {
    this.props.changeThemeDirection({
      direction: checked === true ? "rtl" : "ltr"
    });
    this.setState({ themeMenuEl: null, themeMenuOpen: false });
  };

  render() {
    const { width, layout } = this.props;

    const showBurgerMenu = isWidthDown("sm", width) || !layout.sidenavOpen;

    return (
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open sidenav"
          style={{ display: showBurgerMenu ? "block" : "none" }}
          onClick={this.props.toggleSidenav}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit" noWrap>
          {setTitle() || "Route Not Found"}
        </Typography>
        <span className="portal-flex" />

        <IconButton color="inherit" aria-label="user account">
          <AccountCircle />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="open notifications"
          onClick={this.props.toggleNotifications}
        >
          <NotificationsIcon />
        </IconButton>
      </Toolbar>
    );
  }
}

function mapStateToProps(state) {
  return {
    layout: {
      sidenavOpen: state.layout.sidenavOpen
    }
  };
}

ContentToolbar.propTypes = {
  width: PropTypes.string.isRequired,
  layout: PropTypes.shape({
    sidenavOpen: PropTypes.bool
  }).isRequired,
  theme: PropTypes.shape({}).isRequired,
  toggleSidenav: PropTypes.func.isRequired,
  toggleNotifications: PropTypes.func.isRequired,
  updateLayout: PropTypes.func.isRequired,
  changeTheme: PropTypes.func.isRequired,
  changeThemeDirection: PropTypes.func.isRequired,
  location: PropTypes.shape({}).isRequired
};

export default compose(
  withRouter,
  withWidth(),
  withTheme(),
  connect(
    mapStateToProps,
    {
      toggleSidenav,
      toggleNotifications,
      updateLayout,
      changeTheme,
      changeThemeDirection
    }
  )
)(ContentToolbar);
