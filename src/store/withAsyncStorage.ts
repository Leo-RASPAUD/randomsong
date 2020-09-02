import AsyncStorage from '@react-native-community/async-storage';

import type { UserState } from './user';
import type { SongsState } from './songs';

const STORE_KEY = '@StorageRandomSong';

export interface FullStore extends UserState, SongsState {}

const storeData = async (value: FullStore): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(STORE_KEY, jsonValue);
  } catch (e) {
    console.log(e);
  }
};

const getData = async (): Promise<FullStore | undefined> => {
  try {
    const value = await AsyncStorage.getItem(STORE_KEY);
    if (value !== null) {
      return JSON.parse(value);
    }
    return;
  } catch (e) {
    console.log(e);
  }
};

export default {
  getData,
  storeData,
};
