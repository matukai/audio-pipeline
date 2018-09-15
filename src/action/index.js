import axios from 'axios';

export const GET_USERS = 'GET_USERS';
export const LOGIN_USER = 'LOGIN_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const ADD_THREAD = 'ADD_THREAD';
export const RECENT_THREADS = 'RECENT_THREADS';
export const CLICKED_THREAD = 'CLICKED_THREAD';


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
      alert('Incorrect Username or Password')
      console.log(err)
    })
  }
}

export const registerUser = (newUser) => {
  return dispatch => {
    return axios.post('/api/register', newUser)
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

export const recentThreads = () => {
  return dispatch => {
    return axios.get('/api/threads/recent')
    .then(result=>{
      return result.data
    })
    .then(result =>{
      dispatch({
        type: RECENT_THREADS,
        threads: result
      })
    })
    .catch(err=>{
      console.log(err)
    })
  }
}

export const clickedThread = (id) => {
  return dispatch => {
    return axios.get(`/api/threads/${id}`) 
    .then(result => {
      return result.data;
    })
    .then(result => {
      dispatch({
        type: CLICKED_THREAD,
        payload: result
      })
    })
  }
}