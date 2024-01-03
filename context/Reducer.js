
import {
  FETCH_LIBRARIES_STARTED,
  FETCH_LIBRARIES_SUCCESS,
  FETCH_LIBRARIES_FAILURE,
  FETCH_ALL_LIBRARY_STARTED,
  FETCH_ALL_LIBRARY_SUCCESS,
  FETCH_ALL_LIBRARY_FAILURE,
  DELETE_ALL_LIBRARY,
} from './Actions'



function reducer(state, action) {
  switch (action.type) {
    case FETCH_LIBRARIES_STARTED:
      return {
        ...state,
        libraries: {
          loading: true,
          error: null,
          data: []
        }
      }
    case FETCH_LIBRARIES_SUCCESS:
      return {
        ...state,
        libraries: {
          loading: false,
          error: null,
          data: [...action.payload.data]
        }
      }
    case FETCH_LIBRARIES_FAILURE:
      return {
        ...state,
        libraries: {
          loading: false,
          error: action.payload.error,
          data: [],
        }
      }
    case FETCH_ALL_LIBRARY_STARTED:
      return {
        ...state,
        all: {
          loading: true,
          error: null,
          data: [],
          id: action.payload.all,
        }
      }
    case FETCH_ALL_LIBRARY_SUCCESS:
      return {
        ...state,
        all: {
          loading: false,
          error: null,
          data: [...action.payload.data],
          id: state.all.id,
        }
      }
    case FETCH_ALL_LIBRARY_FAILURE:
      return {
        ...state,
        all: {
          loading: false,
          error: action.payload.error,
          data: [],
          id: 0,
        }
      }
    case DELETE_ALL_LIBRARY:
      return {
        ...state,
        all: {
          loading: false,
          error: null,
          data: [],
          id: 0,
        }
      }
    default:
      return state
  }
}


export default reducer;
