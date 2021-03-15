import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingScreen from '../SettingScreen';
import HomeStack from '../../components/HomeStack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName = '';
            if (route.name === 'HomeStack') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{title: ''}}
        />
        <Tab.Screen
          name="Settings"
          component={SettingScreen}
          options={{title: ''}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainScreen;
