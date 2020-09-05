import { createHook, createStore, StoreActionApi } from 'react-sweet-state';

import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';

import { createUser as createUserAction } from '../graphql/mutations/User';
import {
    getUserByUsername as getUserByUsernameQuery, getUserSongDataQuery
} from '../graphql/queries/User';
import { SkippedSong } from '../graphql/types/SkippedSong';
import { SongRating } from '../graphql/types/SongRating';
import {
    CreateUserMutation, GetUserByUsernameQuery, GetUserSongDataQuery
} from '../graphql/types/User';
import callGraphQL from '../utils/callGraphQL';

export type User = {
  id: string;
  username: string;
  email?: string;
};

export type UserState = {
  user: User | null;
  skippedSongs: SkippedSong[];
  songRatings: SongRating[];
};

type StoreApi = StoreActionApi<UserState>;
type Actions = typeof actions;

const initialState: UserState = {
  user: null,
  songRatings: [],
  skippedSongs: [],
};

const setInitialUserState = (state: UserState) => ({ setState }: StoreApi) => {
  setState(state);
};

const clearUser = () => ({ setState }: StoreApi) => {
  setState(initialState);
};

const getUserSongData = ({ userId }: { userId: string }) => async ({ setState, getState }: StoreApi) => {
  const queryResult = await callGraphQL<GetUserSongDataQuery>(
    getUserSongDataQuery,
    {
      userId,
    },
    GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  );

  const skippedSongs = queryResult.data?.getSkippedSongsByUser;
  const songRatings = queryResult.data?.getSongRatingsByUser;

  setState({
    ...getState(),
    skippedSongs,
    songRatings,
  });
};

const getUserByUsername = ({ username }: { username: string }) => async ({ setState, getState }: StoreApi) => {
  const queryResult = await callGraphQL<GetUserByUsernameQuery>(
    getUserByUsernameQuery,
    {
      username,
    },
    GRAPHQL_AUTH_MODE.AWS_IAM,
  );

  const data = queryResult?.data?.getUserByUsername;
  if (data && data.length > 0) {
    setState({
      ...getState(),
      user: data[0],
    });
  } else {
    throw new Error('Error while trying to log in, please try again later.');
  }
};

const createUser = ({ username: userParam }: { username: string }) => async ({ setState, getState }: StoreApi) => {
  const resultCreate = await callGraphQL<CreateUserMutation>(
    createUserAction,
    {
      input: { username: userParam, email: userParam },
    },
    GRAPHQL_AUTH_MODE.AWS_IAM,
  );

  const user = resultCreate?.data?.createUser;

  if (!user) {
    throw new Error();
  }

  setState({
    ...getState(),
    user,
  });
};

const setUser = (user: User) => async ({ setState, getState }: StoreApi) => {
  setState({
    ...getState(),
    user,
  });
};

const actions = {
  setInitialUserState,
  clearUser,
  createUser,
  getUserByUsername,
  setUser,
  getUserSongData,
};

const Store = createStore<UserState, Actions>({
  initialState,
  actions,
  name: 'user',
});

const useUser = createHook(Store);

export default useUser;
