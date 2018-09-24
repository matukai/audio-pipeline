import {GET_USERS, LOGIN_USER, ADD_THREAD, REGISTER_USER } from '../action'

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

    default:
    return state;
  }
}