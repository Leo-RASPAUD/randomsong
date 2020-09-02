import React from 'react';
import { Text, View } from 'react-native';

import useUser from '../store/user';

type FormData = {
  username: string;
  password: string;
  confirmationCode: string;
};

const Login: React.FC = () => {
  const [{ user }] = useUser();
  return (
    <View>
      <Text>Welcome {user?.username}</Text>
    </View>
  );
};

export default Login;
