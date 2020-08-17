import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';
import Input from '../components/Input';
import Error from '../components/Error';
import useUser, { User } from '../store/user';
import Routes from '../navigation/routes';
import formatErrorMessage from '../utils/formatErrorMessage';

type FormData = {
  username: string;
  password: string;
  confirmationCode: string;
};

const Login: React.FC = () => {
  const { handleSubmit, control, errors } = useForm<FormData>();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [displayConfirmation, setDisplayConfirmation] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User>();
  const navigation = useNavigation();

  const [, { setUser }] = useUser();

  const signUp = async ({ username, password }: FormData) => {
    try {
      const { user } = ((await Auth.signUp(username, password)) as unknown) as { user: { username: string } };
      setCurrentUser({ username: user?.username });
      setDisplayConfirmation(true);
    } catch (error) {
      setErrorMessage(formatErrorMessage(error));
    }
  };

  const confirmCode = async ({ username, confirmationCode }: FormData) => {
    try {
      await Auth.confirmSignUp(username, confirmationCode);
      setUser(currentUser);
      navigation.navigate(Routes.PROFILE);
    } catch (error) {
      setErrorMessage(formatErrorMessage(error));
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
