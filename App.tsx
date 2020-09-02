import './src/middlewares';

import Amplify from 'aws-amplify';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import config from './aws-exports';
import Drawer from './src/navigation/Drawer';
import useGlobalStore from './src/store/global';
import useSongs from './src/store/songs';
import useUser from './src/store/user';
import withAsyncStorage from './src/store/withAsyncStorage';

Amplify.configure(config);

const App: React.FC = () => {
  const [, { setInitialSongsState }] = useSongs();
  const [, { setInitialUserState }] = useUser();
  const [{ initialLoading }, { finishInitialLoading }] = useGlobalStore();

  const setInitialState = async () => {
    const initialStoreData = await withAsyncStorage.getData();
    if (initialStoreData) {
      setInitialSongsState({
        currentSong: initialStoreData?.currentSong,
      });
      setInitialUserState({ user: initialStoreData?.user });
    }
    finishInitialLoading();
  };

  useEffect(() => {
    setInitialState();
  }, []);

  if (initialLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
};

export default App;
