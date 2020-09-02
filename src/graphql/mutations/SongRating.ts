import { allFields } from '../types/SongRating';

export const rateSong = /* GraphQL */ `
  mutation rateSong($input: RateSongInput!) {
    rateSong(input: $input) {
      ${allFields}
    }
  }
`;
