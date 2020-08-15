import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { API } from 'aws-amplify';
import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import Error from './Error';
import { listSongs } from '../graphql/queries';
import type { Song } from '../models';
import { ListSongsQuery } from '../API';

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  name: { marginBottom: 15 },
  input: { height: 50, backgroundColor: '#ddd', marginBottom: 10, padding: 8 },
  songName: { fontSize: 18 },
});

const Details = ({ navigation }) => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [currentSong, setcurrentSong] = useState<Song>();
  const [error, setError] = useState<Boolean>(false);
  const [errorMessage, setErrorMessage] = useState<String>('');

  const fetchSongs = async () => {
    try {
      const songsData = (await API.graphql({
        query: listSongs,
        variables: { limit: 500 },
        authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
      })) as GraphQLResult<ListSongsQuery>;

      const songs = songsData.data?.listSongs?.items as Song[];
      if (songs) {
        const song = songs[Math.floor(Math.random() * songs.length)];
        setSongs(songs);
        setcurrentSong(song);
      }
      setLoading(false);
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      setErrorMessage(typeof error === 'string' ? error : 'Unknown error');
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  if (error) {
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

export default Details;
