import React from 'react';
import { shallow } from 'enzyme';
import { SignUpElder } from './SignUpElder';
import { setCurrentUser } from '../../actions';
import { mapStateToProps, mapDispatchToProps } from './SignUpElder';
import bcrypt from 'bcryptjs';

jest.mock('bcryptjs', () => ({
  genSaltSync: () => 'salt',
  hashSync: () => 'yournewhash'
}));

describe('SignUpElder', () => {
  it('should match the snapshot', () => {
    let wrapper;
    wrapper = shallow(<SignUpElder />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('handleChange', () => {
  it('should update state', () => {
    let wrapper = shallow(<SignUpElder />);
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

describe('handleSubmit', () => {
  let wrapper;
  let mockSetCurrentUser;
  let mockHistory;
  let mockCurrentUser;
  let mockUser;
  beforeEach(async () => {
    mockSetCurrentUser = await jest.fn();
    mockHistory = { push: jest.fn() };
    wrapper = shallow(
      <SignUpElder setCurrentUser={mockSetCurrentUser} history={mockHistory} />
    );

    mockUser = {
      user: {
        firstName: 'Cody',
        lastName: 'Taft',
        phoneNumber: '+19038511575',
        email: 'cody.taft@gmail.com',
        password: '123',
        contactName: 'Gaynell',
        contactPhone: '+17203304593',
        isElder: true
      }
    };
    mockCurrentUser = {
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
  });
  it('should set state with the correct phone numbers and password', async () => {
    let mockEvent = { preventDefault: () => jest.fn() };
    let phoneNumber = '+19038511575';
    let contactPhone = '+19038511575';
    let salt = bcrypt.genSaltSync();
    let hash = bcrypt.hashSync();
    mockUser = {
      user: {
        firstName: 'Cody',
        lastName: 'Taft',
        phoneNumber: '+19038511575',
        email: 'cody.taft@gmail.com',
        password: hash,
        contactName: 'Gaynell',
        contactPhone: '+17203304593',
        isElder: true
      }
    };
    wrapper.setState({
      firstName: 'Cody',
      lastName: 'Taft',
      phoneNumber: '9038511575',
      email: 'cody.taft@gmail.com',
      password: hash,
      contactName: 'Gaynell',
      contactPhone: '7203304593'
    });

    let mockResult = [
      'http://localhost:3000/api/v1/users/',
      {
        method: 'POST',
        body: JSON.stringify(mockUser),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ];

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockCurrentUser)
      })
    );

    await wrapper.instance().handleSubmit(mockEvent);
    await wrapper.setState({ phoneNumber, contactPhone, password: hash });
    expect(window.fetch).toHaveBeenCalledWith(...mockResult);
  });
});

describe('testPhoneNumber', () => {
  let wrapper;
  let mockTestResponsePhoneNumber;
  beforeEach(() => {
    mockTestResponsePhoneNumber = jest.fn();
    wrapper = shallow(
      <SignUpElder testResponsePhoneNumber={mockTestResponsePhoneNumber} />
    );
  });
  it('should invoke the testResponsePhoneNumber method', async () => {
    let mockEvent = { preventDefault: () => jest.fn() };
    let mockUser = {
      name: 'cody',
      to: '+19038511575',
      body: `If this is cody, type 'yes'. If not type 'no'.`
    };

    let mockResult = [
      'http://localhost:3000/api/sendMessage',
      {
        method: 'POST',
        body: JSON.stringify(mockUser),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ];

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockUser)
      })
    );

    wrapper.setState({ firstName: 'cody', phoneNumber: '9038511575' });

    await wrapper.instance().testPhoneNumber(mockEvent);

    expect(window.fetch).toHaveBeenCalledWith(...mockResult);
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
