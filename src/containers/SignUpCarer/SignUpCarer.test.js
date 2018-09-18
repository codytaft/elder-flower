import React from 'react';
import { shallow } from 'enzyme';
import { SignUpCarer } from './SignUpCarer';
import { setCurrentUser } from '../../actions';
import { mapStateToProps, mapDispatchToProps } from './SignUpCarer';

describe('SignupCarer', () => {
  it('should match the snapshot', () => {
    let wrapper;
    wrapper = shallow(<SignUpCarer />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('handleChange', () => {
  it('should update state', () => {
    let wrapper = shallow(<SignUpCarer />);
    const mockFirstNameEvent = { target: { name: 'firstName', value: 'cody' } };
    const mockLastNameEvent = { target: { name: 'lastName', value: 'taft' } };
    const mockPhoneNumberEvent = {
      target: { name: 'phoneNumber', value: '+19038511575' }
    };
    const mockEmailEvent = {
      target: { name: 'email', value: 'cody.taft@gmail.com' }
    };
    const mockPasswordEvent = { target: { name: 'password', value: '123' } };
    const mockContactPhoneEvent = {
      target: { name: 'contactPhone', value: '+17203304593' }
    };
    const mockContactNameEvent = {
      target: { name: 'contactName', value: 'Gaynell' }
    };

    wrapper.instance().handleChange(mockFirstNameEvent);
    expect(wrapper.state('firstName')).toEqual(mockFirstNameEvent.target.value);

    wrapper.instance().handleChange(mockLastNameEvent);
    expect(wrapper.state('lastName')).toEqual(mockLastNameEvent.target.value);

    wrapper.instance().handleChange(mockPhoneNumberEvent);
    expect(wrapper.state('phoneNumber')).toEqual(
      mockPhoneNumberEvent.target.value
    );

    wrapper.instance().handleChange(mockEmailEvent);
    expect(wrapper.state('firstName')).toEqual(mockFirstNameEvent.target.value);

    wrapper.instance().handleChange(mockPasswordEvent);
    expect(wrapper.state('password')).toEqual(mockPasswordEvent.target.value);

    wrapper.instance().handleChange(mockContactPhoneEvent);
    expect(wrapper.state('contactPhone')).toEqual(
      mockContactPhoneEvent.target.value
    );

    wrapper.instance().handleChange(mockContactNameEvent);
    expect(wrapper.state('contactName')).toEqual(
      mockContactNameEvent.target.value
    );
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
