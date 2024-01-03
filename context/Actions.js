
import { makeHTTPRequest } from '../service/Service';


export const URL_API = 'http://193.136.62.24/v1';

export const FETCH_LIBRARIES_STARTED = 'FETCH_LIBRARIES_STARTED';
export const FETCH_LIBRARIES_SUCCESS = 'FETCH_LIBRARIES_SUCCESS';
export const FETCH_LIBRARIES_FAILURE = 'FETCH_LIBRARIES_FAILURE';

export function fetchLibraries(url,request,dispatch){
  const success = (res) => dispatch(fetchLibrariesSuccess(res));
  const failure = (err) => dispatch(fetchLibrariesFailure(err.message));
  makeHTTPRequest(url,request,success,failure);
}
export function fetchAllLibrary(url, request, dispatch) {
  const success = (res) => dispatch(fetchAllLibrarySuccess(res));
  const failure = (err) => dispatch(fetchAllLibraryFailure(err.message));
  makeHTTPRequest(url, request, success, failure);
}



export function fetchLibrariesStarted() {
  return {
    type: FETCH_LIBRARIES_STARTED,

  }
}

export function fetchLibrariesSuccess(libraries) {
  return {
    type: FETCH_LIBRARIES_SUCCESS,
    payload: {
      data:
        [...libraries]
    }

  }
}
export function fetchLibrariesFailure(message) {
  return {
    type: FETCH_LIBRARIES_FAILURE,
    payload: {
      error: message
    }
  }
}


export const FETCH_ALL_LIBRARY_STARTED = 'FETCH_ALL_LIBRARY_STARTED';
export const FETCH_ALL_LIBRARY_SUCCESS = 'FETCH_ALL_LIBRARY_SUCCESS';
export const FETCH_ALL_LIBRARY_FAILURE = 'FETCH_ALL_LIBRARY_FAILURE';
export const DELETE_ALL_LIBRARY = 'DELETE_ALL_LIBRARY';

export function fetchAllLibraryStarted(id) {
  return {
    type: FETCH_ALL_LIBRARY_STARTED,
    payload: {
      id: id
    }
  }
}

export function fetchAllLibrarySuccess(all) {
  return {
    type: FETCH_ALL_LIBRARY_SUCCESS,
    payload: {
      data: [...all]
    }

  }
}

export function fetchAllLibraryFailure(message) {
  return {
    type: FETCH_ALL_LIBRARY_FAILURE,
    payload: {
      error: message
    }
  }
}

export function deleteAllLibrary() {
  return {
    type: DELETE_ALL_LIBRARY,
  }
}
