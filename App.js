import * as React from 'react';
import TabNavigator from './components/TabNavigator';
import AppProvider from "./context/AppProvider";
import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native";

function App() {
    return (
        <AppProvider>
            <NavigationContainer>
                    <TabNavigator />
            </NavigationContainer>
        </AppProvider>
    );
}

export default App;

