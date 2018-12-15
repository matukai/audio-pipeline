import {combineReducers} from 'redux';
import usersReducer from './usersReducer'
import threadsReducer from './threadsReducer';

export default combineReducers({
  users: usersReducer,
  threads: threadsReducer
})