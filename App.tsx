import React from 'react';
import { StyleSheet, View } from 'react-native';
import Amplify from 'aws-amplify';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigation from './src/components/Navigation';

import config from './aws-exports';

Amplify.configure(config);

const App = () => {
  return <Navigation />;
};

export default App;
// export default withAuthenticator(App, {includeGreetings: true});
