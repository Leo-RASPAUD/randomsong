import { createHook, createStore, StoreActionApi } from 'react-sweet-state';

export type SongsState = {
  errorMessage: string;
  initialLoading: boolean;
};

const initialState: SongsState = {
  errorMessage: '',
  initialLoading: true,
};

type StoreApi = StoreActionApi<SongsState>;
type Actions = typeof actions;

const setGlobalError = (errorMessage: string) => ({ getState, setState }: StoreApi) => {
  setState({
    ...getState(),
    errorMessage,
  });
};
const finishInitialLoading = () => ({ getState, setState }: StoreApi) => {
  setState({
    ...getState(),
    initialLoading: false,
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
  finishInitialLoading,
};

const Store = createStore<SongsState, Actions>({
  initialState,
  actions,
  name: 'globalStore',
});

const useGlobalStore = createHook(Store);

export default useGlobalStore;
