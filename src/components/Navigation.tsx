import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import NewSong from './NewSong';
import Routes from '../routes';

export type RootTabParamList = {
  [Routes.NEW_SONG]: undefined;
  [Routes.PROFILE]: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const PublicNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={Routes.NEW_SONG} component={NewSong} />
      <Tab.Screen name={Routes.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <PublicNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
