import React, { Component } from 'react';
import { Provider } from './AppContext';

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
    selectTheme = (name) => {
        console.log("AppProvider: selectTheme(" + name + ")")
        const theme = this.state.availableThemes.find(theme => theme.name === name);
        this.setState({ ...this.state, selectedTheme: theme });
    }
    render() {
        const availableThemeNames = this.state.availableThemes.map((theme) => theme.name);
        return (
            <Provider value={{
                availableThemeNames: availableThemeNames,
                selectedTheme: this.state.selectedTheme,
                selectTheme: this.selectTheme,
            }}>
                {this.props.children}
            </Provider>
        );
    }
}
export default AppProvider;