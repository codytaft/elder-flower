import React from 'react';
import { shallow } from 'enzyme';
import { Contacts, mapStateToProps } from './Contacts';

describe('Contacts', () => {
  it('should match the snapshot', () => {
    let wrapper;
    let mockEvent = { preventDefault: () => jest.fn() };
    let mockCurrentUser = {
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

    let mockFetch = [
      'http://localhost:3000/api/sendMessage',
      {
        body: '{"name":"Gaynell","to":"+17203304593","body":"Hi Gaynell. "}',
        headers: { 'Content-Type': 'application/json' },
        method: 'POST'
      }
    ];

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockCurrentUser)
      })
    );

    wrapper = shallow(<Contacts currentUser={mockCurrentUser} />);
    wrapper.instance().handleSubmit(mockEvent);
    expect(wrapper).toMatchSnapshot();
    expect(window.fetch).toHaveBeenCalledWith(...mockFetch);
  });

  it('should update state on change', () => {
    let wrapper = shallow(<Contacts />);

    const mockQuestionEvent = {
      target: { name: 'question', value: 'Are you okay?' }
    };

    wrapper.instance().handleChange(mockQuestionEvent);
    expect(wrapper.state('question')).toEqual(mockQuestionEvent.target.value);
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
