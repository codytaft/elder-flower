import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps, mapDispatchToProps } from './Header';
import { setCurrentUser } from '../../actions';

describe('Header', () => {
  let wrapper;
  let mockSetCurrentUser;
  let mockHistory;
  let mockCurrentUser;

  beforeEach(() => {
    mockSetCurrentUser = jest.fn();
    mockHistory = {
      length: 50,
      action: 'PUSH',
      location: { pathname: '/', search: '', hash: '', key: 'ur39zc' },
      replace: jest.fn()
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

    wrapper = shallow(
      <Header
        setCurrentUser={mockSetCurrentUser}
        history={mockHistory}
        currentUser={null}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when currentUser exists', () => {
    wrapper = shallow(
      <Header
        setCurrentUser={mockSetCurrentUser}
        history={mockHistory}
        currentUser={mockCurrentUser}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should set setCurrentUser with null', () => {
    wrapper.instance().logoutUser();
    expect(mockSetCurrentUser).toHaveBeenCalledWith(null);
  });

  it('should set setCurrentUser with null', () => {
    wrapper.instance().logoutUser();
    expect(mockSetCurrentUser).toHaveBeenCalledWith(null);
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
