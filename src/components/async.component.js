import React, { Component } from "react";
import LayoutLoader from "../layouts/components/layout-loader/layout-loader.component";

// import redux API
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// import action creator
import { fetchRetail } from "../actionCreators/fetchRetailActionCreators";

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null,
        fetching: ""
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component,
        fetching: this.props.fetching
      });
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        fetching: nextProps.fetching
      });
    }

    render() {
      const C = this.state.component;
      return C ? (
        <C {...this.props} />
      ) : (
        <LayoutLoader size={50} msg={"loading..."} />
      );
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      fetchRetail: bindActionCreators(fetchRetail, dispatch)
    };
  };
  const mapStateToProps = state => {
    return {
      fetching: state.retail.fetching_all_retail
    };
  };
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(AsyncComponent);
}
