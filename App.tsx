import React, { useEffect } from 'react';
import Amplify from 'aws-amplify';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './src/navigation/Drawer';
import './src/middlewares';
import config from './aws-exports';

import withAsyncStorage from './src/store/withAsyncStorage';
import useUser from './src/store/user';
import useSongs from './src/store/songs';

Amplify.configure(config);

const App: React.FC = () => {
  const [, { setInitialSongsState }] = useSongs();
  const [, { setInitialUserState }] = useUser();

  const setInitialState = async () => {
    const initalStoreData = await withAsyncStorage.getData();
    if (initalStoreData) {
      setInitialSongsState({
        currentSong: initalStoreData?.currentSong,
        skippedSongs: initalStoreData?.skippedSongs,
        songs: initalStoreData?.songs,
      });
      setInitialUserState({ user: initalStoreData?.user });
    }
  };

  useEffect(() => {
    setInitialState();
  }, []);

  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
};

export default App;
// export default withAuthenticator(App, {includeGreetings: true});
