import React from 'react';
import { Text } from 'react-native';
import useUser from '../store/user';

// type ProfileScreenNavigationProp = BottomTabNavigationProp<RootTabParamList, Routes.PROFILE>;

// type Props = {
//   navigation: ProfileScreenNavigationProp;
// };

// type Props = {
//   navigation: DrawerNavigationProp<RootTabParamList>;
// };

const Profile: React.FC = () => {
  const [{ user }] = useUser();
  console.log(user);

  return <Text>Connected</Text>;
};

export default Profile;
