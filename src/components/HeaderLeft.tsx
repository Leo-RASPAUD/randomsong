import * as React from 'react';
import { Button } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { TabParamsList } from '../navigation/routes';

const HeaderLeft: React.FC = () => {
  const navigation = useNavigation<DrawerNavigationProp<TabParamsList>>();
  return <Button onPress={() => navigation.openDrawer()} title="Menu" />;
};

export default HeaderLeft;
