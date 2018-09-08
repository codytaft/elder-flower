import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../../containers/Login/Login';
import SignUp from '../../containers/SignUp/SignUp';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" />
      <Route exact path="/home" />
      <Route exact path="/groups" />
      <Route exact path="/new-group" />
      <Route exact path="/group-setup" />
      <Route
        exact
        path="/emergency"
        render={() => {
          return <Emergency />;
        }}
      />
      <Route exact path="/sign-up" component={Login} />
      <Route exact path="/login" component={SignUp} />
    </Switch>
  );
};

export default Routes;
