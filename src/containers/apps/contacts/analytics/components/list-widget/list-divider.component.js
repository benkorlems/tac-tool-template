import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: "360px",
    backgroundColor: theme.palette.background.paper
  }
});

function ListDividers(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List>
        <ListItem divider>
          <ListItemText primary="This is Inbox" />
        </ListItem>
        <ListItem divider>
          <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem divider>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem divider>
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
    </div>
  );
}

ListDividers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListDividers);
