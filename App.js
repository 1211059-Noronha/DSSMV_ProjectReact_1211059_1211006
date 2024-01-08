import * as React from 'react';
import TabNavigator from './components/TabNavigator';
import AppProvider from "./context/AppProvider";
import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native";
import {MenuProvider} from "react-native-popup-menu";

function App() {
    return (
        <AppProvider>
            <MenuProvider>
                <NavigationContainer>
                    <TabNavigator />
                </NavigationContainer>
            </MenuProvider>
        </AppProvider>
    );
}

export default App;

