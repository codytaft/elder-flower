import { combineReducers } from 'redux';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  setCurrentUser: userReducer,
  createUser: userReducer
});

export default rootReducer;
