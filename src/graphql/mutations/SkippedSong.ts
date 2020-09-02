import { allFields } from '../types/SkippedSong';

export const skipSong = /* GraphQL */ `
  mutation skipSong($input: SkipSongInput!) {
    skipSong(input: $input) {
      ${allFields}
    }
  }
`;
