// declare module 'aws-amplify'

declare global {
  enum GRAPHQL_AUTH_MODE {
    API_KEY = 'API_KEY',
    AWS_IAM = 'AWS_IAM',
    OPENID_CONNECT = 'OPENID_CONNECT',
    AMAZON_COGNITO_USER_POOLS = 'AMAZON_COGNITO_USER_POOLS',
  }
}
