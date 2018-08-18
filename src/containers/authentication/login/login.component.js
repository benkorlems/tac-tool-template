import React, { Component } from "react";
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
      emailValue: "",
      passwordValue: ""
    };

    this.handleEmailInput = event => {
      this.setState({
        emailValue: event.target.value
      });
    };

    this.handlePasswordInput = event => {
      this.setState({
        passwordValue: event.target.value
      });
    };

    this.handleForgotPassword = () => {
      history.push("/home");
    };
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
                    href="/register"
                    color="secondary"
                    variant="raised"
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
                    label="Email Address"
                    fullWidth
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                  <TextField
                    label="Password"
                    fullWidth
                    margin="normal"
                    type="password"
                  />
                </CardContent>
                <CardActions className={scss["login-actions"]}>
                  <Button href="/login" color="primary" variant="raised">
                    Login
                  </Button>
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

Login.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

export default compose(
  withWidth(),
  withStyles(themeStyles, { withTheme: true })
)(Login);
