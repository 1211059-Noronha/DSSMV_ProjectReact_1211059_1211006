import React, { useReducer } from 'react';
import { Provider } from './AppContext';
import reducer from './Reducer';

const darkTheme = {
    name: "dark",
    backgroundColor: "black",
    textColor: "white",
    borderColor: "white",
    btBackgroundColor: "white",
    btTextColor: "black",
    logoBackground: "#888888"
};

const lightTheme = {
    name: "light",
    backgroundColor: "white",
    textColor: "black",
    borderColor: "black",
    btBackgroundColor: "black",
    btTextColor: "white",
    logoBackground: "#DDDDDD"
};

const availableThemes = [darkTheme, lightTheme];

const AppProvider = (props) => {

    const initialState = { selectedTheme: darkTheme, availableThemes };

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <Provider
            value={{
                state: state,
                dispatch: dispatch,
            }}
        >
            {props.children}
        </Provider>
    );
}



export default AppProvider;