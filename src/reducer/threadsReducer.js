import {RECENT_THREADS, CLICKED_THREAD, ADD_COMMENT, GET_GENRES, CLICKED_GENRE, CLICKED_SUBGENRE} from '../action';

const initialState = {}

export default(state = initialState, action = {}) => {
  switch(action.type){
    case RECENT_THREADS:
      return {...state,recentThreads: action.threads}
    case CLICKED_THREAD:
      return {...state, clickedThread: action.payload}
    case ADD_COMMENT:
      return {...state, addComment: action.payload}
    case GET_GENRES:
      return {...state, genres: action.genres}
    case CLICKED_GENRE:
      return {...state, clickGenre: action.genre}
    case CLICKED_SUBGENRE:
      return {...state, clickedSubGenre: action.subGenre}
    default:
    return state;
  }
}