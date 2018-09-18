import React from 'react';
import { shallow } from 'enzyme';
import { MainContainer } from './MainContainer';

describe('MainContainer', () => {
  let mockLocation;
  let wrapper;
  beforeEach(() => {
    mockLocation = {
      pathname: '/',
      search: '',
      hash: ''
    };
    wrapper = shallow(<MainContainer location={mockLocation} />);
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should match the snapshot if pathname does not equal /', () => {
    mockLocation = {
      pathname: '/home',
      search: '',
      hash: ''
    };
    wrapper = shallow(<MainContainer location={mockLocation} />);
    expect(wrapper).toMatchSnapshot();
  });
});
