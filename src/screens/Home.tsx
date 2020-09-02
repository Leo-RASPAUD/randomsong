import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import Error from '../components/Error';
import SongCard from '../components/SongCard';
import useSongs from '../store/songs';
import useUser from '../store/user';

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [{ currentSong }, { fetchRandomSong: fetchRandomSongAction }] = useSongs();
  const [{ user }] = useUser();

  const fetchRandomSong = async () => {
    try {
      await fetchRandomSongAction({ userId: user?.id });
      setErrorMessage('');
    } catch (error) {
      console.log(error);
      setErrorMessage(typeof error === 'string' ? error : 'Unknown error');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRandomSong();
  }, []);

  if (errorMessage.length > 0) {
    return <Error errorMessage={errorMessage} />;
  }

  if (!loading && !currentSong) {
    return <Text>Could not find a song</Text>;
  }

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {!loading && currentSong && <SongCard />}
    </View>
  );
};

export default Home;
