import React from 'react';
import { Text, View } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import Routes from '../navigation/routes';
import { RootTabParamList } from '../components/Navigation';

type ProfileScreenNavigationProp = BottomTabNavigationProp<RootTabParamList, Routes.PROFILE>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

// type Props = {
//   navigation: DrawerNavigationProp<RootTabParamList>;
// };

const Home: React.FC<Props> = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile screen</Text>
    </View>
  );
};

export default Home;
