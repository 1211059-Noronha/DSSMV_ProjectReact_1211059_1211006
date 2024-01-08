import React, {useState} from 'react';
import {useNavigation} from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";

const AppContext = React.createContext();
export const {Provider} = AppContext;

export default AppContext;