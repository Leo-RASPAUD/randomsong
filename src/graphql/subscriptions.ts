/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSongRating = /* GraphQL */ `
  subscription OnCreateSongRating {
    onCreateSongRating {
      id
      userId
      rating
      songId
      createdAt
      updatedAt
      song {
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
  }
`;
export const onUpdateSongRating = /* GraphQL */ `
  subscription OnUpdateSongRating {
    onUpdateSongRating {
      id
      userId
      rating
      songId
      createdAt
      updatedAt
      song {
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
  }
`;
export const onDeleteSongRating = /* GraphQL */ `
  subscription OnDeleteSongRating {
    onDeleteSongRating {
      id
      userId
      rating
      songId
      createdAt
      updatedAt
      song {
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
  }
`;
export const onCreateSongSkipped = /* GraphQL */ `
  subscription OnCreateSongSkipped {
    onCreateSongSkipped {
      id
      userId
      songId
      createdAt
      updatedAt
      song {
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
  }
`;
export const onUpdateSongSkipped = /* GraphQL */ `
  subscription OnUpdateSongSkipped {
    onUpdateSongSkipped {
      id
      userId
      songId
      createdAt
      updatedAt
      song {
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
  }
`;
export const onDeleteSongSkipped = /* GraphQL */ `
  subscription OnDeleteSongSkipped {
    onDeleteSongSkipped {
      id
      userId
      songId
      createdAt
      updatedAt
      song {
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
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong {
    onCreateSong {
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
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong {
    onUpdateSong {
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
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong {
    onDeleteSong {
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
