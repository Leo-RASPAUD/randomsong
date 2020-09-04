import { allFields as youtubeVideoAllFields, YoutubeVideo } from './YoutubeVideo';

export type YoutubeSuggestions = {
  learnSongVideo: YoutubeVideo;
  originalSongVideo: YoutubeVideo;
};

export const allFields = /* GraphQL */ `
    learnSongVideos {
        ${youtubeVideoAllFields}
    }
    originalSongVideo {
        ${youtubeVideoAllFields}
    }
`;
