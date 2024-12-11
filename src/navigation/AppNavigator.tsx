import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import EmailScreen from '../screens/EmailScreen/EmailScreen';
import PasswordScreen from '../screens/PasswordScreen/PasswordScreen';
import OpenCommunityScreen from '../screens/OpenCommunityScreen/OpenCommunityScreen';
import EventsListScreen from '../screens/EventsListScreen/EventsListScreen';
import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParamList = {
  EmailScreen: any;
  PasswordScreen: any;
  OpenCommunityScreen: any;
  EventsListScreen: any;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="EmailScreen"
          component={EmailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PasswordScreen"
          component={PasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OpenCommunityScreen"
          component={OpenCommunityScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EventsListScreen"
          component={EventsListScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
