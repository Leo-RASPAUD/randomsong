import { allFields as songAllFields, Song } from './Song';
import { allFields as songRatingAllFields, SongRating } from './SongRating';
import { allFields as youtubeSuggestionsAllFields, YoutubeSuggestions } from './YoutubeSuggestions';

export type RandomSong = {
  song: Song;
  isSkipped: boolean;
  isRated: boolean;
  userRating: SongRating | null;
  averageRating: number;
  youtubeSuggestions: YoutubeSuggestions | null;
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
    youtubeSuggestions {
        ${youtubeSuggestionsAllFields}
    }
`;
