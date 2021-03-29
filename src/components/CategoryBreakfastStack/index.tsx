import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import BreakfastFullname from '../../screens/BreakfastFullmenu';
import CategoryBreakfastScreen from '../../screens/CategoryBreakfastScreen';

const Stack = createStackNavigator();

const CategoryBreakfastStack = () => {
  return (
    <Stack.Navigator initialRouteName="CategoryBreakfastScreen" headerMode="none">
      <Stack.Screen name='CategoryBreakfastScreen' component={CategoryBreakfastScreen} />
      <Stack.Screen name='BreakfastFullname' component={BreakfastFullname} />
    </Stack.Navigator>
  );
};

export default CategoryBreakfastStack;

