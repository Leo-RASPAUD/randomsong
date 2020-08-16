import React from 'react';
import { Text, View } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import Routes from '../routes';
import { RootTabParamList } from '../components/Navigation';
import Login from '../components/Login';
import UserProfile from '../components/UserProfile';
import useUser from '../store/user';

type ProfileScreenNavigationProp = BottomTabNavigationProp<RootTabParamList, Routes.PROFILE>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const Home: React.FC<Props> = () => {
  const [{ user }] = useUser();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile screen</Text>
      {/* <Button title="Go to Home" onPress={() => navigation.navigate(Routes.NEW_SONG)} /> */}
      {!user && <Login />}
      {user && <UserProfile />}
    </View>
  );
};

export default Home;
