import {RECENT_THREADS, CLICKED_THREAD } from '../action';

const initialState = {}

export default(state = initialState, action = {}) => {
  switch(action.type){
    case RECENT_THREADS:
      return {...state,recentThreads: action.threads}
    case CLICKED_THREAD:
      return {...state, clickedThread: action.payload}
    default:
    return state;
  }
}