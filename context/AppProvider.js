
import React, {useReducer, useState} from 'react';
import PropTypes from "prop-types";
import { Provider } from './AppContext';
import reducer from './Reducer';

/*

  Initial State of the App

 */

const initialState = {
  libraries: {
    loading: true,
    error: null,
    data: [],
  },
  books: {
    loading: true,
    error: null,
    data: [],
  },
  reviews: {
    loading: true,
    error: null,
    data: [],
  },
  checkedOutBooks: {
    loading: true,
    error: null,
    data: [],
  },
  checkOutHistoryBooks: {
    loading1: true,
    error1: null,
    data1: [],
  },
  all: {
    id: 0,
    loading: false,
    error: null,
    data: [],
  }
};

/*

  Every label for every single Object used (i hate this ngl)

 */

//Library Related Labels

const library_labels = {
  address : "address",
  closeTime : "closeTime",
  id: "id",
  name: "Name",
  open: "open",
  openDays: "openDays",
  openStatement: "openStatement",
  openTime: "openTime",
};

//Book Related Labels

const authors = {
  alternateNames : "alternateNames",
  bio : "bio",
  birthDate : "birthDate",
  deathDate : "deathDate",
  id : "id",
  name : "name"
}

const cover = {
  largeUrl : "largeUrl",
  mediumUrl : "mediumUrl",
  smallUrl : "smallUrl"
}

const book = {
  authors : authors,
  byStatement : "byStatement",
  cover : cover,
  description : "description",
  isbn : "isbn",
  numberOfPages : "numberOfPages",
  publishDate : "publishDate",
  subjectPeople : "subjectPeople",
  subjectPlaces : "subjectPlaces",
  subjectTimes : "subjectTimes",
  subjects : "subjects",
  title : "title",
}

const book_labels  = {
  available : "available",
  book : book,
  checkedOut : "checkedOut",
  isbn : "isbn",
  library : library_labels,
  stock : "stock"
}


//Review Related Labels

const review_labels = {
  createdDate : "createdDate",
  id : "id",
  isbn : "isbn",
  recommended : "recommended",
  review : "review",
  reviewer : "reviewer"
}

//CheckOut Related Labels

const checkedout_labels = {
  id : "id",
  bookId : "bookId",
  libraryId : "libraryId",
  userId : "userId",
  active : "active",
  dueDate : "dueDate",
  createTimestamp : "createTimestamp",
  updateTimestamp : "updateTimestamp",
  libraryName : "libraryName",
  libraryAddress : "libraryAddress",
  libraryOpenTime : "libraryOpenTime",
  libraryCloseTime : "libraryCloseTime",
  book : book,
}

const checkout_labels = {
  active : "active",
  book : book,
}

const checkouthistory_labels = {
  id : "id",
  bookId : "bookId",
  libraryId : "libraryId",
  userId : "userId",
  active : "active",
  dueDate : "dueDate",
  createTimestamp : "createTimestamp",
  updateTimestamp : "updateTimestamp",
  libraryName : "libraryName",
  libraryAddress : "libraryAddress",
  libraryOpenTime : "libraryOpenTime",
  libraryCloseTime : "libraryCloseTime",
  book : book,
}



/*

  Sends the default values to the Application

 */

const AppProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Provider value={{
      state,
      library_labels,
      book_labels,
      review_labels,
      checkedout_labels,
      checkouthistory_labels,
      dispatch
    }}>
      {props.children}
    </Provider>
  );
};
AppProvider.propTypes = {
  children: PropTypes.node,
};

export default AppProvider;