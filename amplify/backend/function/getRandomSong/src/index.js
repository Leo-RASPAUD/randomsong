const AWS = require('aws-sdk');
const axios = require('axios');
const COUNT_TABLE = 'Randomsong_SongCount';
const SONG_TABLE = 'Randomsong_Song';
const RATING_TABLE = 'Randomsong_SongRating';
const SKIPPED_TABLE = 'Randomsong_SkippedSong';
const COUNT_TABLE_ID = '983f08cc-0f57-4353-b5d4-65b010138762';

const documentClient = new AWS.DynamoDB.DocumentClient();

const getItemCount = async () => {
  const params = {
    TableName: COUNT_TABLE,
    KeyConditionExpression: 'id = :countId',
    ExpressionAttributeValues: {
      ':countId': COUNT_TABLE_ID,
    },
  };

  const {
    Items: [{ count }],
  } = await documentClient.query(params).promise();
  return count;
};

const getSong = async ({ randomId }) => {
  const params = {
    TableName: SONG_TABLE,
    IndexName: 'byRandomId',
    KeyConditionExpression: 'randomId = :randomId',
    ExpressionAttributeValues: {
      ':randomId': randomId,
    },
  };

  const {
    Items: [result],
  } = await documentClient.query(params).promise();
  return result;
};

const getUserRating = async ({ songId, userId }) => {
  const params = {
    TableName: RATING_TABLE,
    KeyConditionExpression: 'songId = :songId',
    ExpressionAttributeValues: {
      ':songId': songId,
      ':userId': userId,
    },
    FilterExpression: 'userId = :userId',
  };

  const { Items } = await documentClient.query(params).promise();
  if (Items && Items.length > 0) {
    return Items[0];
  } else {
    return;
  }
};

const hasUserSkipped = async ({ songId, userId }) => {
  const params = {
    TableName: SKIPPED_TABLE,
    KeyConditionExpression: 'songId = :songId',
    ExpressionAttributeValues: {
      ':songId': songId,
      ':userId': userId,
    },
    FilterExpression: 'userId = :userId',
  };

  const { Items } = await documentClient.query(params).promise();
  if (Items && Items.length > 0) {
    return true;
  }
  return false;
};

const getAverage = async ({ songId }) => {
  const params = {
    TableName: RATING_TABLE,
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

exports.handler = async ({ arguments: { userId } }) => {
  const itemCount = await getItemCount();
  const randomId = Math.floor(Math.random() * itemCount);
  const song = await getSong({ randomId });
  const { id: songId } = song;
  // const songId = "3cd38f2b-ffce-4cf8-8713-69e05024321f"
  // const userId = "3b79fc38-0fe2-4df6-a658-2fa49ab27ebc"
  const averageRating = await getAverage({ songId });

  let userRating;
  let isSkipped = false;

  if (userId) {
    [userRating, isSkipped] = await Promise.all([
      getUserRating({ songId, userId }),
      hasUserSkipped({ songId, userId }),
    ]);
  }

  const isRated = userRating !== undefined;

  return {
    song,
    isSkipped,
    isRated,
    userRating,
    averageRating,
  };
};
