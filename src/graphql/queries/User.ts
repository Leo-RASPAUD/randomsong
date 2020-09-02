import { allFields } from '../types/User';

export const getUserByUsername = /* GraphQL */ `
    query getUserByUsername($username: String!) {
        getUserByUsername(username: $username) {
            ${allFields}
        }
    }
`;
