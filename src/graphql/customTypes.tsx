import { SongSkipped, SongRating } from '../models';

export type GetUserAndSongsQuery = {
  getUser: {
    __typename: 'User';
    id: string;
    username: string;
    email: string;
    songsSkipped: {
      items: Array<SongSkipped> | null;
      nextToken: string | null;
    } | null;
    songsRating: {
      items: Array<SongRating> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type GetUserByUsernameAndSongsQuery = {
  userByUsername: {
    items: Array<{
      __typename: 'User';
      id: string;
      username: string;
      email: string;
      songsSkipped: {
        items: Array<SongSkipped> | null;
        nextToken: string | null;
      } | null;
      songsRating: {
        items: Array<SongRating> | null;
        nextToken: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    }>;
  } | null;
};
