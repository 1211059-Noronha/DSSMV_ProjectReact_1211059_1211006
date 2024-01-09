
import { makeHTTPRequest } from '../service/Service';

//Library API Base Url
export const URL_API = 'http://193.136.62.24/v1';


/*

  LIBRARY HTTP REQUEST RESPONSES

 */

//GET ALL LIBRARIES
export const FETCH_GET_ALL_LIBRARIES_STARTED = 'FETCH_GET_ALL_LIBRARIES_STARTED';
export const FETCH_GET_ALL_LIBRARIES_SUCCESS = 'FETCH_GET_ALL_LIBRARIES_SUCCESS';
export const FETCH_GET_ALL_LIBRARIES_FAILURE = 'FETCH_GET_ALL_LIBRARIES_FAILURE';

export function fetchGetAllLibraries(url, request, dispatch){
  const success = (res) => dispatch(fetchGetAllLibrariesSuccess(res));
  const failure = (err) => dispatch(fetchGetAllLibrariesFailure(err.message));
  makeHTTPRequest(encodeURI(url),request,success,failure);
}

  //Get All Library States
export function fetchGetAllLibrariesStarted() {
  return {
    type: FETCH_GET_ALL_LIBRARIES_STARTED,

  }
}

export function fetchGetAllLibrariesSuccess(libraries) {
  return {
    type: FETCH_GET_ALL_LIBRARIES_SUCCESS,
    payload: {
      data:
        [...libraries]
    }

  }
}
export function fetchGetAllLibrariesFailure(message) {
  return {
    type: FETCH_GET_ALL_LIBRARIES_FAILURE,
    payload: {
      error: message
    }
  }
}

//POST LIBRARY
export const FETCH_POST_LIBRARY_STARTED = 'FETCH_POST_LIBRARY_STARTED';
export const FETCH_POST_LIBRARY_SUCCESS = 'FETCH_POST_LIBRARY_SUCCESS';
export const FETCH_POST_LIBRARY_FAILURE = 'FETCH_POST_LIBRARY_FAILURE';

export function fetchPostLibrary(url,request,dispatch){
  const success = (res) => dispatch(fetchPostLibrarySuccess(res));
  const failure = (err) => dispatch(fetchPostLibraryFailure(err.message));
  makeHTTPRequest(encodeURI(url),request,success,failure);
}

  //Post Library States
export function fetchPostLibraryStarted() {
  return{
    type: FETCH_POST_LIBRARY_STARTED,

  }
}

export function fetchPostLibrarySuccess(library) {
  return {
    type: FETCH_POST_LIBRARY_SUCCESS,
    payload: {
      data:
          [...library]
    }

  }
}
export function fetchPostLibraryFailure(message) {
  return {
    type: FETCH_POST_LIBRARY_FAILURE,
    payload: {
      error: message
    }
  }
}

//PUT LIBRARY
export const FETCH_PUT_LIBRARY_STARTED = 'FETCH_PUT_LIBRARY_STARTED';
export const FETCH_PUT_LIBRARY_SUCCESS = 'FETCH_PUT_LIBRARY_SUCCESS';
export const FETCH_PUT_LIBRARY_FAILURE = 'FETCH_PUT_LIBRARY_FAILURE';

export function fetchPutLibrary(url,request,dispatch){
  const success = (res) => dispatch(fetchPutLibrarySuccess(res));
  const failure = (err) => dispatch(fetchPutLibraryFailure(err.message));
  makeHTTPRequest(encodeURI(url),request,success,failure);
}


  //Put Library States
export function fetchPutLibraryStarted() {
  return{
    type: FETCH_PUT_LIBRARY_STARTED,

  }
}

export function fetchPutLibrarySuccess(library) {
  return {
    type: FETCH_PUT_LIBRARY_SUCCESS,
    payload: {
      data:
          [...library]
    }

  }
}
export function fetchPutLibraryFailure(message) {
  return {
    type: FETCH_PUT_LIBRARY_FAILURE,
    payload: {
      error: message
    }
  }
}

//DELETE LIBRARY
export const FETCH_DELETE_LIBRARY_STARTED = 'FETCH_DELETE_LIBRARY_STARTED';
export const FETCH_DELETE_LIBRARY_SUCCESS = 'FETCH_DELETE_LIBRARY_SUCCESS';
export const FETCH_DELETE_LIBRARY_FAILURE = 'FETCH_DELETE_LIBRARY_FAILURE';

