import {GET_USERS, LOGIN_USER, ADD_THREAD } from '../action'

const initialState = {}

export default(state = initialState, action = {}) =>{
  switch(action.type){
    case GET_USERS:
      return {...state,users:action.users}
    case LOGIN_USER:
      return {...state,loggedUser:action.user}
    case ADD_THREAD:
      return {...state, lastThread: action.thread}

    default:
    return state;
  }
}