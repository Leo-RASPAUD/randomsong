import React from 'react';
import { Text, View, Button } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import Routes from '../routes';
import { RootTabParamList } from './Navigation';

type ProfileScreenNavigationProp = BottomTabNavigationProp<RootTabParamList, Routes.PROFILE>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const Home: React.FC<Props> = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Profile screen</Text>
    <Button title="Go to Home" onPress={() => navigation.navigate(Routes.NEW_SONG)} />
  </View>
);

export default Home;
