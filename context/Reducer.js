
import {
  FETCH_LIBRARIES_STARTED,
  FETCH_LIBRARIES_SUCCESS,
  FETCH_LIBRARIES_FAILURE,
  FETCH_ALL_LIBRARY_STARTED,
  FETCH_ALL_LIBRARY_SUCCESS,
  FETCH_ALL_LIBRARY_FAILURE,
  DELETE_ALL_LIBRARY,
  FETCH_GET_ALL_LIBRARIES_STARTED,
  FETCH_GET_ALL_LIBRARIES_SUCCESS,
  FETCH_GET_ALL_LIBRARIES_FAILURE,
  FETCH_POST_LIBRARY_STARTED,
  FETCH_POST_LIBRARY_SUCCESS,
  FETCH_POST_LIBRARY_FAILURE,
  FETCH_DELETE_LIBRARY_STARTED,
  FETCH_DELETE_LIBRARY_SUCCESS,
  FETCH_DELETE_LIBRARY_FAILURE,
  FETCH_GET_ALL_BOOKS_STARTED,
  FETCH_GET_ALL_BOOKS_SUCCESS,
  FETCH_GET_ALL_BOOKS_FAILURE,
  FETCH_POST_BOOK_STARTED,
  FETCH_POST_BOOK_SUCCESS,
  FETCH_POST_BOOK_FAILURE,
  FETCH_PUT_BOOK_STARTED,
  FETCH_PUT_BOOK_SUCCESS,
  FETCH_PUT_BOOK_FAILURE,
  FETCH_GET_ALL_REVIEWS_STARTED,
  FETCH_GET_ALL_REVIEWS_SUCCESS,
  FETCH_GET_ALL_REVIEWS_FAILURE,
  FETCH_POST_REVIEW_STARTED,
  FETCH_POST_REVIEW_SUCCESS,
  FETCH_POST_REVIEW_FAILURE,
  FETCH_PUT_REVIEW_STARTED,
  FETCH_PUT_REVIEW_SUCCESS,
  FETCH_PUT_REVIEW_FAILURE,
  FETCH_CHECKOUT_BOOK_STARTED,
  FETCH_CHECKOUT_BOOK_SUCCESS,
  FETCH_CHECKOUT_BOOK_FAILURE,
  FETCH_GET_ALL_CHECKED_OUT_BOOKS_STARTED,
  FETCH_GET_ALL_CHECKED_OUT_BOOKS_SUCCESS,
  FETCH_GET_ALL_CHECKED_OUT_BOOKS_FAILURE,
  FETCH_GET_ALL_CHECK_OUT_HISTORY_BOOKS_STARTED,
  FETCH_GET_ALL_CHECK_OUT_HISTORY_BOOKS_SUCCESS,
  FETCH_GET_ALL_CHECK_OUT_HISTORY_BOOKS_FAILURE
} from './Actions'