export function fetchDeleteLibrary(url,request,dispatch){
  const success = (res) => dispatch(fetchDeleteLibrarySuccess(res));
  const failure = (err) => dispatch(fetchDeleteLibraryFailure(err.message));
  makeHTTPRequest(encodeURI(url),request,success,failure);
}


  //Delete Library States
export function fetchDeleteLibraryStarted() {
  return{
    type: FETCH_DELETE_LIBRARY_STARTED,

  }
}

export function fetchDeleteLibrarySuccess(library) {
  return {
    type: FETCH_DELETE_LIBRARY_SUCCESS,
    payload: {
      data:
          [...library]
    }

  }
}
export function fetchDeleteLibraryFailure(message) {
  return {
    type: FETCH_DELETE_LIBRARY_FAILURE,
    payload: {
      error: message
    }
  }
}


/*

  BOOK HTTP REQUEST RESPONSES

 */

//GET ALL BOOKS
export const FETCH_GET_ALL_BOOKS_STARTED = 'FETCH_GET_ALL_BOOKS_STARTED';
export const FETCH_GET_ALL_BOOKS_SUCCESS = 'FETCH_GET_ALL_BOOKS_SUCCESS';
export const FETCH_GET_ALL_BOOKS_FAILURE = 'FETCH_GET_ALL_BOOKS_FAILURE';

export function fetchGetAllBooks(url, request, dispatch){
  const success = (res) => dispatch(fetchGetAllBooksSuccess(res));
  const failure = (err) => dispatch(fetchGetAllBooksFailure(err.message));
  makeHTTPRequest(encodeURI(url),request,success,failure);
}

  //Get All Books States
export function fetchGetAllBooksStarted() {
  return {
    type: FETCH_GET_ALL_BOOKS_STARTED,

  }
}

export function fetchGetAllBooksSuccess(books) {
  return {
    type: FETCH_GET_ALL_BOOKS_SUCCESS,
    payload: {
      data:
          [...books]
    }

  }
}
export function fetchGetAllBooksFailure(message) {
  return {
    type: FETCH_GET_ALL_BOOKS_FAILURE,
    payload: {
      error: message
    }
  }
}

//POST BOOK
export const FETCH_POST_BOOK_STARTED = 'FETCH_POST_BOOK_STARTED';
export const FETCH_POST_BOOK_SUCCESS = 'FETCH_POST_BOOK_SUCCESS';
export const FETCH_POST_BOOK_FAILURE = 'FETCH_POST_BOOK_FAILURE';

export function fetchPostBook(url,request,dispatch){
  const success = (res) => dispatch(fetchPostBookSuccess(res));
  const failure = (err) => dispatch(fetchPostBookFailure(err.message));
  makeHTTPRequest(encodeURI(url),request,success,failure);
}

  //Post Book States
export function fetchPostBookStarted() {
  return{
    type: FETCH_POST_BOOK_STARTED,

  }
}

export function fetchPostBookSuccess(book) {
  return {
    type: FETCH_POST_BOOK_SUCCESS,
    payload: {
      data:
          [...book]
    }

  }
}
export function fetchPostBookFailure(message) {
  return {
    type: FETCH_POST_BOOK_FAILURE,
    payload: {
      error: message
    }
  }
}

//PUT BOOK
export const FETCH_PUT_BOOK_STARTED = 'FETCH_PUT_BOOK_STARTED';
export const FETCH_PUT_BOOK_SUCCESS = 'FETCH_PUT_BOOK_SUCCESS';
export const FETCH_PUT_BOOK_FAILURE = 'FETCH_PUT_BOOK_FAILURE';

export function fetchPutBook(url,request,dispatch){
  const success = (res) => dispatch(fetchPutBookSuccess(res));
  const failure = (err) => dispatch(fetchPutBookFailure(err.message));
  makeHTTPRequest(encodeURI(url),request,success,failure);
}


  //Put Book States
export function fetchPutBookStarted() {
  return{
    type: FETCH_PUT_BOOK_STARTED,

  }
}

export function fetchPutBookSuccess(library) {
  return {
    type: FETCH_PUT_BOOK_SUCCESS,
    payload: {
      data:
          [...library]
    }

  }
}
export function fetchPutBookFailure(message) {
  return {
    type: FETCH_PUT_BOOK_FAILURE,
    payload: {
      error: message
    }
  }
}

