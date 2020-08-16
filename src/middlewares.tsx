import { defaults } from 'react-sweet-state';
import withAsyncStorage, { FullStore } from './store/withAsyncStorage';

// eslint-disable-next-line
const logger = () => (next: any) => async (arg: FullStore) => {
  const currentStoreData = await withAsyncStorage.getData();
  withAsyncStorage.storeData({
    ...currentStoreData,
    ...arg,
  });
  return next(arg);
};

defaults.middlewares.add(logger);
defaults.devtools = true;
