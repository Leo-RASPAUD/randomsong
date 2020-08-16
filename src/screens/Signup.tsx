import React from 'react';
import { Text, View } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import Routes from '../navigation/routes';
import { RootTabParamList } from '../components/Navigation';
import Login from './Login';
import UserProfile from './Profile';
import useUser from '../store/user';

const Signup: React.FC = () => {
  return <Text>Signup screen</Text>;
};

export default Signup;
