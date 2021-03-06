import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import classNames from "classnames";

import themeStyles from "./no-contacts.theme.style";
import scss from "./no-contacts.module.scss";

const NoContacts = props => {
  const { classes } = props;

  return (
    <div
      className={classNames(
        scss["portal-contacts-no-contacts"],
        classes["portal-contacts-no-contacts"]
      )}
    >
      <Typography component="h2">
        Please search for a customer and select to begin...
      </Typography>
    </div>
  );
};

NoContacts.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(NoContacts);
