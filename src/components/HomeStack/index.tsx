import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import CategoryCoffeeScreen from '../../screens/CategoryCoffeeScreen';
import HomeScreen from '../../screens/HomeScreen';
import CategoryHome from '../CategoryHome';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen" headerMode="none">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CategoryHome" component={CategoryHome} />
      <Stack.Screen
        name="CategoryCoffeeScreen"
        component={CategoryCoffeeScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
