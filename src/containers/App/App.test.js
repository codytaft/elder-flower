import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('should match the snapshot', () => {
    let wrapper;
    wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should match the snapshot if location.pathname equals sign-up-elder', () => {
    let wrapper;
    const mockLocation = { pathname: '/sign-up-elder' };
    wrapper = shallow(<App location={mockLocation} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should match the snapshot if location.pathname does not equal sign-up-elder', () => {
    let wrapper;
    const mockLocation = { pathname: '/' };
    wrapper = shallow(<App location={mockLocation} />);
    expect(wrapper).toMatchSnapshot();
  });
});
