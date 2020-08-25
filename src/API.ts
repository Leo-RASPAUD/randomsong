/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSongRatingInput = {
  id?: string | null,
  userId: string,
  rating: number,
  songId: string,
};

export type ModelSongRatingConditionInput = {
  userId?: ModelIDInput | null,
  rating?: ModelIntInput | null,
  songId?: ModelIDInput | null,
  and?: Array< ModelSongRatingConditionInput | null > | null,
  or?: Array< ModelSongRatingConditionInput | null > | null,
  not?: ModelSongRatingConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateSongRatingInput = {
  id: string,
  userId?: string | null,
  rating?: number | null,
  songId?: string | null,
};

export type DeleteSongRatingInput = {
  id?: string | null,
};

export type CreateSongSkippedInput = {
  id?: string | null,
  userId: string,
  songId: string,
};

export type ModelSongSkippedConditionInput = {
  userId?: ModelIDInput | null,
  songId?: ModelIDInput | null,
  and?: Array< ModelSongSkippedConditionInput | null > | null,
  or?: Array< ModelSongSkippedConditionInput | null > | null,
  not?: ModelSongSkippedConditionInput | null,
};

export type UpdateSongSkippedInput = {
  id: string,
  userId?: string | null,
  songId?: string | null,
};

export type DeleteSongSkippedInput = {
  id?: string | null,
};

export type CreateUserInput = {
  id?: string | null,
  username: string,
  email: string,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateSongInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  difficulty: string,
  band: string,
  style?: string | null,
};

export type ModelSongConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  difficulty?: ModelStringInput | null,
  band?: ModelStringInput | null,
  style?: ModelStringInput | null,
  and?: Array< ModelSongConditionInput | null > | null,
  or?: Array< ModelSongConditionInput | null > | null,
  not?: ModelSongConditionInput | null,
};

export type UpdateSongInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  difficulty?: string | null,
  band?: string | null,
  style?: string | null,
};

export type DeleteSongInput = {
  id?: string | null,
};

export type ModelSongRatingFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  rating?: ModelIntInput | null,
  songId?: ModelIDInput | null,
  and?: Array< ModelSongRatingFilterInput | null > | null,
  or?: Array< ModelSongRatingFilterInput | null > | null,
  not?: ModelSongRatingFilterInput | null,
};

export type ModelSongSkippedFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  songId?: ModelIDInput | null,
  and?: Array< ModelSongSkippedFilterInput | null > | null,
  or?: Array< ModelSongSkippedFilterInput | null > | null,
  not?: ModelSongSkippedFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSongFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  difficulty?: ModelStringInput | null,
  band?: ModelStringInput | null,
  style?: ModelStringInput | null,
  and?: Array< ModelSongFilterInput | null > | null,
  or?: Array< ModelSongFilterInput | null > | null,
  not?: ModelSongFilterInput | null,
};

export type CreateSongRatingMutationVariables = {
  input: CreateSongRatingInput,
  condition?: ModelSongRatingConditionInput | null,
};

