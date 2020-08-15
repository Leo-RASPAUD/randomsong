import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import NewSong from './NewSong';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Tab = createBottomTabNavigator();

const PublicNavigator = (props) => {
  console.log(1, props);
  return (
    <Tab.Navigator initialRouteName="New song">
      <Tab.Screen name="New song" component={NewSong} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <PublicNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
