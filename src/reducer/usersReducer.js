import {GET_USERS} from '../action'

const initialState = {
  users:1
}

export default(state = initialState, action = {}) =>{
  switch(action.type){
    case GET_USERS:
    return {...state,users:action.users}
  
    default:
    return state;
  }
}