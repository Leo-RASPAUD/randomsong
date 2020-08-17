import { createStore, createHook, StoreActionApi } from 'react-sweet-state';
import type { Song } from '../models';

export type SongsState = {
  songs: Song[];
  skippedSongs: Song[];
  currentSong: Song | null;
};

type StoreApi = StoreActionApi<SongsState>;
type Actions = typeof actions;

const initialState: SongsState = {
  songs: [],
  skippedSongs: [],
  currentSong: null,
};

const initSongs = (songs: Song[]) => ({ getState, setState }: StoreApi) => {
  const currentSong = songs[Math.floor(Math.random() * songs.length)];
  setState({
    ...getState(),
    songs,
    currentSong,
  });
};

const skipSong = (songToSkip: Song) => ({ setState, getState }: StoreApi) => {
  const { songs, skippedSongs } = getState();
  const updatedSkippedSongs = [...skippedSongs, songToSkip];
  const updatedSongs = songs.filter((song) => song.id !== songToSkip.id);
  const currentSong = updatedSongs[Math.floor(Math.random() * updatedSongs.length)];
  setState({
    songs: updatedSongs,
    skippedSongs: updatedSkippedSongs,
    currentSong,
  });
};

const setInitialSongsState = (state: SongsState) => ({ setState }: StoreApi) => {
  setState(state);
};

const actions = {
  initSongs,
  skipSong,
  setInitialSongsState,
};

const Store = createStore<SongsState, Actions>({
  initialState,
  actions,
  name: 'songs',
});

const useSongs = createHook(Store);

export default useSongs;
