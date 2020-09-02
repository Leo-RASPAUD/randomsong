import { API } from 'aws-amplify';

import { GRAPHQL_AUTH_MODE, GraphQLResult } from '@aws-amplify/api';

async function callGraphQL<T>(
  query: any, // eslint-disable-line
  variables?: Record<string, unknown>,
  authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
): Promise<GraphQLResult<T>> {
  return (await API.graphql({ query, variables, authMode })) as GraphQLResult<T>;
}

export default callGraphQL;
