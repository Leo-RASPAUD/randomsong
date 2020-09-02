import { allFields } from '../types/User';

export const createUser = /* GraphQL */ `
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      ${allFields}
    }
  }
`;
