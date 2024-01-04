import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from '../screens/HomeScreen';
import ManagementScreen from '../screens/ManagementScreen';
import LibraryTable from '../components/LibraryTable';
import BookTable from '../components/BookTable';

//Screen names
const homeName = 'Home';
const managementName = 'Management';
const libraryTableName = 'LibTable';
const bookTableName = 'BookTable';

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === managementName) {
              iconName = focused ? 'analytics' : 'analytics-outline';
            } else if (rn === libraryTableName) {
              iconName = focused ? 'list' : 'list-outline';
            } else if (rn === bookTableName) {
              iconName = focused ? 'list' : 'list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={managementName} component={ManagementScreen} />
        <Tab.Screen name={libraryTableName} component={LibraryTable} />
        <Tab.Screen name={bookTableName} component={BookTable} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
