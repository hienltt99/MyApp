import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignupScreen from '../SignupScreen';
import LoginScreen from '../LoginScreen';
import IntroduceApp from '../../components/IntroduceApp';
import ForgotpassScreen from '../ForgotPasswordScreen';
import ForgotpassStepTwo from '../../components/ForgotpassStepTwo';
import ForgotpassStepThree from '../../components/ForgotpassStepThree';
import HomeStack from '../../components/HomeStack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IntroduceApp" headerMode="none">
        <Stack.Screen name="IntroduceApp" component={IntroduceApp} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeStack" component={HomeStack} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="ForgotpassScreen" component={ForgotpassScreen} />
        <Stack.Screen name="ForgotpassStepTwo" component={ForgotpassStepTwo} />
        <Stack.Screen
          name="ForgotpassStepThree"
          component={ForgotpassStepThree}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainScreen;
