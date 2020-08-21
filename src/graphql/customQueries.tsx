const userData = `
    id
    username
    email
    songsSkipped {
        items {
            id
            userId
            songId
            song {
                id
                name
                description
                band
            }
        }
    }
    songsRating {
        items {
            id
            userId
            songId
            rating
            song {
                id
                name
                description
                band
            }
        }
    }
    createdAt
    updatedAt 
`;

export const getUserAndSongs = `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      ${userData}
    }
  }
`;

export const getUserByUsernameAndSongs = `
  query GetUserByUsername($username: String!) {
    userByUsername(username: $username) {
      items {
          ${userData}
      }
    }
  }
`;
