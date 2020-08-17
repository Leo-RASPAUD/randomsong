import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import useUser from '../store/user';
import Routes from '../navigation/routes';

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
