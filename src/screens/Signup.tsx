import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Error from '../components/Error';
import Input from '../components/Input';
import Routes from '../navigation/routes';
import useUser from '../store/user';
import formatErrorMessage from '../utils/formatErrorMessage';

interface Error {
  name: string;
  message: string;
  stack?: string;
}

type FormData = {
  username: string;
  password: string;
  confirmationCode: string;
};

const Login: React.FC = () => {
  const { handleSubmit, control, errors } = useForm<FormData>();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [displayConfirmation, setDisplayConfirmation] = useState<boolean>(false);
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const navigation = useNavigation();

  const [, { createUser }] = useUser();

  const getAuthUser = async () => {
    try {
      return await Auth.currentAuthenticatedUser();
    } catch (error) {
      console.log(error);
    }
  };

  const signUp = async ({ username, password }: FormData) => {
    try {
      setErrorMessage('');
      await Auth.signUp({
        username,
        password,
        attributes: {
          email: username,
        },
      });
      setDisplayConfirmation(true);
      setCurrentPassword(password);
    } catch (error) {
      setErrorMessage(formatErrorMessage(error));
    }
  };

  // eslint-disable-next-line
  const cleanup = async (error?: any) => {
    if (error && error.code === 'CodeMismatchException') {
      setErrorMessage(formatErrorMessage(error));
    } else {
      const user = await getAuthUser();
      console.log(error);
      setDisplayConfirmation(false);
      // eslint-disable-line
      user.deleteUser((deleteError: Error) => {
        console.log(deleteError);
        setErrorMessage('Error while creating the user');
      });
    }
  };

  const confirmCode = async ({ username, confirmationCode }: FormData) => {
    try {
      await Auth.confirmSignUp(username, confirmationCode);
      await Auth.signIn(username, currentPassword);
      await createUser({ username });
      console.log('after');
      navigation.navigate(Routes.PROFILE);
    } catch (error) {
      cleanup(error);
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
      {displayConfirmation ? (
        <>
          <Input title="Confirmation code" required name="confirmationCode" control={control} errors={errors} />
          <Button title="Confirm code" onPress={handleSubmit(confirmCode)} />
        </>
      ) : (
        <Button title="Sign up" onPress={handleSubmit(signUp)} />
      )}
      {errorMessage.length > 0 && <Error errorMessage={errorMessage} />}
    </View>
  );
};

export default Login;
