import React from "react";
import PropTypes from "prop-types";
import compose from "recompose/compose";
import { withStyles } from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";
// Import redux Apis
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Array of contacts to show on the left side.
import contactsList from "../../../assets/data/apps/contacts/contacts.json";

import ContactsList from "./contacts-list/contacts-list.component";
//import ContactDetails from "./contact-details/contact-details.component";
import NoContacts from "./no-contacts/no-contacts.component";
import TabbedNavComponent from "./tabbed.nav.component";
import Loader from "../../../layouts/components/layout-loader/layout-loader.component";

import themeStyles from "./contacts.theme.style";
import scss from "./contacts.module.scss";

// Fetch Retail actionCreator functions
import {
  fetchRetail,
  searchRetail,
  clearError
} from "../../../actionCreators/fetchRetailActionCreators";

// Fetch Fiber actionCreator functions
import { fetchFiber } from "../../../actionCreators/fiberActionCreators";

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      retailCustomers: [],
      fetching: false,
      selectedContact: null,
      error: null
    };

    this.selectContact = this.selectContact.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ retailCustomers: nextProps.retailData.retailCustomers });
    this.setState({ fetching: nextProps.retailData.fetching_all_retail });
  }

  selectContact = contact => () => {
    this.props.fetchFiber(contact.username);
    this.setState({ selectedContact: contact });
  };

  render() {
    return (
      <div className={scss["contacts-wrapper"]}>
        {this.state.fetching ? (
          <Loader msg={""} />
        ) : (
          <ContactsList
            selectedContact={this.state.selectedContact}
            list={this.state.retailCustomers}
            onSelect={this.selectContact}
            searchRetail={this.props.searchRetail}
          />
        )}

        {this.state.selectedContact ? (
          <TabbedNavComponent contact={this.state.selectedContact} />
        ) : (
          <NoContacts />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    themeConfig: state.theme,
    retailData: state.retail
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRetail: bindActionCreators(fetchRetail, dispatch),
    searchRetail: bindActionCreators(searchRetail, dispatch),
    clearError: bindActionCreators(clearError, dispatch),
    fetchFiber: bindActionCreators(fetchFiber, dispatch)
  };
};

Contacts.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  theme: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

export default compose(
  withWidth(),
  withStyles(themeStyles, { withTheme: true }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Contacts);
