import axios from 'axios';

export const GET_USERS = 'GET_USERS';


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

