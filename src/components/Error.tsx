import React from 'react';
import { Text } from 'react-native';

type ErrorProps = {
  errorMessage: string;
};

const Error: React.FC<ErrorProps> = ({ errorMessage }) => {
  return <Text>{errorMessage}</Text>;
};

export default Error;
