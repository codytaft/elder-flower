import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { currentUserReducer } from './currentUserReducer';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  users: userReducer
});

export default rootReducer;
