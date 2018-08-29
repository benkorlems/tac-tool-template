import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  loginUser,
  logoutUser,
  clearError
} from "../../../actionCreators/authActionCreators";

import PropTypes from "prop-types";
import compose from "recompose/compose";
import classNames from "classnames";

import withWidth from "@material-ui/core/withWidth";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";

import { withStyles } from "@material-ui/core/styles";

import themeStyles from "./login.theme.style";
import scss from "./login.module.scss";

import logoImage from "../../../assets/images/portal-logo.png";

class Login extends Component {
  constructor(props) {
    super(props);
    const { classes, width, history } = this.props;
    this.classes = classes;
    // Flip container to column on mobile screens.
    const panelDirection = width === "xs" ? "column" : "row";
    this.panelDirection = panelDirection;

    this.history = history;

    //initialize state
    this.state = {
      email: "",
      password: "",
      error: "",
      authenticating: false
    };

    this.onChange = this.onChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRequestAccess = this.handleRequestAccess.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.authenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.authenticated) {
      this.props.history.push("/dashboard");
    }
    this.setState({ error: nextProps.auth.error });
    this.setState({ authenticating: nextProps.auth.authenticating });
  }

  handleLogin() {
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  }
  handleRequestAccess() {
    this.props.history.push("/register");
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <Grid
        container
        direction="row"
        spacing={0}
        justify="center"
        alignItems="center"
        className={this.classes.background}
      >
        <Grid item sm={10} xs={12} className={scss.panel}>
          <Grid direction={this.panelDirection} container spacing={0}>
            <Grid item sm={6} xs={12}>
              <Card
                className={classNames(scss.card, this.classes["primary-card"])}
              >
                <CardContent className={scss["signup-content"]}>
                  <img
                    src={logoImage}
                    className={scss["signup-logo"]}
                    alt="logo"
                  />
                  <Typography variant="headline" component="h2" gutterBottom>
                    ipNX iTAC Diagnostic Tool
                  </Typography>
                  <Typography component="p" gutterBottom>
                    Welcome to the ipNX TAC Diagnostic Tool. Please login using
                    the form on your right.{" "}
                    <span>Access is for authorized staff only.</span>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    color="secondary"
                    variant="raised"
                    onClick={this.handleRequestAccess}
                  >
                    Request access
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Card className={scss.card}>
                <CardContent>
                  <TextField
                    name="email"
                    label="Email Address"
                    fullWidth
                    value={this.state.email}
                    onChange={this.onChange}
                    onClick={this.props.clearError}
                  />
                  <FormHelperText error="true">
                    {this.state.error}
                  </FormHelperText>
                  <TextField
                    name="password"
                    label="Password"
                    fullWidth
                    margin="normal"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    onClick={this.props.clearError}
                  />
                  <FormHelperText error="true">
                    {this.state.error}
                  </FormHelperText>
                </CardContent>
                <CardActions className={scss["login-actions"]}>
                  {this.state.authenticating ? (
                    <Button color="primary" variant="raised" disabled>
                      Logging in ...
                    </Button>
                  ) : (
                    <Button
                      color="primary"
                      variant="raised"
                      onClick={this.handleLogin}
                    >
                      Login
                    </Button>
                  )}
                  <Button onClick={this.handleForgotPassword}>
                    Forgot Password
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    themeConfig: state.theme,
    auth: state.auth
  };
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: bindActionCreators(loginUser, dispatch),
    logoutUser: bindActionCreators(logoutUser, dispatch),
    clearError: bindActionCreators(clearError, dispatch)
  };
};

Login.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

export default compose(
  withWidth(),
  withStyles(themeStyles, { withTheme: true }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Login);
