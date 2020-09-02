import { allFields as songAllFields, Song } from './Song';

export type SongRating = {
  songId: string;
  userId: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
  song: Song;
};

export type SkipSongMutation = {
  skipSong: SongRating | null;
};

export const allFields = /* GraphQL */ `
    songId
    userId
    rating
    createdAt
    updatedAt
    song {
      ${songAllFields}
    }
`;
