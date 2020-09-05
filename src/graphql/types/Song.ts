import { RandomSong } from './RandomSong';
import { allFields as youtubeVideoAllFields, YoutubeVideo } from './YoutubeVideo';

export type Song = {
  id?: string | null;
  name: string;
  description?: string | null;
  difficulty: string;
  band: string;
  style?: string | null;
  randomId: number;
  createdAt: string;
  updatedAt: string;
  learnSongVideos: [YoutubeVideo];
  originalSongVideo: YoutubeVideo;
};

export type GetRandomSongQuery = {
  getRandomSong: RandomSong | null;
};

export type RateSongMutation = {
  rateSong: {
    averageRating: number;
  } | null;
};

export const allFields = /* GraphQL */ `
    id
    name
    description
    difficulty
    band
    style
    randomId
    createdAt
    updatedAt
    learnSongVideos {
      ${youtubeVideoAllFields}
    }
    originalSongVideo {
      ${youtubeVideoAllFields}
    }
`;
