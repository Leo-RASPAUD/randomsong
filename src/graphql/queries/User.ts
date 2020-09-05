import { allFields } from '../types/User';

export const getUserByUsername = /* GraphQL */ `
    query getUserByUsername($username: String!) {
        getUserByUsername(username: $username) {
            ${allFields}
        }
    }
`;

export const getUserSongDataQuery = /* GraphQL */ `
  query getUserSongData($userId: ID!) {
    getSkippedSongsByUser(userId: $userId) {
      songId
      song {
        name
        id
      }
    }
    getSongRatingsByUser(userId: $userId) {
      rating
      song {
        name
        id
      }
    }
  }
`;
