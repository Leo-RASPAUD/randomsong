import React from 'react';
import { Controller } from 'react-hook-form';
import { StyleSheet, Text, TextInput } from 'react-native';

const styles = StyleSheet.create({
  input: { height: 50, backgroundColor: '#ddd', marginBottom: 10, padding: 8 },
});

type Props = {
  title: string;
  name: string;
  required?: boolean;
  defaultValue?: string;
  secureTextEntry?: boolean;
  autoCompleteType?:
    | 'cc-csc'
    | 'cc-exp'
    | 'cc-exp-month'
    | 'cc-exp-year'
    | 'cc-number'
    | 'email'
    | 'name'
    | 'password'
    | 'postal-code'
    | 'street-address'
    | 'tel'
    | 'username'
    | 'off';
  errors: any; // eslint-disable-line
  control: any; // eslint-disable-line
};

const Input: React.FC<Props> = ({
  title,
  name,
  required = false,
  defaultValue = '',
  control,
  errors,
  secureTextEntry = false,
  autoCompleteType = 'off',
}) => {
  return (
    <>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <>
            <Text>{title}</Text>
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              secureTextEntry={secureTextEntry}
              autoCompleteType={autoCompleteType}
            />
          </>
        )}
        name={name}
        rules={{ required }}
        defaultValue={defaultValue}
      />
      {errors[name] && <Text>This is required.</Text>}
    </>
  );
};

export default Input;