/*

  REVIEW HTTP REQUEST RESPONSES

 */

//GET ALL REVIEWS
export const FETCH_GET_ALL_REVIEWS_STARTED = 'FETCH_GET_ALL_REVIEWS_STARTED';
export const FETCH_GET_ALL_REVIEWS_SUCCESS = 'FETCH_GET_ALL_REVIEWS_SUCCESS';
export const FETCH_GET_ALL_REVIEWS_FAILURE = 'FETCH_GET_ALL_REVIEWS_FAILURE';

export function fetchGetAllReviews(url, request, dispatch){
  const success = (res) => dispatch(fetchGetAllReviewsSuccess(res));
  const failure = (err) => dispatch(fetchGetAllReviewsFailure(err.message));
  makeHTTPRequest(encodeURI(url),request,success,failure);
}

  //Get All Reviews States
export function fetchGetAllReviewsStarted() {
  return {
    type: FETCH_GET_ALL_REVIEWS_STARTED,

  }
}

export function fetchGetAllReviewsSuccess(reviews) {
  return {
    type: FETCH_GET_ALL_REVIEWS_SUCCESS,
    payload: {
      data:
          [...reviews]
    }

  }
}
export function fetchGetAllReviewsFailure(message) {
  return {
    type: FETCH_GET_ALL_REVIEWS_FAILURE,
    payload: {
      error: message
    }
  }
}

//POST REVIEW
export const FETCH_POST_REVIEW_STARTED = 'FETCH_POST_REVIEW_STARTED';
export const FETCH_POST_REVIEW_SUCCESS = 'FETCH_POST_REVIEW_SUCCESS';
export const FETCH_POST_REVIEW_FAILURE = 'FETCH_POST_REVIEW_FAILURE';

export function fetchPostReview(url,request,dispatch){
  const success = (res) => dispatch(fetchPostReviewSuccess(res));
  const failure = (err) => dispatch(fetchPostReviewFailure(err.message));
  makeHTTPRequest(encodeURI(url),request,success,failure);
}

  //Post Review States
export function fetchPostReviewStarted() {
  return{
    type: FETCH_POST_REVIEW_STARTED,

  }
}

export function fetchPostReviewSuccess(review) {
  return {
    type: FETCH_POST_REVIEW_SUCCESS,
    payload: {
      data:
          [...review]
    }

  }
}
export function fetchPostReviewFailure(message) {
  return {
    type: FETCH_POST_REVIEW_FAILURE,
    payload: {
      error: message
    }
  }
}

//PUT REVIEW
export const FETCH_PUT_REVIEW_STARTED = 'FETCH_PUT_REVIEW_STARTED';
export const FETCH_PUT_REVIEW_SUCCESS = 'FETCH_PUT_REVIEW_SUCCESS';
export const FETCH_PUT_REVIEW_FAILURE = 'FETCH_PUT_REVIEW_FAILURE';

export function fetchPutReview(url,request,dispatch){
  const success = (res) => dispatch(fetchPutReviewSuccess(res));
  const failure = (err) => dispatch(fetchPutReviewFailure(err.message));
  makeHTTPRequest(encodeURI(url),request,success,failure);
}


  //Put Review States
export function fetchPutReviewStarted() {
  return{
    type: FETCH_PUT_REVIEW_STARTED,

  }
}

export function fetchPutReviewSuccess(library) {
  return {
    type: FETCH_PUT_REVIEW_SUCCESS,
    payload: {
      data:
          [...library]
    }

  }
}
export function fetchPutReviewFailure(message) {
  return {
    type: FETCH_PUT_REVIEW_FAILURE,
    payload: {
      error: message
    }
  }
}


// CHECKOUT BOOK
export const FETCH_CHECKOUT_BOOK_STARTED = 'FETCH_CHECKOUT_BOOK_STARTED';
export const FETCH_CHECKOUT_BOOK_SUCCESS = 'FETCH_CHECKOUT_BOOK_SUCCESS';
export const FETCH_CHECKOUT_BOOK_FAILURE = 'FETCH_CHECKOUT_BOOK_FAILURE';

export function fetchCheckoutBook(url, request, dispatch) {
  dispatch(fetchCheckoutBookStarted());

  fetch(encodeURI(url), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  })
      .then(response => {
        if (!response.ok) {
          throw new Error('Checkout failed');
        }
        return response.json();
      })
      .then(data => {
        dispatch(fetchCheckoutBookSuccess(data));
      })
      .catch(error => {
        dispatch(fetchCheckoutBookFailure(error.message));
      });
}

