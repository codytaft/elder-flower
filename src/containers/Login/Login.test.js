import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './Login';
import { setCurrentUser } from '../../actions';
import { mapStateToProps, mapDispatchToProps } from './Login';
import bcrypt from 'bcryptjs';

jest.mock('bcryptjs', () => ({
  genSaltSync: () => 'sdkfj',
  hashSync: () => 'yournewhash',
  compareSync: () => true
}));

describe('Login', () => {
  let wrapper;
  it('should match the snapshot', () => {
    wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state on change', () => {
    wrapper = shallow(<Login />);

    const mockEmailEvent = {
      target: { name: 'email', value: 'cody.taft@gmail.com' }
    };
    const mockPasswordEvent = {
      target: { name: 'password', value: '123' }
    };

    wrapper.instance().handleChange(mockEmailEvent);
    expect(wrapper.state('email')).toEqual(mockEmailEvent.target.value);
    wrapper.instance().handleChange(mockPasswordEvent);
    expect(wrapper.state('password')).toEqual(mockPasswordEvent.target.value);
  });

  it.skip('should get user on submit', async () => {
    let mockEvent = { preventDefault: () => jest.fn() };
    let mockUser = {
      email: 'cody.taft@gmail.com',
      password: '123'
    };
    let history = {
      length: 27,
      action: 'PUSH',
      location: { pathname: '/dashboard', search: '', hash: '', key: 'kzlimn' }
    };
    const email = 'cody.taft@gmail.com';
    const password = '123';
    await wrapper.setState({ email, password });
    await wrapper.instance().handleSubmit(mockEvent);
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockUser)
      })
    );

    wrapper = shallow(<Login />);
  });
});

describe('mapStateToProps', () => {
  it('should return an object with a currentUser object', () => {
    const mockCurrentUser = {
      id: 75,
      firstName: 'Cody',
      lastName: 'Taft',
      phoneNumber: '+19038511575',
      email: 'cody.taft@gmail.com',
      password: '123',
      contactName: 'Gaynell',
      contactPhone: '+17203304593',
      isElder: false
    };
    const mockState = {
      currentUser: { ...mockCurrentUser }
    };

    const expected = {
      currentUser: {
        id: 75,
        firstName: 'Cody',
        lastName: 'Taft',
        phoneNumber: '+19038511575',
        email: 'cody.taft@gmail.com',
        password: '123',
        contactName: 'Gaynell',
        contactPhone: '+17203304593',
        isElder: false
      }
    };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {
  it('should invoke dispatch when using a function from mapDispatchToProps', () => {
    const mockCurrentUser = {
      id: 75,
      firstName: 'Cody',
      lastName: 'Taft',
      phoneNumber: '+19038511575',
      email: 'cody.taft@gmail.com',
      password: '123',
      contactName: 'Gaynell',
      contactPhone: '+17203304593',
      isElder: false
    };
    const mockDispatch = jest.fn();
    const actionToDispatch = setCurrentUser(mockCurrentUser);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setCurrentUser(mockCurrentUser);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
