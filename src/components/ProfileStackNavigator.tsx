import React, { useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { RootTabParamList } from '../components/Navigation';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Profile from '../screens/Profile';
import Routes from '../navigation/routes';
import useUser from '../store/user';

export type ProfileStackNavigatorTypes = {
  [Routes.LOGIN]: undefined;
  [Routes.SIGNUP]: undefined;
  [Routes.PROFILE]: undefined;
};

type ProfileScreenNavigationProp = BottomTabNavigationProp<RootTabParamList, Routes.PROFILE>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const Stack = createStackNavigator<ProfileStackNavigatorTypes>();

const ProfileStackNavigator: React.FC<Props> = ({ navigation }) => {
  console.log(navigation);
  const [{ user }] = useUser();
  console.log(user);

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e) => {
      e.preventDefault();
      if (user) {
        navigation.navigate(Routes.PROFILE);
      } else {
        navigation.navigate(Routes.LOGIN);
      }
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.LOGIN} component={Login} />
      <Stack.Screen name={Routes.SIGNUP} component={Signup} />
      <Stack.Screen name={Routes.PROFILE} component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
