import { combineReducers } from 'redux';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  currentUser: userReducer,
  users: userReducer
});

export default rootReducer;
