import * as React from 'react';
import MainContainer from './components/MainContainer';
import AppProvider from "./context/AppProvider";

function App() {
    return (
        <AppProvider>
            <MainContainer/>
        </AppProvider>
    );
}

export default App;

