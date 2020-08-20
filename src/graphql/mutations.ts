/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSongRating = /* GraphQL */ `
  mutation CreateSongRating(
    $input: CreateSongRatingInput!
    $condition: ModelSongRatingConditionInput
  ) {
    createSongRating(input: $input, condition: $condition) {
      id
      userId
      rating
      createdAt
      updatedAt
    }
  }
`;
export const updateSongRating = /* GraphQL */ `
  mutation UpdateSongRating(
    $input: UpdateSongRatingInput!
    $condition: ModelSongRatingConditionInput
  ) {
    updateSongRating(input: $input, condition: $condition) {
      id
      userId
      rating
      createdAt
      updatedAt
    }
  }
`;
export const deleteSongRating = /* GraphQL */ `
  mutation DeleteSongRating(
    $input: DeleteSongRatingInput!
    $condition: ModelSongRatingConditionInput
  ) {
    deleteSongRating(input: $input, condition: $condition) {
      id
      userId
      rating
      createdAt
      updatedAt
    }
  }
`;
export const createSongSkipped = /* GraphQL */ `
  mutation CreateSongSkipped(
    $input: CreateSongSkippedInput!
    $condition: ModelSongSkippedConditionInput
  ) {
    createSongSkipped(input: $input, condition: $condition) {
      id
      userId
      createdAt
      updatedAt
    }
  }
`;
export const updateSongSkipped = /* GraphQL */ `
  mutation UpdateSongSkipped(
    $input: UpdateSongSkippedInput!
    $condition: ModelSongSkippedConditionInput
  ) {
    updateSongSkipped(input: $input, condition: $condition) {
      id
      userId
      createdAt
      updatedAt
    }
  }
`;
export const deleteSongSkipped = /* GraphQL */ `
  mutation DeleteSongSkipped(
    $input: DeleteSongSkippedInput!
    $condition: ModelSongSkippedConditionInput
  ) {
    deleteSongSkipped(input: $input, condition: $condition) {
      id
      userId
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createSong = /* GraphQL */ `
  mutation CreateSong(
    $input: CreateSongInput!
    $condition: ModelSongConditionInput
  ) {
    createSong(input: $input, condition: $condition) {
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
export const updateSong = /* GraphQL */ `
  mutation UpdateSong(
    $input: UpdateSongInput!
    $condition: ModelSongConditionInput
  ) {
    updateSong(input: $input, condition: $condition) {
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
export const deleteSong = /* GraphQL */ `
  mutation DeleteSong(
    $input: DeleteSongInput!
    $condition: ModelSongConditionInput
  ) {
    deleteSong(input: $input, condition: $condition) {
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
