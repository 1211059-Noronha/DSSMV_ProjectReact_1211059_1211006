import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


// Screens
import HomeScreen from '../screens/HomeScreen';
import BookScreen from "../screens/BookScreen";
import LibraryScreen from "../screens/LibraryScreen";
import ReviewScreen from "../screens/ReviewScreen";
import DeleteLibrary from "../components/DeleteLibrary";
import BookCheckoutScreen from "../screens/BookCheckoutScreen";
import CheckoutStatusScreen from "../screens/CheckoutStatusScreen";
import NotLoginScreen from "../screens/NotLoginScreen";
import AddLibraryScreen from "../screens/AddLibraryScreen";
import UpdateLibraryScreen from "../screens/UpdateLibraryScreen";
import AddReviewScreen from "../screens/AddReviewScreen";


//Screen names
const homeName = "Home";
const libraryName = "Libraries"
const checkHistName = "History"


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

const LibraryStack = () => {
    return (
        <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown: true}}>
            <Stack.Screen name="LibraryScreen" component={LibraryScreen} />
            <Stack.Screen name="BookScreen" component={BookScreen} />
            <Stack.Screen name="AddLibraryScreen" component={AddLibraryScreen}/>
            <Stack.Screen name="UpdateLibraryScreen" component={UpdateLibraryScreen}/>
            <Stack.Screen name="ReviewScreen" component={ReviewScreen}/>
            <Stack.Screen name="DeleteLibrary" component={DeleteLibrary}/>
            <Stack.Screen name="BookCheckout" component={BookCheckoutScreen}/>
        </Stack.Navigator>
    )
}

const HistoryStack = () => {
    return (
        <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown: true}}>
            <Stack.Screen name="Insert Username" component={NotLoginScreen} />
            <Stack.Screen name="Checkout Status" component={CheckoutStatusScreen}/>
            <Stack.Screen name="AddReviewScreen" component={AddReviewScreen}/>
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

                    }else if (rn === libraryName) {
                        iconName = focused ? 'list' : 'list-outline';

                    }else if (rn === checkHistName) {
                        iconName = focused ? 'bookmarks' : 'bookmarks-outline';

                    }

                            // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                    },
            })}>


            <Tab.Screen options={{headerShown: false}} name={homeName} component={HomeScreen} />
            <Tab.Screen options={{headerShown: false}} name={libraryName} component={LibraryStack} />
            <Tab.Screen options={{headerShown: false}} name={checkHistName} component={HistoryStack} />
        </Tab.Navigator>
    );
}
export default TabNavigator;
