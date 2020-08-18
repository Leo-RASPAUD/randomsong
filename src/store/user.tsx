import { createStore, createHook, StoreActionApi } from 'react-sweet-state';

export type User = {
  username: string;
};

export type UserState = {
  user: User | null;
};

type StoreApi = StoreActionApi<UserState>;
type Actions = typeof actions;

const initialState: UserState = {
  user: null,
};

const setUser = (user: User | undefined) => ({ getState, setState }: StoreApi) => {
  setState({
    ...getState(),
    user,
  });
};

const setInitialUserState = (state: UserState) => ({ setState }: StoreApi) => {
  setState(state);
};

const clearUser = () => ({ setState }: StoreApi) => {
  setState(initialState);
};

const actions = {
  setUser,
  setInitialUserState,
  clearUser,
};

const Store = createStore<UserState, Actions>({
  initialState,
  actions,
  name: 'user',
});

const useUser = createHook(Store);

export default useUser;
