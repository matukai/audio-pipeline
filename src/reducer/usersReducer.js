import {GET_USERS, LOGIN_USER, ADD_THREAD, REGISTER_USER, CHECK_LOGIN } from '../action'

const initialState = {}

export default(state = initialState, action = {}) =>{
  
  switch(action.type){
    case GET_USERS:
      return {...state,users:action.users}
    case LOGIN_USER:
      return {...state,loggedUser:action.user}
    case REGISTER_USER:
      return {...state, registeredUser:action.newUser}
    case ADD_THREAD:
      return {...state, lastThread: action.thread}
    case CHECK_LOGIN:
      return {...state, checkLogin: action.isLoggedIn}
    default:
    return state;
  }
}