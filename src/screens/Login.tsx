import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';
import Input from '../components/Input';
import Error from '../components/Error';
import useUser from '../store/user';
import Routes from '../routes';

type FormData = {
  username: string;
  password: string;
};

const Login: React.FC = () => {
  const { handleSubmit, control, errors } = useForm<FormData>();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigation = useNavigation();

  const [, { setUser }] = useUser();

  const onSubmit = async ({ username, password }: FormData) => {
    setErrorMessage('');
    try {
      const user = await Auth.signIn(username, password);
      setUser(user);
      navigation.navigate(Routes.PROFILE);
    } catch (error) {
      console.log(error);
      if (typeof error === 'string') {
        setErrorMessage(error);
      } else if (error.message) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Error while signing in');
      }
    }
  };

  return (
    <View>
      <Input title="Username" required name="username" control={control} errors={errors} autoCompleteType="password" />
      <Input
        title="Password"
        required
        name="password"
        control={control}
        errors={errors}
        secureTextEntry
        autoCompleteType="password"
      />
      {errorMessage.length > 0 && <Error errorMessage={errorMessage} />}
      <Button title="Login" onPress={handleSubmit(onSubmit)} />
      <Button title="Subscribe" onPress={() => navigation.navigate(Routes.SIGNUP)} />
    </View>
  );
};

export default Login;
