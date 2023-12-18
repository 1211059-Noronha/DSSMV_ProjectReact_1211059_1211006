import React, { Component } from 'react';
import AppProvider from './context/AppProvider';
import Screen from './screens/Screen';

const App = () => {
  return (
    <AppProvider>
      <Screen />
    </AppProvider>
  );
}
export default App;
