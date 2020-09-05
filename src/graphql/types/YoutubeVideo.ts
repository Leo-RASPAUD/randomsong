import { allFields as thumbnailsAllFields, Thumbnails } from './Thumbnails';

export type YoutubeVideo = {
    id: string
	title: string
	channelTitle: string
	publishTime: string
	thumbnails: Thumbnails
};

export const allFields = /* GraphQL */ `
    id
    title
    channelTitle
    publishTime
    thumbnails {
        ${thumbnailsAllFields}
    }
`