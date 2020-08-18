import * as React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HeaderLeft from '../components/HeaderLeft';
import HeaderRight from '../components/HeaderRight';
import Routes from './routes';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import Signup from '../screens/Signup';
import useUser from '../store/user';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const options: StackNavigationOptions = {
  headerTitleAlign: 'left',
  headerLeft: () => <HeaderLeft />, // eslint-disable-line
  headerRight: () => <HeaderRight />, // eslint-disable-line
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
};

const LoginSignupTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.LOGIN}
      tabBarOptions={{
        labelStyle: { fontSize: 14, textTransform: 'none' },
      }}
    >
      <Tab.Screen name={Routes.LOGIN} component={Login} />
      <Tab.Screen name={Routes.SIGNUP} component={Signup} />
    </Tab.Navigator>
  );
};

const ProfileStack: React.FC = () => {
  const [{ user }] = useUser();

  return (
    <Stack.Navigator>
      {user ? (
        <Stack.Screen name={Routes.PROFILE} component={Profile} options={options} />
      ) : (
        <Stack.Screen name={Routes.SIGNUP_OR_REGISTER} component={LoginSignupTabs} options={options} />
      )}
    </Stack.Navigator>
  );
};
export default ProfileStack;
