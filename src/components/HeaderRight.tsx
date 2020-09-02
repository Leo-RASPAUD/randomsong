import { Auth } from 'aws-amplify';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';

import Routes from '../navigation/routes';
import useUser from '../store/user';

const styles = StyleSheet.create({
  button: { margin: 5 },
});

const HeaderRight: React.FC = () => {
  const navigation = useNavigation();
  const [{ user }, { clearUser }] = useUser();
  const logout = async () => {
    await Auth.signOut();
    clearUser();
    navigation.navigate(Routes.HOME);
  };

  if (!user) {
    return null;
  }

  return (
    <Button
      style={styles.button}
      type="solid"
      onPress={() => logout()}
      icon={<Icon name="sign-out-alt" type="font-awesome-5" color="white" />}
    />
  );
};

export default HeaderRight;