function reducer(state, action) {

  console.log(action)

  switch (action.type) {

    //LIBRARIES

    case FETCH_GET_ALL_LIBRARIES_STARTED:
      return {
        ...state,
        libraries: {
          loading: true,
          error: null,
          data: []
        }
      }
    case FETCH_GET_ALL_LIBRARIES_SUCCESS:
      return {
        ...state,
        libraries: {
          loading: false,
          error: null,
          data: [...action.payload.data]
        }
      }
    case FETCH_GET_ALL_LIBRARIES_FAILURE:
      return {
        ...state,
        libraries: {
          loading: false,
          error: action.payload.error,
          data: [],
        }
      }
    case FETCH_POST_LIBRARY_STARTED:
      return {
        ...state,
        all: {
          loading: true,
          error: null,
          data: [],
          id: action.payload.all,
        }
      }
    case FETCH_POST_LIBRARY_SUCCESS:
      return {
        ...state,
        all: {
          loading: false,
          error: null,
          data: [...action.payload.data],
          id: state.all.id,
        }
      }
    case FETCH_POST_LIBRARY_FAILURE:
      return {
        ...state,
        all: {
          loading: false,
          error: action.payload.error,
          data: [],
          id: 0,
        }
      }
    case FETCH_DELETE_LIBRARY_STARTED:
      return {
        ...state,
        all: {
          loading: true,
          error: null,
          data: [],
        }
      }
    case FETCH_DELETE_LIBRARY_SUCCESS:
      return {
        ...state,
        all: {
          loading: false,
          error: null,
          data: [...action.payload.data],
        }
      }
    case FETCH_DELETE_LIBRARY_FAILURE:
      return {
        ...state,
        all: {
          loading: false,
          error: true,
          data: [],
          id: 0,
        }
      }

      //BOOKS

    case FETCH_GET_ALL_BOOKS_STARTED:
      return {
        ...state,
        books: {
          loading: true,
          error: null,
          data: []
        }
      }
    case FETCH_GET_ALL_BOOKS_SUCCESS:
      return {
        ...state,
        books: {
          loading: false,
          error: null,
          data: [...action.payload.data]
        }
      }
    case FETCH_GET_ALL_BOOKS_FAILURE:
      return {
        ...state,
        books: {
          loading: false,
          error: action.payload.error,
          data: [],
        }
      }
    case FETCH_POST_BOOK_STARTED:
      return {
        ...state,
        all: {
          loading: true,
          error: null,
          data: [],
          id: action.payload.all,
        }
      }
    case FETCH_POST_BOOK_SUCCESS:
      return {
        ...state,
        all: {
          loading: false,
          error: null,
          data: [...action.payload.data],
          id: state.all.id,
        }
      }
    case FETCH_POST_BOOK_FAILURE:
      return {
        ...state,
        all: {
          loading: false,
          error: action.payload.error,
          data: [],
          id: 0,
        }
      }
    case FETCH_PUT_BOOK_STARTED:
      return {
        ...state,
        all: {
          loading: true,
          error: null,
          data: [],
          id: action.payload.all,
        }
      }
    case FETCH_PUT_BOOK_SUCCESS:
      return {
        ...state,
        all: {
          loading: false,
          error: null,
          data: [...action.payload.data],
          id: action.payload.all,
        }
      }
    case FETCH_PUT_BOOK_FAILURE:
      return {
        ...state,
        all: {
          loading: false,
          error: action.payload.error,
          data: [],
          id: 0,
        }
      }

      //REVIEWS

    case FETCH_GET_ALL_REVIEWS_STARTED:
      return {
        ...state,
        reviews: {
          loading: true,
          error: null,
          data: []
        }
      }
    case FETCH_GET_ALL_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: {
          loading: false,
          error: null,
          data: [...action.payload.data]
        }
      }
    case FETCH_GET_ALL_REVIEWS_FAILURE:
      return {
        ...state,
        reviews: {
          loading: false,
          error: action.payload.error,
          data: [],
        }
      }
    case FETCH_POST_REVIEW_STARTED:
      return {
        ...state,
        all: {
          loading: true,
          error: null,
          data: [],
          id: action.payload.all,
        }
      }
    case FETCH_POST_REVIEW_SUCCESS:
      return {
        ...state,
        all: {
          loading: false,
          error: null,
          data: [...action.payload.data],
          id: state.all.id,
        }
      }
    case FETCH_POST_REVIEW_FAILURE:
      return {
        ...state,
        all: {
          loading: false,
          error: action.payload.error,
          data: [],
          id: 0,
        }
      }
    case FETCH_PUT_REVIEW_STARTED:
      return {
        ...state,
        all: {
          loading: true,
          error: null,
          data: [],
          id: action.payload.all,
        }
      }
    case FETCH_PUT_REVIEW_SUCCESS:
      return {
        ...state,
        all: {
          loading: false,
          error: null,
          data: [...action.payload.data],
          id: action.payload.all,
        }
      }
    case FETCH_PUT_REVIEW_FAILURE:
      return {
        ...state,
        all: {
          loading: false,
          error: action.payload.error,
          data: [],
          id: 0,
        }
      }

      //Checkout

    case FETCH_CHECKOUT_BOOK_STARTED:
      return {
        ...state,
        checkoutBook: {
          loading: true,
          error: null,
          data: null,
        }
      }
    case FETCH_CHECKOUT_BOOK_SUCCESS:
      return {
        ...state,
        checkoutBook: {
          loading: false,
          error: null,
          data: [...action.payload.data],
        }
      }
    case FETCH_CHECKOUT_BOOK_FAILURE:
      return {
        ...state,
        checkoutBook: {
          loading: false,
          error: action.payload.error,
          data: [],
        }
      }

      //Get Checkout History

    case FETCH_GET_ALL_CHECK_OUT_HISTORY_BOOKS_STARTED:
      return {
        ...state,
        checkOutHistoryBooks: {
          loading1: true,
          error1: null,
          data1: [],
        },
      };

    case FETCH_GET_ALL_CHECK_OUT_HISTORY_BOOKS_SUCCESS:
      return {
        ...state,
        checkOutHistoryBooks: {
          loading1: false,
          error1: null,
          data1: [...action.payload.data],
        },
      };

    case FETCH_GET_ALL_CHECK_OUT_HISTORY_BOOKS_FAILURE:
      return {
        ...state,
        checkOutHistoryBooks: {
          loading1: false,
          error1: action.payload.error,
          data1: [],
        },
      };

      //Get Checkedout

    case FETCH_GET_ALL_CHECKED_OUT_BOOKS_STARTED:
      return {
        ...state,
        checkedOutBooks: {
          loading: true,
          error: null,
          data: [],
        },
      };

    case FETCH_GET_ALL_CHECKED_OUT_BOOKS_SUCCESS:
      return {
        ...state,
        checkedOutBooks: {
          loading: false,
          error: null,
          data: [...action.payload.data],
        },
      };

    case FETCH_GET_ALL_CHECKED_OUT_BOOKS_FAILURE:
      return {
        ...state,
        checkedOutBooks: {
          loading: false,
          error: action.payload.error,
          data: [],
        },
      };



    default:
      return state
  }
}

export default reducer;
