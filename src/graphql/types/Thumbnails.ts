import { allFields as thumbnailAllFields, Thumbnail } from './Thumbnail';

export type Thumbnails = {
	default: Thumbnail
	medium: Thumbnail
	high: Thumbnail
};

export const allFields = /* GraphQL */ `
    default {
        ${thumbnailAllFields}
    }
    medium {
        ${thumbnailAllFields}
    }
    high {
        ${thumbnailAllFields}
    }
`