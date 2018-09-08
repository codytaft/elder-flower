import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login } from '../../containers/Login/Login';
import SignUp from '../../containers/SignUp/SignUp';
import Emergency from '../../containers/Emergency/Emergency';

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
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};

export default Routes;
