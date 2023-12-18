
import React, { Component } from 'react';
import Screen from './screens/Screen';




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

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTheme: darkTheme,
      availableThemes: [darkTheme, lightTheme],
    };
  }
  selectTheme = (name) => {
    console.log("App: selectTheme(" + name + ")")
    const theme = this.state.availableThemes.find(theme => theme.name === name);
    this.setState({ ...this.state, selectedTheme: theme });
  }
  render() {
    const { selectedTheme, availableThemes } = this.state;
    const availableThemeNames = availableThemes.map((theme) => theme.name);
    return (
      <Screen selectedTheme={selectedTheme} availableThemeNames={availableThemeNames} selectTheme={this.selectTheme} />
    );
  }
}
export default App;
