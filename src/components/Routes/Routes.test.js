import React from 'react';
import { shallow } from 'enzyme';
import { Routes } from './Routes';
import Login from '../../containers/Login/Login';
import SignUp from '../../containers/SignUp/SignUp';
import { ExecutionStepContext } from 'twilio/lib/rest/studio/v1/flow/execution/executionStep';

describe('Routes', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Routes />);
  });

  it('should match snapshot of login Route', () => {
    let loginWrapper = shallow(<Routes path="/login" component={Login} />);
    expect(loginWrapper).toMatchSnapshot();
  });
  it('should match snapshot of signup Route', () => {
    let loginWrapper = shallow(<Routes path="/signup" component={SignUp} />);
    expect(loginWrapper).toMatchSnapshot();
  });
});
