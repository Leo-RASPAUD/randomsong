import { allFields } from '../types/RandomSong';

export const getRandomSong = /* GraphQL */ `
  query getRandomSong {
    getRandomSong {
      ${allFields}
    }
  }
`;
