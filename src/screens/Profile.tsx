import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import { useIsFocused } from '@react-navigation/native';

import { SkippedSong } from '../graphql/types/SkippedSong';
import { SongRating } from '../graphql/types/SongRating';
import useUser from '../store/user';

const Profile: React.FC = () => {
  const isFocused = useIsFocused();

  const [{ user, skippedSongs, songRatings }, { getUserSongData }] = useUser();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  if (!user) {
    return <div>No user found</div>;
  }

  const getSongData = async () => {
    try {
      setError(null);
      await getUserSongData({ userId: user?.id });
    } catch (error) {
      setError('Error while getting song information, please try again later');
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getSongData();
  }, [isFocused]);

  return (
    <View>
      <Text>Welcome {user?.username}</Text>
      {error && <Text>{error}</Text>}
      {loading && <ActivityIndicator />}
      {!loading && (
        <>
          {skippedSongs.map((skipped: SkippedSong) => (
            <Text key={skipped.song.id}>{skipped.song.name}</Text>
          ))}
          {songRatings.map((songRating: SongRating) => (
            <Text key={songRating.song.id}>
              {songRating.song.name}: {songRating.rating}
            </Text>
          ))}
        </>
      )}
    </View>
  );
};

export default Profile;
