import * as actions from '../actions';

describe('actions', () => {
  it('should return type of SET_CURRENT_USER with a currentUser', () => {
    const user = {
      firstName: 'Cody',
      lastName: 'Taft',
      phoneNumber: '+19038511575',
      email: 'cody.taft@gmail.com',
      password: '123',
      contactName: 'Gaynell',
      contactPhone: '+17203304593',
      isElder: false
    };

    const expected = {
      type: 'SET_CURRENT_USER',
      user
    };

    const result = actions.setCurrentUser(user);

    expect(result).toEqual(expected);
  });
});
