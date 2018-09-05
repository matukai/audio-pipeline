import axios from 'axios';

export const GET_USERS = 'GET_USERS';
export const LOGIN_USER = 'LOGIN_USER';
export const REGISTER_USER = 'REGISTER_USER';

export const getUsers = ()=>{
  return dispatch => {
    return axios.get('/api/users')
    .then(result=>{
      return result.data
    })
    .then(result =>{
      dispatch({
        type:GET_USERS,
        users:result
      })
    })
    .catch(err=>{
      console.log(err)
    })
  }
}

export const loginUser = (user) => {
  return dispatch => {
    return axios.post('/api/login',user)
    .then(result => {
      dispatch({
        type: LOGIN_USER,
        user: result
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export const registerUser = (newUser) => {
  return dispatch => {
    return axios.post('/api/users', newUser)
    .then(result => {
      dispatch({
        type: REGISTER_USER,
        newUser: result
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
}
