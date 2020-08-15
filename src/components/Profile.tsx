import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Routes from '../routes';

const Home = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Profile screen</Text>
    <Button title="Go to Home" onPress={() => navigation.navigate(Routes.NEW_SONG)} />
  </View>
);

export default Home;
