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

type FormData = {
  username: string;
  password: string;
  confirmationCode: string;
  newPassword: string;
};

const Login: React.FC = () => {
  const { handleSubmit, control, errors } = useForm<FormData>();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [displayForgotPassword, setDisplayForgotPassword] = useState<boolean>(false);
  const [displayConfirmationCode, setDisplayConfirmationCode] = useState<boolean>(false);
  const navigation = useNavigation();

  const [, { getUserByUsername }] = useUser();

  const cancelForgot = () => {
    setDisplayForgotPassword(false);
    setDisplayConfirmationCode(false);
  };

  const initUser = async ({ username }) => {
    try {
      await getUserByUsername({ username });
      navigation.navigate(Routes.PROFILE);
    } catch (error) {
      setErrorMessage(formatErrorMessage('Error while trying to log in, please try again later.'));
    }
  };

  const onSubmit = async ({ username: usernameForm, password }: FormData) => {
    setErrorMessage('');
    try {
      await Auth.signIn(usernameForm, password);
      initUser({ username: usernameForm });
    } catch (error) {
      setErrorMessage(formatErrorMessage(error));
    }
  };

  const forgotPassword = async ({ username }: FormData) => {
    setErrorMessage('');
    try {
      await Auth.forgotPassword(username);
      setDisplayConfirmationCode(true);
    } catch (error) {
      setErrorMessage(formatErrorMessage(error));
    }
  };

  const confirmNewPassword = async ({ username: usernameForm, confirmationCode, newPassword }: FormData) => {
    setErrorMessage('');
    try {
      await Auth.forgotPasswordSubmit(usernameForm, confirmationCode, newPassword);
      await Auth.signIn(usernameForm, newPassword);
      initUser({ username: usernameForm });
      navigation.navigate(Routes.PROFILE);
    } catch (error) {
      setErrorMessage(formatErrorMessage(error));
    }
  };

  if (displayForgotPassword) {
    return (
      <View>
        <Input title="Username" required name="username" control={control} errors={errors} autoCompleteType="email" />
        {displayConfirmationCode && (
          <>
            <Input title="Confirmation code" required name="confirmationCode" control={control} errors={errors} />
            <Input title="New password" required name="newPassword" control={control} errors={errors} secureTextEntry />
          </>
        )}
        {errorMessage.length > 0 && <Error errorMessage={errorMessage} />}
        <Button title="Submit" onPress={handleSubmit(displayConfirmationCode ? confirmNewPassword : forgotPassword)} />
        <Button title="Cancel" onPress={cancelForgot} />
      </View>
    );
  }

  return (
    <View>
      <Input title="Username" required name="username" control={control} errors={errors} autoCompleteType="email" />
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
      <Button title="Forgot password" onPress={() => setDisplayForgotPassword(true)} />
    </View>
  );
};

export default Login;
