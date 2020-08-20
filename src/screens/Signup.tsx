import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth, API } from 'aws-amplify';
import { GraphQLResult, GRAPHQL_AUTH_MODE, graphqlOperation } from '@aws-amplify/api';
import Input from '../components/Input';
import Error from '../components/Error';
import useUser, { User } from '../store/user';
import Routes from '../navigation/routes';
import formatErrorMessage from '../utils/formatErrorMessage';
import { createUser } from '../graphql/mutations';
import { getUser, getUserByUsername } from '../graphql/queries';
import { GetUserByUsernameQuery, CreateUserMutation, GetUserQuery } from '../API';

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

  const [, { setUser }] = useUser();

  const getAuthUser = async () => {
    try {
      return await Auth.currentAuthenticatedUser();
    } catch (error) {
      console.log(error);
    }
  };

  const signUp = async ({ username, password }: FormData) => {
    try {
      const { user } = ((await Auth.signUp({
        username,
        password,
        attributes: {
          email: username,
        },
      })) as unknown) as { user: { username: string } };
      setDisplayConfirmation(true);
      setCurrentPassword(password);
    } catch (error) {
      setErrorMessage(formatErrorMessage(error));
    }
  };

  const cleanup = async (error?: string) => {
    const user = await getAuthUser();
    console.log(error);
    setDisplayConfirmation(false);
    user.deleteUser((deleteError) => {
      console.log(deleteError);
      setErrorMessage('Error while creating the user');
    });
  };

  const confirmCode = async ({ username, confirmationCode }: FormData) => {
    try {
      await Auth.confirmSignUp(username, confirmationCode);
      await Auth.signIn(username, currentPassword);
      const resultCreate = (await API.graphql(
        graphqlOperation(createUser, { input: { username, email: username } }),
      )) as GraphQLResult<CreateUserMutation>;
      const resultGetUser = (await API.graphql(
        graphqlOperation(getUser, { id: resultCreate?.data?.createUser?.id }),
      )) as GraphQLResult<GetUserQuery>;
      if (resultGetUser?.data?.getUser) {
        console.log(resultGetUser.data.getUser);
        const { username, id, email, songsSkipped, songsRating } = resultGetUser?.data?.getUser;
        setUser({
          username,
          id,
          email,
          songsSkipped,
          songsRating,
        });
        navigation.navigate(Routes.PROFILE);
      } else {
        cleanup();
      }
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
