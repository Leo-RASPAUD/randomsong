import { createStore, createHook, StoreActionApi } from 'react-sweet-state';
import type { Song } from '../models';

type User = {
  id: string;
};

export type UserState = {
  user: User | null;
};

type StoreApi = StoreActionApi<UserState>;
type Actions = typeof actions;

const initialState: UserState = {
  user: null,
};

const setUser = (user: Song) => ({ setState }: StoreApi) => {
  setState({
    user,
  });
};

const setInitialUserState = (state: UserState) => ({ setState }: StoreApi) => {
  setState(state);
};

const actions = {
  setUser,
  setInitialUserState,
};

const Store = createStore<UserState, Actions>({
  initialState,
  actions,
  name: 'user',
});

const useUser = createHook(Store);

export default useUser;
