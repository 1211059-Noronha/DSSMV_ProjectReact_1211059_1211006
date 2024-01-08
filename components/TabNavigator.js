import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


// Screens
import HomeScreen from '../screens/HomeScreen';
import ManagementScreen from '../screens/ManagementScreen';
import BookScreen from "../screens/BookScreen";
import LibraryScreen from "../screens/LibraryScreen";
import ReviewScreen from "../screens/ReviewScreen";
import DeleteLibrary from "../components/DeleteLibrary";
import BookCheckoutScreen from "../screens/BookCheckoutScreen";
import GetCheckoutBookScreen from "../screens/GetCheckoutBookScreen";


//Screen names
const homeName = "Home";
const managementName = "Management";
const libraryName = "Libraries"
const bookName = "BookTable"

import {createStore} from 'state-pool';


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();
const store = createStore();

const LibraryStack = () => {
    return (
        <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown: true}}>
            <Stack.Screen name="LibraryScreen" component={LibraryScreen} />
            <Stack.Screen name="BookScreen" component={BookScreen} />
            <Stack.Screen name="ReviewScreen" component={ReviewScreen}/>
            <Stack.Screen name="DeleteLibrary" component={DeleteLibrary}/>
            <Stack.Screen name="BookCheckout" component={BookCheckoutScreen}/>
            <Stack.Screen name="GetCheckoutBookScreen" component={GetCheckoutBookScreen}/>
        </Stack.Navigator>
    )
}

function TabNavigator() {

    return (
        <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline';

                    }else if (rn === managementName) {
                        iconName = focused ? 'analytics' : 'analytics-outline';

                    }else if (rn === libraryName) {
                        iconName = focused ? 'list' : 'list-outline';
                    }

                            // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                    },
            })}>


            <Tab.Screen options={{headerShown: false}} name={homeName} component={HomeScreen} />
            <Tab.Screen options={{headerShown: false}} name={managementName} component={ManagementScreen} />
            <Tab.Screen options={{headerShown: false}} name={libraryName} component={LibraryStack} />
        </Tab.Navigator>
    );
}
export default TabNavigator;
