import React, { useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/Profile';
import NewSong from '../screens/Home';
import Signup from '../screens/Signup';
import Routes from '../navigation/routes';
import ProfileStackNavigator from './ProfileStackNavigator';

export type RootTabParamList = {
  [Routes.HOME]: undefined;
  [Routes.PROFILE]: any;
};

export type ProfileStackNavigatorTypes = {
  [Routes.LOGIN]: undefined;
  [Routes.SIGNUP]: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={Routes.HOME}>
        <Tab.Screen name={Routes.HOME} component={NewSong} />
        <Tab.Screen name={Routes.PROFILE_WRAPPER} component={ProfileStackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
