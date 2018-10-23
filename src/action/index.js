import axios from 'axios';

export const GET_USERS = 'GET_USERS';
export const LOGIN_USER = 'LOGIN_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const ADD_THREAD = 'ADD_THREAD';
export const RECENT_THREADS = 'RECENT_THREADS';
export const CLICKED_THREAD = 'CLICKED_THREAD';
export const ADD_COMMENT = 'ADD_COMMENT';
export const GET_GENRES = 'GET_GENRES';
export const CLICKED_GENRE = 'CLICKED_GENRE';
export const CLICKED_SUBGENRE = 'CLICKED_SUBGENRE';

export const clickedSubGenre = (data) => {
  return dispatch => {
    dispatch({
      type: CLICKED_SUBGENRE,
      subGenre: data
    })
  }
}

export const clickedGenre = (data) => {
  return dispatch => {
    dispatch({
      type: CLICKED_GENRE,
      genre: data
    })
  }
}

export const getGenres = () => {
  return dispatch => {
    return axios.get('/api/genres')
    .then(result => {
      return result.data
    })
    .then(result =>{
      dispatch({
        type: GET_GENRES,
        genres: result
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export const getUsers = () => {
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
  console.log(user)
  return dispatch => {
    return axios.post('/api/login',user)
    .then(result => {
      if(result){
        dispatch({
          type: LOGIN_USER,
          user: result
        })
        localStorage.setItem('User',result.data.username)
      }
    })
    .catch(err => {
      alert('Incorrect Username or Password')
      console.log(err)
    })
  }
}

export const registerUser = (newUser) => {
  console.log('action',newUser)
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



export const addComment = (data) => {
  return dispatch => {
    return axios.post('/api/comments',data)
    .then(result => {
      dispatch({
        type: ADD_COMMENT,
        payload: result
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
    .catch(err => {
      console.log(err)
    })
  }
}

