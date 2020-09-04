import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AirbnbRating } from 'react-native-elements';

import RATINGS from '../constants/ratings';
import useSongs from '../store/songs';
import useUser from '../store/user';
import OriginalYoutubeVideo from './OriginalYoutubeVideo';

const SongCard: React.FC = () => {
  const [{ currentSong }, { rateSong: rateSongAction, skipSong: skipSongAction, fetchRandomSong }] = useSongs();
  const [{ user }, {}] = useUser();
  const [currentUserRating, setCurrentUserRating] = useState<number>(0);

  const skipSong = async () => {
    const userId = user?.id;
    const songId = currentSong?.song.id;
    if (songId && userId) {
      try {
        await Promise.all([skipSongAction({ songId, userId }), fetchRandomSong({ userId: user?.id })]);
      } catch (error) {
        console.log(error);
      }
    } else {
      fetchRandomSong({ userId: user?.id });
    }
  };

  const rateSong = async (rating: number) => {
    const userId = user?.id;
    const songId = currentSong?.song.id;
    if (songId && userId) {
      try {
        rateSongAction({ userId, songId, rating });
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (!currentSong) {
    return null;
  }

  const {
    averageRating,
    userRating,
    isSkipped,
    song: { difficulty, description, band, name },
    youtubeSuggestions: {
      originalSongVideo,
      learnSongVideos
    }
  } = currentSong;

  useEffect(() => {
    setCurrentUserRating(userRating?.rating || 0);
  }, [currentSong]);

  return (
    <View style={styles.name}>
      <Text>Song of the day</Text>
      <Button onPress={skipSong} title="Get a new song" />
      <Text style={styles.songName}>{name}</Text>
      <Text>{description}</Text>
      <Text>{difficulty}</Text>
      <Text>{band}</Text>
      <a href={`http://www.songsterr.com/a/wa/bestMatchForQueryString?s=${name}&a=${band}`} target="_blank" rel="noreferrer">Songsterr link</a>
      <OriginalYoutubeVideo data={originalSongVideo} />
      <Text>Average rating: {averageRating === -1 ? 'Not rated yet!' : averageRating}</Text>
      {isSkipped && <Text>already skipped </Text>}
      {user && (
        <AirbnbRating
          count={RATINGS.length}
          reviews={RATINGS}
          defaultRating={currentUserRating}
          size={20}
          onFinishRating={rateSong}
        />
      )}
    </View>
  );
};

export default SongCard;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  name: { marginBottom: 15 },
  input: { height: 50, backgroundColor: '#ddd', marginBottom: 10, padding: 8 },
  songName: { fontSize: 18 },
});
