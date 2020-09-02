import { allFields as allSongFields, Song } from './Song';

export type SkippedSong = {
  userId: string;
  songId: string;
  song: Song;
  createdAt: string;
  updatedAt: string;
};

export type SkipSongMutation = {
  skipSong: SkippedSong | null;
};

export const allFields = /* GraphQL */ `
    userId
    songId
    createdAt
    updatedAt
    song {
      ${allSongFields}
    }
`;
