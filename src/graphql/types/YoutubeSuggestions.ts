import { allFields as youtubeVideoAllFields, YoutubeVideo } from './YoutubeVideo';

export type YoutubeSuggestions = {
    learnSongVideos: YoutubeVideo[];
    originalSongVideo: YoutubeVideo;
};

export const allFields = /* GraphQL */ `
    learnSongVideos {
        ${youtubeVideoAllFields}
    }
    originalSongVideo {
        ${youtubeVideoAllFields}
    }
`
