
import React, { useReducer } from 'react';
import PropTypes from "prop-types";
import { Provider } from './AppContext';
import reducer from './Reducer';

const initialState = {
  libraries: {
    loading: true,
    error: null,
    data: [],
  },
  all: {
    id: 0,
    loading: false,
    error: null,
    data: [],
  }
};

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

const AppProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Provider value={{
      state,
      library_labels,
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