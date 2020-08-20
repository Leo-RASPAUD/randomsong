import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';
import Input from '../components/Input';
import Error from '../components/Error';
import useUser from '../store/user';
import Routes from '../navigation/routes';
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

  const [, { setUser }] = useUser();

  const cancelForgot = () => {
    setDisplayForgotPassword(false);
    setDisplayConfirmationCode(false);
  };

  const onSubmit = async ({ username, password }: FormData) => {
    setErrorMessage('');
    try {
      const user = await Auth.signIn(username, password);
      setUser({ username: user?.attributes?.email });
      navigation.navigate(Routes.PROFILE);
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

  const confirmNewPassword = async ({ username, confirmationCode, newPassword }: FormData) => {
    setErrorMessage('');
    try {
      await Auth.forgotPasswordSubmit(username, confirmationCode, newPassword);
      setUser({ username });
      navigation.navigate(Routes.PROFILE);
    } catch (error) {
      setErrorMessage(formatErrorMessage(error));
    }
  };

  // const federatedSignin = async () => {
  //   try {
  //     Auth.federatedSignIn({ provider: 'Google' as CognitoHostedUIIdentityProvider });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
      {/* <Button title="Sign in with Google" onPress={federatedSignin} /> */}
    </View>
  );
};

export default Login;
