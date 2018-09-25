import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('App', () => {
  it('should match the snapshot', () => {
    let wrapper;
    const mockLocation = {
      pathname: '/',
      search: '',
      hash: ''
    };
    wrapper = shallow(<App location={mockLocation} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should match the snapshot if location.pathname equals sign-up-elder', () => {
    let wrapper;
    const mockLocation = {
      pathname: '/sign-up-elder',
      search: '',
      hash: ''
    };
    wrapper = shallow(<App location={mockLocation} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should match the snapshot if location.pathname equals sign-up-carer', () => {
    let wrapper;
    const mockLocation = {
      pathname: '/sign-up-carer',
      search: '',
      hash: ''
    };
    wrapper = shallow(<App location={mockLocation} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should match the snapshot if location.pathname does not equal sign-up-elder or sign-up-carer', () => {
    let wrapper;
    const mockLocation = {
      pathname: '/home',
      search: '',
      hash: ''
    };
    wrapper = shallow(<App location={mockLocation} />);
    expect(wrapper).toMatchSnapshot();
  });
});
