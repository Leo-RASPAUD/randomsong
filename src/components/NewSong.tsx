import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { listSongs } from '../graphql/queries';
import { createSong } from '../graphql/mutations';
import type { Song } from '../models';

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  name: { marginBottom: 15 },
  input: { height: 50, backgroundColor: '#ddd', marginBottom: 10, padding: 8 },
  songName: { fontSize: 18 },
});

const Details = ({ navigation }) => {
  const [songs, setSongs] = useState<Array<Song>>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [currentSong, setcurrentSong] = useState<Song>();

  // async function addSong(song) {
  //   try {
  //     await API.graphql(
  //       graphqlOperation(createSong, {
  //         input: song,
  //       }),
  //     );
  //   } catch (err) {
  //     console.log('error creating todo:', err);
  //   }
  // }

  const fetchSongs = async () => {
    try {
      const songsData = await API.graphql(graphqlOperation(listSongs, { limit: 500 }));
      const songs = songsData.data.listSongs.items;
      const song = songs[Math.floor(Math.random() * songs.length)];
      setSongs(songs);
      setcurrentSong(song);
      setLoading(false);
    } catch (err) {
      console.log('error fetching todos');
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {loading && <Text>Loading ...</Text>}
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
