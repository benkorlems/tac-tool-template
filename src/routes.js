import React from "react";
import { Route, Switch } from "react-router-dom";

import asyncComponent from "./components/async.component";
import Compact from "./layouts/layout-compact/layout-compact.component";
import NoLayout from "./layouts/layout-none/layout-none.component";
import LoginPage from "./containers/authentication/login/login.component";
import ContactsApp from "./containers/apps/contacts/contacts.component";

// DASHBOARD ROUTE

// APP ROUTES
const AsyncContactsApp = asyncComponent(() =>
  import("./containers/apps/contacts/contacts.component")
);

// AUTHENTICATION ROUTES
const AsyncLogin = asyncComponent(() =>
  import("./containers/authentication/login/login.component")
);
const AsyncRegister = asyncComponent(() =>
  import("./containers/authentication/register/register.component")
);
const AsyncProfile = asyncComponent(() =>
  import("./containers/authentication/profile/profile.component")
);
const AsyncLock = asyncComponent(() =>
  import("./containers/authentication/lock/lock.component")
);
const AsyncForgot = asyncComponent(() =>
  import("./containers/authentication/forgot-password/forgot-password.component")
);

// ERROR ROUTES
const AsyncError404 = asyncComponent(() =>
  import("./containers/errors/404.component")
);
const AsyncError500 = asyncComponent(() =>
  import("./containers/errors/500.component")
);

const AsyncNotFound = asyncComponent(() =>
  import("./containers/not-found/not-found.component")
);

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

const CompactLayout = props => <Compact>{props.children}</Compact>;

// TODO: Consider looping through an object containing all routes
export default ({ childProps, layout }) => {
  let activeLayout;
  switch (layout.currentLayout) {
    case "compact":
      activeLayout = CompactLayout;
      break;
    default:
      activeLayout = CompactLayout;
  }

  return (
    <Switch>
      <AppRoute
        path="/"
        exact
        component={LoginPage}
        props={childProps}
        layout={NoLayout}
      />
      <AppRoute
        path="/home"
        exact
        component={AsyncContactsApp}
        props={childProps}
        layout={activeLayout}
      />
      <AppRoute
        path="/apps/contacts"
        exact
        component={ContactsApp}
        props={childProps}
        layout={activeLayout}
      />
      <AppRoute
        path="/login"
        exact
        component={AsyncLogin}
        props={childProps}
        layout={NoLayout}
      />
      <AppRoute
        path="/register"
        exact
        component={AsyncRegister}
        props={childProps}
        layout={NoLayout}
      />
      <AppRoute
        path="/profile"
        exact
        component={AsyncProfile}
        props={childProps}
        layout={activeLayout}
      />
      <AppRoute
        path="/lock"
        exact
        component={AsyncLock}
        props={childProps}
        layout={NoLayout}
      />
      <AppRoute
        path="/forgot-password"
        exact
        component={AsyncForgot}
        props={childProps}
        layout={NoLayout}
      />
      <AppRoute
        path="/errors/404"
        exact
        component={AsyncError404}
        props={childProps}
        layout={NoLayout}
      />
      <AppRoute
        path="/errors/500"
        exact
        component={AsyncError500}
        props={childProps}
        layout={NoLayout}
      />
      <AppRoute component={AsyncNotFound} layout={activeLayout} />
    </Switch>
  );
};
