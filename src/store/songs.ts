import { createHook, createStore, StoreActionApi } from 'react-sweet-state';

import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';

import songsData from '../../data/initial_songs';
import { skipSong as skipSongAction } from '../graphql/mutations/SkippedSong';
import { createSong, rateSong as rateSongAction } from '../graphql/mutations/Song';
import { getRandomSong } from '../graphql/queries/Song';
import { RandomSong } from '../graphql/types/RandomSong';
import { SkipSongMutation } from '../graphql/types/SkippedSong';
import { GetRandomSongQuery, RateSongMutation } from '../graphql/types/Song';
import { SongRating } from '../graphql/types/SongRating';
import callGraphQL from '../utils/callGraphQL';

export type SongsState = {
  currentSong?: RandomSong;
};

type StoreApi = StoreActionApi<SongsState>;
type Actions = typeof actions;

type RateSong = {
  ratingId?: string;
  userId: string;
  songId: string;
  rating: number;
};

const initialState: SongsState = {
  currentSong: undefined,
};

const initSongs = () => async () => {
  songsData.forEach(async (item, index) => {
    await callGraphQL<GetRandomSongQuery>(
      createSong,
      { input: { ...item, randomId: index } },
      GRAPHQL_AUTH_MODE.AWS_IAM,
    );
  });
};

const fetchRandomSong = ({ userId }: { userId: string | null | undefined }) => async ({
  getState,
  setState,
}: StoreApi) => {
  const results = await callGraphQL<GetRandomSongQuery>(getRandomSong, { userId }, GRAPHQL_AUTH_MODE.AWS_IAM);
  const randomSong = results.data?.getRandomSong as RandomSong;
  setState({
    ...getState(),
    currentSong: randomSong,
  });
};

const rateSong = ({ userId, songId, rating }: RateSong) => async ({ getState, setState }: StoreApi) => {
  const results = await callGraphQL<RateSongMutation>(rateSongAction, { input: { userId, songId, rating } });
  const averageRating = results.data?.rateSong?.averageRating;
  const { currentSong } = getState();
  if (averageRating && currentSong) {
    setState({
      ...getState(),
      currentSong: {
        ...currentSong,
        averageRating,
        userRating: {
          ...(currentSong?.userRating as SongRating),
          rating,
        },
      },
    });
  }
  // let createdUserRating: SongRating | null | undefined;
  // if (ratingId) {
  //   await API.graphql(graphqlOperation(updateSongRating, { input: { id: ratingId, userId, songId, rating } }));
  // } else {
  //   const resultCreate = (await API.graphql(
  //     graphqlOperation(createSongRating, { input: { userId, songId, rating } }),
  //   )) as GraphQLResult<CreateSongRatingMutation>;
  //   createdUserRating = resultCreate.data?.createSongRating as SongRating;
  // }
  // const resultGetAverageRating = (await API.graphql(
  //   graphqlOperation(getSongAverageRating, { songId }),
  // )) as GraphQLResult<GetSongAverageRatingQuery>;
  // const averageRating = resultGetAverageRating?.data?.getSongAverageRating || 0;
  // const { currentSong } = getState();
};

const skipSong = ({ userId, songId }: { userId: string; songId: string }) => async () => {
  await callGraphQL<SkipSongMutation>(
    skipSongAction,
    { input: { songId, userId } },
    GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  );
};

const setInitialSongsState = (state: SongsState) => ({ setState }: StoreApi) => {
  setState(state);
};

const actions = {
  setInitialSongsState,
  fetchRandomSong,
  rateSong,
  skipSong,
  initSongs,
};

const Store = createStore<SongsState, Actions>({
  initialState,
  actions,
  name: 'songs',
});

const useSongs = createHook(Store);

export default useSongs;
