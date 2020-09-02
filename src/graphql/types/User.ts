export type User = {
  id: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type GetUserByUsernameQuery = {
  getUserByUsername: User[] | null;
};

export type CreateUserMutation = {
  createUser: User | null;
};

export type GetUserByUsernameVariables = {
  username: string;
};

export const allFields = /* GraphQL */ `
    id
    username
    email
    createdAt
    updatedAt
`;
