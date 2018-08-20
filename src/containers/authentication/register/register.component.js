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

import themeStyles from "./register.theme.style";
import scss from "./register.module.scss";

import logoImage from "../../../assets/images/portal-logo.png";

class Register extends Component {
  constructor(props) {
    super(props);
    const { classes, width, history } = this.props;
    // Flip container to column on mobile screens.
    const panelDirection = width === "xs" ? "column" : "row";

    this.panelDirection = panelDirection;
    this.classes = classes;
    this.history = history;
    // Initial State
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      department: ""
    };
    // Bind method definitions
    this.onChange = this.onChange.bind(this);
    this.handleRequestAccess = this.handleRequestAccess.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleRequestAccess() {
    let accessRequestData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      department: this.state.department
    };
    console.log(accessRequestData);
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
                    Request Access
                  </Typography>
                  <Typography component="p" gutterBottom>
                    Welcome It only takes a couple of minutes to request for
                    Access. Just fill in your details for approval. All
                    accounts, are bound by company Terms & Conditions and
                    Privacy Policy.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    color="secondary"
                    variant="raised"
                    onClick={() => this.history.push("/login")}
                  >
                    I already have an account
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Card className={scss.card}>
                <CardContent>
                  <Grid container>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        label="Firstname"
                        name="firstName"
                        fullWidth
                        value={this.state.firstName}
                        onChange={this.onChange}
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        label="Lastname"
                        name="lastName"
                        fullWidth
                        value={this.state.lastName}
                        onChange={this.onChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Email Address"
                        name="email"
                        fullWidth
                        value={this.email}
                        onChange={this.onChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Password"
                        name="password"
                        fullWidth
                        type="password"
                        value={this.state.password}
                        onChange={this.onChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Repeat Password"
                        fullWidth
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        type="password"
                        onChange={this.onChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Department"
                        fullWidth
                        name="department"
                        value={this.state.department}
                        onChange={this.onChange}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    color="primary"
                    variant="raised"
                    onClick={this.handleAccessRequest}
                  >
                    Request Access
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

Register.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

export default compose(
  withWidth(),
  withStyles(themeStyles, { withTheme: true })
)(Register);
