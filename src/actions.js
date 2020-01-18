import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED 
} from './constants';

// Action
export const setSearchField = (text) => {
  //console.log(text);
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  }
}

// thunkMiddleware dependency: listens to actions and allows functions to be returned instead of objects
export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch('https://my-json-server.typicode.com/UncaughtTypeError/MyJasonServer/robots')
      .then(response => response.json())
      .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
      .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));
}