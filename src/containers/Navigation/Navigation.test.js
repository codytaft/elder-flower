import React from 'react';
import { shallow } from 'enzyme';
import { Navigation } from './Navigation';

describe('Navigation', () => {
  it('should match the snapshot', () => {
    let wrapper;
    wrapper = shallow(<Navigation />);
    expect(wrapper).toMatchSnapshot();
  });
});
