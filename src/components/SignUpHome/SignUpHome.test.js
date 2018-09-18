import React from 'react';
import { shallow } from 'enzyme';
import { SignUpHome } from './SignUpHome';

describe('SignUpHome', () => {
  it('should match the snapshot', () => {
    let wrapper;
    wrapper = shallow(<SignUpHome />);
    expect(wrapper).toMatchSnapshot();
  });
});
