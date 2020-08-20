/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSongRating = /* GraphQL */ `
  query GetSongRating($id: ID!) {
    getSongRating(id: $id) {
      id
      userId
      rating
      createdAt
      updatedAt
    }
  }
`;
export const listSongRatings = /* GraphQL */ `
  query ListSongRatings(
    $filter: ModelSongRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSongRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        rating
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSongSkipped = /* GraphQL */ `
  query GetSongSkipped($id: ID!) {
    getSongSkipped(id: $id) {
      id
      userId
      createdAt
      updatedAt
    }
  }
`;
export const listSongSkippeds = /* GraphQL */ `
  query ListSongSkippeds(
    $filter: ModelSongSkippedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSongSkippeds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      songsSkipped {
        nextToken
      }
      songsRating {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSong = /* GraphQL */ `
  query GetSong($id: ID!) {
    getSong(id: $id) {
      id
      name
      description
      difficulty
      band
      style
      createdAt
      updatedAt
    }
  }
`;
export const listSongs = /* GraphQL */ `
  query ListSongs(
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSongs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        difficulty
        band
        style
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
