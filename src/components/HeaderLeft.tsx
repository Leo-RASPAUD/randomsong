import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { RoutesParamsList } from '../navigation/routes';

const styles = StyleSheet.create({
  button: { margin: 5 },
});

const HeaderLeft: React.FC = () => {
  const navigation = useNavigation<DrawerNavigationProp<RoutesParamsList>>();
  return <Button style={styles.button} onPress={() => navigation.openDrawer()} title="Menu" />;
};

export default HeaderLeft;
