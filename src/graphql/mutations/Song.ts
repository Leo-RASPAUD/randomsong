import { allFields } from '../types/Song';

export const createSong = /* GraphQL */ `
  mutation createSong($input: CreateSongInput!) {
    createSong(input: $input) {
      ${allFields}
    }
  }
`;

export const rateSong = /* GraphQL */ `
  mutation rateSong($input: RateSongInput!) {
    rateSong(input: $input) {
      averageRating
    }
  }
`;
