import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { View } from 'react-native';
import CategoryBreakfastStack from '../../components/CategoryBreakfastStack';
import CategoryHome from '../../components/CategoryHome';
import CategoryCoffeeScreen from '../../screens/CategoryCoffeeScreen';

const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <View style={{ height: '100%' }}>
      <Stack.Navigator initialRouteName="CategoryHome" headerMode="none">
        <Stack.Screen name="CategoryHome" component={CategoryHome} />
        <Stack.Screen
          name="CategoryCoffeeScreen"
          component={CategoryCoffeeScreen}
        />
        <Stack.Screen
          name="CategoryBreakfastStack"
          component={CategoryBreakfastStack}
        />
      </Stack.Navigator>
    </View>
  );
};

export default HomeScreen;
