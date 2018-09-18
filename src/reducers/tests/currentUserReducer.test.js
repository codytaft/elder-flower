import { currentUserReducer } from '../currentUserReducer';
import * as actions from '../../actions';

describe('currentUserReducer', () => {
  it('should return the intial state', () => {
    const expected = null;

    const result = currentUserReducer(null, {});

    expect(result).toEqual(expected);
  });
  it('should return the state with current user', () => {
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
    const expected = user;
    const result = currentUserReducer(null, actions.setCurrentUser(user));
    expect(result).toEqual(expected);
  });
});
