import React from "react";
import PropTypes from "prop-types";
import compose from "recompose/compose";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Avatar from "@material-ui/core/Avatar";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import Person from "@material-ui/icons/Person";
import themeStyles from "./contacts-list.theme.style";
import scss from "./contacts-list.module.scss";
import Loader from "../../../../layouts/components/layout-loader/layout-loader.component";

class ContactsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialContacts: props.list,
      contacts: [],
      search_term: ""
    };
  }
  // Handles the filtering of contacts based on the input of search field.
  onChangeHandler(e) {
    this.setState({ search_term: e.target.value });
  }

  handleSearchClick(e) {
    if (this.state.search_term) {
      this.props.searchRetail(this.state.search_term);
    }
  }

  componentDidMount() {
    this.setState({ contacts: this.state.initialContacts });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ initialContacts: nextProps.list });
  }

  createDesktopListItem = contact => {
    const { classes, selectedContact, onSelect } = this.props;
    return (
      <ListItem
        title={contact.finger}
        key={contact.username}
        className={classNames(
          scss["portal-contacts-list__item"],
          contact === selectedContact
            ? classes["portal-contacts-list__item--active"]
            : ""
        )}
        onClick={onSelect(contact)}
        divider
        button
      >
        <Avatar>C</Avatar>
        <ListItemText
          primary={contact.finger}
          secondary={contact.username}
          classes={{
            primary:
              contact === selectedContact
                ? classes["portal-contacts-list__item__text--active"]
                : "",
            secondary: classNames(
              scss["portal-contacts-list__item__text"],
              contact === selectedContact
                ? classes["portal-contacts-list__item__text--active"]
                : ""
            )
          }}
        />
        <ListItemIcon
          className={classNames(
            contact === selectedContact
              ? classes.portalContactsListItemIconActive
              : "",
            classes.portalContactsListItemIcon
          )}
        >
          <Person />
        </ListItemIcon>
      </ListItem>
    );
  };

  createMobileListItem = contact => {
    const { classes, selectedContact, onSelect } = this.props;

    return (
      <ListItem
        title={contact.finger}
        key={contact.username}
        className={classNames(
          scss["portal-contacts-list__item"],
          contact === selectedContact
            ? classes["portal-contacts-list__item--active"]
            : ""
        )}
        onClick={onSelect(contact)}
        divider
        button
      >
        <Avatar
          alt={contact.finger}
          src={`${process.env.PUBLIC_URL}/${contact.photo}`}
        />
      </ListItem>
    );
  };

  createSearchTextField = () => {
    const { classes } = this.props;

    return (
      <div className={classes.searchContainer}>
        <TextField
          label="Search"
          id="search"
          type="search"
          fullWidth
          onChange={this.onChangeHandler.bind(this)}
          className={scss["portal-search-field"]}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search
                  color="primary"
                  onClick={this.handleSearchClick.bind(this)}
                  className={classes.iconHover}
                />
              </InputAdornment>
            )
          }}
        />
      </div>
    );
  };

  render() {
    const { classes, width } = this.props;
    let a;
    if (this.state.contacts) {
      return (
        <div className={classNames(classes.list, "portal-hide-scrollbars")}>
          {isWidthUp("sm", width) ? this.createSearchTextField() : ""}
          <List component="nav" className={classes.listWrapper}>
            {this.state.contacts.map(contact => {
              return isWidthUp("sm", width)
                ? this.createDesktopListItem(contact)
                : this.createMobileListItem(contact);
            })}
          </List>
        </div>
      );
    } else {
      return (
        <div className={classNames(classes.list, "portal-hide-scrollbars")}>
          {isWidthUp("sm", width) ? this.createSearchTextField() : ""}
          <List component="nav" className={classes.listWrapper}>
            {null}
          </List>
        </div>
      );
    }
  }
}

ContactsList.defaultProps = {
  selectedContact: null
};

ContactsList.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  selectedContact: PropTypes.shape({}),
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onSelect: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired
};
export default compose(
  withWidth(),
  withStyles(themeStyles, { withTheme: true })
)(ContactsList);
