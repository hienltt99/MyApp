import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoryCoffeeScreen from '../../screens/CategoryCoffeeScreen';
import CategoryBreakfastStack from '../CategoryBreakfastStack';

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="CategoryCoffeeScreen" component={CategoryCoffeeScreen} />
      <Drawer.Screen name="CategoryBreakfastStack" component={CategoryBreakfastStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;