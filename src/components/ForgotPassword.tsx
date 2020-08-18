import React, { SetStateAction, Dispatch } from 'react';
import { View, Button, Input } from 'react-native';
import Error from './Error';

type Props = {
  setDisplayForgotPassword: Dispatch<SetStateAction<boolean>>;
  errors: any; //eslint-disable-line
  control: any; // eslint-disable-line
  handleSubmit: any; // eslint-disable-line
};

const ForgotPassword: React.FC<Props> = ({ setDisplayForgotPassword, errors, control, handleSubmit }) => {
  const forgotPassword = async ({ username }: FormData) => {
    setErrorMessage('');
    try {
      const user = await Auth.forgotPassword(username);
      setUser({ username: user?.attributes?.email });
      navigation.navigate(Routes.PROFILE);
    } catch (error) {
      setErrorMessage(formatErrorMessage(error));
    }
  };

  return (
    <View>
      <Input title="Username" required name="username" control={control} errors={errors} autoCompleteType="email" />
      {errorMessage.length > 0 && <Error errorMessage={errorMessage} />}
      <Button title="Submit" onPress={handleSubmit(forgotPassword)} />
    </View>
  );
};

export default ForgotPassword;
