import React, { Component } from 'react';
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

class AppProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTheme: darkTheme,
            availableThemes: [darkTheme, lightTheme],
        };
    }
    dispatch = (action) => this.setState((state) => reducer(state, action));
    render() {

        return (
            <Provider value={{
                state: this.state,
                dispatch: this.dispatch,
            }}>
                {this.props.children}
            </Provider>
        );
    }
}
export default AppProvider;