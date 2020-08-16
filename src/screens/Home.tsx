import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { API } from 'aws-amplify';
import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import Error from '../components/Error';
import { RootTabParamList } from '../components/Navigation';

import { listSongs } from '../graphql/queries';
import type { Song } from '../models';
import { ListSongsQuery } from '../API';
import useSongs from '../store/songs';
import Routes from '../navigation/routes';

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  name: { marginBottom: 15 },
  input: { height: 50, backgroundColor: '#ddd', marginBottom: 10, padding: 8 },
  songName: { fontSize: 18 },
});

type NewSongScreenNavigationProp = BottomTabNavigationProp<RootTabParamList, Routes.HOME>;

type Props = {
  navigation: NewSongScreenNavigationProp;
};

const Home: React.FC<Props> = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [{ songs, currentSong }, { skipSong, initSongs }] = useSongs();

  const fetchSongs = async () => {
    try {
      const songsData = (await API.graphql({
        query: listSongs,
        variables: { limit: 500 },
        authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
      })) as GraphQLResult<ListSongsQuery>;

      const songs = songsData.data?.listSongs?.items as Song[];
      initSongs(songs);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(typeof error === 'string' ? error : 'Unknown error');
    }
    setLoading(false);
  };

  useEffect(() => {
    if (songs.length === 0) {
      fetchSongs();
    }
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
      {!loading && currentSong && (
        <>
          <Text>Song of the day</Text>
          <Button onPress={() => skipSong(currentSong)} title=" Get a new song" />
          <View style={styles.name}>
            <Text style={styles.songName}>{currentSong.name}</Text>
            <Text>{currentSong.description}</Text>
            <Text>{currentSong.difficulty}</Text>
            <Text>{currentSong.band}</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default Home;
