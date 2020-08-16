import * as React from 'react';
import { Button } from 'react-native';
import { RootTabParamList } from './Navigation';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

const HeaderLeft: React.FC = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootTabParamList>>();
  return <Button onPress={() => navigation.openDrawer()} title="Menu" />;
};

export default HeaderLeft;
