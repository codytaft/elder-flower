import React from 'react';
import { shallow } from 'enzyme';
import { Routes } from './Routes';
import Login from '../../containers/Login/Login';
import SignUpHome from '../../components/SignUpHome/SignUpHome';
import SignUpElder from '../../containers/SignUpElder/SignUpElder';
import SignUpCarer from '../../containers/SignUpCarer/SignUpCarer';

describe('Routes', () => {
  beforeEach(() => {
    let wrapper;
    wrapper = shallow(<Routes />);
  });

  it('should match snapshot of login Route', () => {
    let loginWrapper = shallow(<Routes path="/login" component={Login} />);
    expect(loginWrapper).toMatchSnapshot();
  });
  it('should match snapshot of signup Route', () => {
    let signUpWrapper = shallow(
      <Routes path="/signup" component={SignUpHome} />
    );
    expect(signUpWrapper).toMatchSnapshot();
  });
  it('should match snapshot of / Route', () => {
    let rootWrapper = shallow(<Routes path="/" />);
    expect(rootWrapper).toMatchSnapshot();
  });
  it('should match snapshot of home Route', () => {
    let homeWrapper = shallow(<Routes path="/home" />);
    expect(homeWrapper).toMatchSnapshot();
  });
  it('should match snapshot of sign-up-elder Route', () => {
    let signUpElder = shallow(
      <Routes path="/sign-up-elder" component={SignUpElder} />
    );
    expect(signUpElder).toMatchSnapshot();
  });
  it('should match snapshot of sign-up-carer Route', () => {
    let signUpCarer = shallow(
      <Routes path="/sign-up-carer" component={SignUpCarer} />
    );
    expect(signUpCarer).toMatchSnapshot();
  });
});
