import axios from 'axios';

export const GET_USERS = 'GET_USERS';
export const LOGIN_USER = 'LOGIN_USER';
export const ADD_THREAD = 'ADD_THREAD';

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


export const addThread = (data) => {
  return dispatch => {
    return axios.post('/api/threads',data)
    .then(result => {
      dispatch({
        type: ADD_THREAD,
        thread: result
      })
      
    })
    .catch(err => {
      console.log(err)
    })
  }
}

// export const addThread = (data) =>{
  
//   let thread = {
//     title:data.title,
//     body:data.body
//   }
//   console.log('aaction',thread)
//   return dispatch => {
//     return axios.post('/api/login',thread)
//     .then(result => {
//       console.log(result)
//       dispatch({
//         type: LOGIN_USER,
//         user: result
//       })
      
//     })
//     .catch(err => {
//       console.log(err)
//     })
//   }
// }
