import React from 'react';
import { Route, Redirect } from 'react-router-dom';
/*
  Private Route rules:
  1. It has the same API as <Route />.
  2. It renders a <Route /> and passes all the props through to it.
  3. It checks if the user is authenticated, if they are, it renders the “component” prop. If not, it redirects the user to /login.
*/

const PrivateRoute = ({ component: Component, ...rest }) => {
  // fancy JS to pull the component prop out of the props obj
  // use the ...rest operator
  // rename component to Component
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem('token')) {
          // user is authed
          return <Component {...props} />;
        } else {
          // user not authed - redirect to /login
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;