export type CreateSongRatingMutation = {
  createSongRating:  {
    __typename: "SongRating",
    id: string,
    userId: string,
    rating: number,
    songId: string,
    createdAt: string,
    updatedAt: string,
    song:  {
      __typename: "Song",
      id: string,
      name: string,
      description: string | null,
      difficulty: string,
      band: string,
      style: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateSongRatingMutationVariables = {
  input: UpdateSongRatingInput,
  condition?: ModelSongRatingConditionInput | null,
};

export type UpdateSongRatingMutation = {
  updateSongRating:  {
    __typename: "SongRating",
    id: string,
    userId: string,
    rating: number,
    songId: string,
    createdAt: string,
    updatedAt: string,
    song:  {
      __typename: "Song",
      id: string,
      name: string,
      description: string | null,
      difficulty: string,
      band: string,
      style: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteSongRatingMutationVariables = {
  input: DeleteSongRatingInput,
  condition?: ModelSongRatingConditionInput | null,
};

export type DeleteSongRatingMutation = {
  deleteSongRating:  {
    __typename: "SongRating",
    id: string,
    userId: string,
    rating: number,
    songId: string,
    createdAt: string,
    updatedAt: string,
    song:  {
      __typename: "Song",
      id: string,
      name: string,
      description: string | null,
      difficulty: string,
      band: string,
      style: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreateSongSkippedMutationVariables = {
  input: CreateSongSkippedInput,
  condition?: ModelSongSkippedConditionInput | null,
};

export type CreateSongSkippedMutation = {
  createSongSkipped:  {
    __typename: "SongSkipped",
    id: string,
    userId: string,
    songId: string,
    createdAt: string,
    updatedAt: string,
    song:  {
      __typename: "Song",
      id: string,
      name: string,
      description: string | null,
      difficulty: string,
      band: string,
      style: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateSongSkippedMutationVariables = {
  input: UpdateSongSkippedInput,
  condition?: ModelSongSkippedConditionInput | null,
};

export type UpdateSongSkippedMutation = {
  updateSongSkipped:  {
    __typename: "SongSkipped",
    id: string,
    userId: string,
    songId: string,
    createdAt: string,
    updatedAt: string,
    song:  {
      __typename: "Song",
      id: string,
      name: string,
      description: string | null,
      difficulty: string,
      band: string,
      style: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteSongSkippedMutationVariables = {
  input: DeleteSongSkippedInput,
  condition?: ModelSongSkippedConditionInput | null,
};

export type DeleteSongSkippedMutation = {
  deleteSongSkipped:  {
    __typename: "SongSkipped",
    id: string,
    userId: string,
    songId: string,
    createdAt: string,
    updatedAt: string,
    song:  {
      __typename: "Song",
      id: string,
      name: string,
      description: string | null,
      difficulty: string,
      band: string,
      style: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    songsSkipped:  {
      __typename: "ModelSongSkippedConnection",
      nextToken: string | null,
    } | null,
    songsRating:  {
      __typename: "ModelSongRatingConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    songsSkipped:  {
      __typename: "ModelSongSkippedConnection",
      nextToken: string | null,
    } | null,
    songsRating:  {
      __typename: "ModelSongRatingConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    songsSkipped:  {
      __typename: "ModelSongSkippedConnection",
      nextToken: string | null,
    } | null,
    songsRating:  {
      __typename: "ModelSongRatingConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSongMutationVariables = {
  input: CreateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type CreateSongMutation = {
  createSong:  {
    __typename: "Song",
    id: string,
    name: string,
    description: string | null,
    difficulty: string,
    band: string,
    style: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSongMutationVariables = {
  input: UpdateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type UpdateSongMutation = {
  updateSong:  {
    __typename: "Song",
    id: string,
    name: string,
    description: string | null,
    difficulty: string,
    band: string,
    style: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSongMutationVariables = {
  input: DeleteSongInput,
  condition?: ModelSongConditionInput | null,
};

export type DeleteSongMutation = {
  deleteSong:  {
    __typename: "Song",
    id: string,
    name: string,
    description: string | null,
    difficulty: string,
    band: string,
    style: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetSongRatingQueryVariables = {
  id: string,
};

export type GetSongRatingQuery = {
  getSongRating:  {
    __typename: "SongRating",
    id: string,
    userId: string,
    rating: number,
    songId: string,
    createdAt: string,
    updatedAt: string,
    song:  {
      __typename: "Song",
      id: string,
      name: string,
      description: string | null,
      difficulty: string,
      band: string,
      style: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListSongRatingsQueryVariables = {
  filter?: ModelSongRatingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSongRatingsQuery = {
  listSongRatings:  {
    __typename: "ModelSongRatingConnection",
    items:  Array< {
      __typename: "SongRating",
      id: string,
      userId: string,
      rating: number,
      songId: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetSongSkippedQueryVariables = {
  id: string,
};

export type GetSongSkippedQuery = {
  getSongSkipped:  {
    __typename: "SongSkipped",
    id: string,
    userId: string,
    songId: string,
    createdAt: string,
    updatedAt: string,
    song:  {
      __typename: "Song",
      id: string,
      name: string,
      description: string | null,
      difficulty: string,
      band: string,
      style: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListSongSkippedsQueryVariables = {
  filter?: ModelSongSkippedFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSongSkippedsQuery = {
  listSongSkippeds:  {
    __typename: "ModelSongSkippedConnection",
    items:  Array< {
      __typename: "SongSkipped",
      id: string,
      userId: string,
      songId: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    songsSkipped:  {
      __typename: "ModelSongSkippedConnection",
      nextToken: string | null,
    } | null,
    songsRating:  {
      __typename: "ModelSongRatingConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type UserByUsernameQueryVariables = {
  username?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserByUsernameQuery = {
  userByUsername:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListSongsQueryVariables = {
  filter?: ModelSongFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSongsQuery = {
  listSongs:  {
    __typename: "ModelSongConnection",
    items:  Array< {
      __typename: "Song",
      id: string,
      name: string,
      description: string | null,
      difficulty: string,
      band: string,
      style: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetSongQueryVariables = {
  id: string,
};

export type GetSongQuery = {
  getSong:  {
    __typename: "Song",
    id: string,
    name: string,
    description: string | null,
    difficulty: string,
    band: string,
    style: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSongRatingSubscription = {
  onCreateSongRating:  {
    __typename: "SongRating",
    id: string,
    userId: string,
    rating: number,
    songId: string,
    createdAt: string,
    updatedAt: string,
    song:  {
      __typename: "Song",
      id: string,
      name: string,
      description: string | null,
      difficulty: string,
      band: string,
      style: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateSongRatingSubscription = {
  onUpdateSongRating:  {
    __typename: "SongRating",
    id: string,
    userId: string,
    rating: number,
    songId: string,
    createdAt: string,
    updatedAt: string,
    song:  {
      __typename: "Song",
      id: string,
      name: string,
      description: string | null,
      difficulty: string,
      band: string,
      style: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteSongRatingSubscription = {
  onDeleteSongRating:  {
    __typename: "SongRating",
    id: string,
    userId: string,
    rating: number,
    songId: string,
    createdAt: string,
    updatedAt: string,
    song:  {
      __typename: "Song",
      id: string,
      name: string,
      description: string | null,
      difficulty: string,
      band: string,
      style: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateSongSkippedSubscription = {
  onCreateSongSkipped:  {
    __typename: "SongSkipped",
    id: string,
    userId: string,
    songId: string,
    createdAt: string,
    updatedAt: string,
    song:  {
      __typename: "Song",
      id: string,
      name: string,
      description: string | null,
      difficulty: string,
      band: string,
      style: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateSongSkippedSubscription = {
  onUpdateSongSkipped:  {
    __typename: "SongSkipped",
    id: string,
    userId: string,
    songId: string,
    createdAt: string,
    updatedAt: string,
    song:  {
      __typename: "Song",
      id: string,
      name: string,
      description: string | null,
      difficulty: string,
      band: string,
      style: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteSongSkippedSubscription = {
  onDeleteSongSkipped:  {
    __typename: "SongSkipped",
    id: string,
    userId: string,
    songId: string,
    createdAt: string,
    updatedAt: string,
    song:  {
      __typename: "Song",
      id: string,
      name: string,
      description: string | null,
      difficulty: string,
      band: string,
      style: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    songsSkipped:  {
      __typename: "ModelSongSkippedConnection",
      nextToken: string | null,
    } | null,
    songsRating:  {
      __typename: "ModelSongRatingConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    songsSkipped:  {
      __typename: "ModelSongSkippedConnection",
      nextToken: string | null,
    } | null,
    songsRating:  {
      __typename: "ModelSongRatingConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    songsSkipped:  {
      __typename: "ModelSongSkippedConnection",
      nextToken: string | null,
    } | null,
    songsRating:  {
      __typename: "ModelSongRatingConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSongSubscription = {
  onCreateSong:  {
    __typename: "Song",
    id: string,
    name: string,
    description: string | null,
    difficulty: string,
    band: string,
    style: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSongSubscription = {
  onUpdateSong:  {
    __typename: "Song",
    id: string,
    name: string,
    description: string | null,
    difficulty: string,
    band: string,
    style: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSongSubscription = {
  onDeleteSong:  {
    __typename: "Song",
    id: string,
    name: string,
    description: string | null,
    difficulty: string,
    band: string,
    style: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
