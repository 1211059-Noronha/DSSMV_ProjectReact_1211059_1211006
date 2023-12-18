import React, { Component } from 'react';
import AppProvider from './context/AppProvider';
import Screen from './screens/Screen';

class App extends Component {
  render() {
    return (
      <AppProvider>
        <Screen />
      </AppProvider>
    );
  }
}
export default App;
