import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import CartScreen from '../../screens/CartScreen';
import HomeScreen from '../../screens/HomeScreen';
import NotificationScreen from '../../screens/NotificationScreen';
import ProfileScreen from '../../screens/ProfileScreen';
const Tab = createBottomTabNavigator();
import {useSelector} from 'react-redux';

const HomeStack = () => {
  const user = useSelector((state: any) => state.signupAccount);
  console.log('user', user);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          } else if (route.name === 'Carts') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Notification') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#5F9EA0',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{title: ''}} />
      <Tab.Screen name="Carts" component={CartScreen} options={{title: ''}} />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{title: ''}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: ''}}
      />
    </Tab.Navigator>
  );
};

export default HomeStack;