// Checkout Book States
export function fetchCheckoutBookStarted() {
  return {
    type: FETCH_CHECKOUT_BOOK_STARTED,
  };
}

export function fetchCheckoutBookSuccess(book) {
  return {
    type: FETCH_CHECKOUT_BOOK_SUCCESS,
    payload: {
      data: [...book],
    },
  };
}

export function fetchCheckoutBookFailure(message) {
  return {
    type: FETCH_CHECKOUT_BOOK_FAILURE,
    payload: {
      error: message,
    },
  };
}

//GET ALL USER CHECKED OUT BOOKS
export const FETCH_GET_ALL_CHECKED_OUT_BOOKS_STARTED = 'FETCH_GET_ALL_CHECKED_OUT_BOOKS_STARTED';
export const FETCH_GET_ALL_CHECKED_OUT_BOOKS_SUCCESS = 'FETCH_GET_ALL_CHECKED_OUT_BOOKS_SUCCESS';
export const FETCH_GET_ALL_CHECKED_OUT_BOOKS_FAILURE = 'FETCH_GET_ALL_CHECKED_OUT_BOOKS_FAILURE';

export function fetchGetAllCheckedOutBooks(url, request, dispatch) {
  const success = (res) => dispatch(fetchGetAllCheckedOutBooksSuccess(res));
  const failure = (err) => dispatch(fetchGetAllCheckedOutBooksFailure(err.message));
  makeHTTPRequest(encodeURI(url), request, success, failure);

}

// Get All User Checked Out Books States
export function fetchGetAllCheckedOutBooksStarted() {
  return {
    type: FETCH_GET_ALL_CHECKED_OUT_BOOKS_STARTED,
  };
}

export function fetchGetAllCheckedOutBooksSuccess(checkedOutBooks) {
  return {
    type: FETCH_GET_ALL_CHECKED_OUT_BOOKS_SUCCESS,
    payload: {
      data: [...checkedOutBooks],
    },
  };

}

export function fetchGetAllCheckedOutBooksFailure(message) {
  return {
    type: FETCH_GET_ALL_CHECKED_OUT_BOOKS_FAILURE,
    payload: {
      error: message,
    },
  };
}

export const FETCH_GET_ALL_CHECK_OUT_HISTORY_BOOKS_STARTED = 'FETCH_GET_ALL_CHECK_OUT_HISTORY_BOOKS_STARTED';
export const FETCH_GET_ALL_CHECK_OUT_HISTORY_BOOKS_SUCCESS = 'FETCH_GET_ALL_CHECK_OUT_HISTORY_BOOKS_SUCCESS';
export const FETCH_GET_ALL_CHECK_OUT_HISTORY_BOOKS_FAILURE = 'FETCH_GET_ALL_CHECK_OUT_HISTORY_BOOKS_FAILURE';

export function fetchGetAllCheckOutHistoryBooks(url, request, dispatch) {
  const success = (res) => dispatch(fetchGetAllCheckOutHistoryBooksSuccess(res));
  const failure = (err) => dispatch(fetchGetAllCheckOutHistoryBooksFailure(err.message));
  makeHTTPRequest(encodeURI(url), request, success, failure);

}

// Get All Checked Out Books States
export function fetchGetAllCheckOutHistoryBooksStarted() {
  return {
    type: FETCH_GET_ALL_CHECK_OUT_HISTORY_BOOKS_STARTED,
  };
}

export function fetchGetAllCheckOutHistoryBooksSuccess(checkOutHistoryBooks) {
  return {
    type: FETCH_GET_ALL_CHECK_OUT_HISTORY_BOOKS_SUCCESS,
    payload: {
      data: [...checkOutHistoryBooks],
    },
  };

}

export function fetchGetAllCheckOutHistoryBooksFailure(message) {
  return {
    type: FETCH_GET_ALL_CHECK_OUT_HISTORY_BOOKS_FAILURE,
    payload: {
      error: message,
    },
  };
}







//Old Code Teacher used and I still don't know what it does because ToDos just doesn't run
export const DELETE_ALL_LIBRARY = 'DELETE_ALL_LIBRARY';

  //Delete Library States
export function deleteAllLibrary() {
  return {
    type: DELETE_ALL_LIBRARY,
  }
}