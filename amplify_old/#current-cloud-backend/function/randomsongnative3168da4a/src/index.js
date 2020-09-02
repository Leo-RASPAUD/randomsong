const AWS = require('aws-sdk');

const RATING_TABLE = 'Randomsong_SongRating';

const documentClient = new AWS.DynamoDB.DocumentClient();

const getAverage = async ({ songId }) => {
  const params = {
    TableName: RATING_TABLE,
    IndexName: 'bySongId',
    KeyConditionExpression: 'songId = :songId',
    ExpressionAttributeValues: {
      ':songId': songId,
    },
    Limit: 100,
  };

  const { Items } = await documentClient.query(params).promise();
  if (Items && Items.length > 0) {
    const average = Items.reduce((a, b) => a + b.rating, 0) / Items.length;
    return average;
  }
  return -1;
};

exports.handler = async ({ arguments: { songId } }) => {
  return getAverage({ songId });
};
