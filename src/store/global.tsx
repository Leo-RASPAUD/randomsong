import { createStore, createHook, StoreActionApi } from 'react-sweet-state';
import type { Song } from '../models';

export type SongsState = {
  errorMessage: string;
};

const initialState: SongsState = {
  errorMessage: '',
};

type StoreApi = StoreActionApi<SongsState>;
type Actions = typeof actions;

const setGlobalError = (errorMessage: string) => ({ getState, setState }: StoreApi) => {
  setState({
    ...getState(),
    errorMessage,
  });
};

const clearGlobalError = () => ({ getState, setState }: StoreApi) => {
  setState({
    ...getState(),
    errorMessage: '',
  });
};

const actions = {
  setGlobalError,
  clearGlobalError,
};

const Store = createStore<SongsState, Actions>({
  initialState,
  actions,
  name: 'globalStore',
});

const useGlobalStore = createHook(Store);

export default useGlobalStore;
