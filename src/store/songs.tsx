import { createStore, createHook, StoreActionApi } from 'react-sweet-state';
import type { Song } from '../models';

type State = {
  songs: Song[];
  skippedSongs: Song[];
  currentSong: Song | null;
};

type StoreApi = StoreActionApi<State>;
type Actions = typeof actions;

const initialState: State = {
  songs: [],
  skippedSongs: [],
  currentSong: null,
};

const initSongs = (songs: Song[]) => ({ setState }: StoreApi) => {
  const currentSong = songs[Math.floor(Math.random() * songs.length)];
  setState({
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

const actions = {
  initSongs,
  skipSong,
};

const Store = createStore<State, Actions>({
  initialState,
  actions,
});

const useSongs = createHook(Store);

export default useSongs;
