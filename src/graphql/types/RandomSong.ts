import { allFields as songAllFields, Song } from './Song';
import { allFields as songRatingAllFields, SongRating } from './SongRating';

export type RandomSong = {
  song: Song;
  isSkipped: boolean;
  isRated: boolean;
  userRating: SongRating | null;
  averageRating: number;
  youtubeLink: string | null;
  songsterrLink: string | null;
};

export const allFields = /* GraphQL */ `
    song {
        ${songAllFields}
    } 
    isSkipped
    isRated
    userRating {
        ${songRatingAllFields}
    }
    averageRating
    youtubeLink
    songsterrLink
`;
