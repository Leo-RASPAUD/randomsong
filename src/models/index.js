// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Song, SongRating, SongSkipped, User } = initSchema(schema);

export {
  Song,
  SongRating,
  SongSkipped,
  User
};