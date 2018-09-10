import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login } from '../../containers/Login/Login';
import { SignUpHome } from '../../components/SignUpHome/SignUpHome';
import SignUpElder from '../../containers/SignUpElder/SignUpElder';
import SignUpCarer from '../../containers/SignUpCarer/SignUpCarer';
import Emergency from '../../containers/Emergency/Emergency';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" />
      <Route exact path="/home" />
      <Route exact path="/login" component={Login} />
      <Route exact path="/sign-up-home" component={SignUpHome} />
      <Route exact path="/sign-up-elder" component={SignUpElder} />
      <Route exact path="/sign-up-carer" component={SignUpCarer} />
      <Route
        exact
        path="/emergency"
        render={() => {
          return <Emergency />;
        }}
      />
    </Switch>
  );
};

export default Routes;
