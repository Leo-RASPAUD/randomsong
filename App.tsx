import React, { useEffect } from 'react';
import Amplify, { Auth, Hub } from 'aws-amplify';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './src/navigation/Drawer';
import './src/middlewares';
import config from './aws-exports';

import withAsyncStorage from './src/store/withAsyncStorage';
import useUser from './src/store/user';
import useSongs from './src/store/songs';

Amplify.configure(config);

const App: React.FC = () => {
  const [, { clearUser, setUser }] = useUser();

  const [, { setInitialSongsState }] = useSongs();
  const [, { setInitialUserState }] = useUser();

  const setInitialState = async () => {
    const initialStoreData = await withAsyncStorage.getData();
    console.log('init', initialStoreData);
    if (initialStoreData) {
      setInitialSongsState({
        currentSong: initialStoreData?.currentSong,
        skippedSongs: initialStoreData?.skippedSongs,
        songs: initialStoreData?.songs,
      });
      setInitialUserState({ user: initialStoreData?.user });
    }
  };

  const getUser = async () => {
    try {
      return await Auth.currentAuthenticatedUser();
    } catch (error) {
      console.log(error);
    }
  };

  const watchAuth = () => {
    Hub.listen('auth', async ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
          const currentUser = await getUser();
          console.log(currentUser);
          setUser(currentUser);
          break;
        case 'signOut':
          clearUser();
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Sign in failure', data);
          break;
      }
    });
  };

  useEffect(() => {
    watchAuth();
    setInitialState();
  }, []);

  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
};

export default App;
