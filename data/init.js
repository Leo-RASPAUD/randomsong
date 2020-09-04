const data = require('./data5');
const axios = require('axios');
const fs = require('fs');

const YOUTUBE_API_KEY = '';

const mapYoutubeResults = (item) => {
  const id = item.id.videoId;
  const {
    snippet: { title, thumbnails, channelTitle, publishTime },
  } = item;
  return {
    id,
    title,
    thumbnails,
    channelTitle,
    publishTime,
  };
};

const getYoutubeSuggestions = async ({ name, band }) => {
  const baseUrl = 'https://www.googleapis.com/youtube/v3/search';
  const baseParams = `part=snippet&key=${YOUTUBE_API_KEY}&relevanceLanguage=en`;
  const baseQuery = 'order=viewCount&maxResults=3&q=learn,tab,guitar,lesson';
  const originalSongQuery = `maxResults=1&q=${name},${band}`;
  const finalBaseUrl = `${baseUrl}?${baseParams}`;
  const finalUrl = `${finalBaseUrl}&${baseQuery},${name},${band}`;
  const finalSongUrl = `${finalBaseUrl}&${originalSongQuery}`;

  try {
    const [learnResults, originalSongResults] = await Promise.all([axios.get(finalUrl), axios.get(finalSongUrl)]);
    const originalSongVideo = originalSongResults.data.items.map(mapYoutubeResults)[0];
    const learnSongVideos = learnResults.data.items.map(mapYoutubeResults);
    return {
      learnSongVideos,
      originalSongVideo,
    };
  } catch (error) {
    console.log(error);
  }
};

const init = async () => {
  console.log(data);
  const items = data;
  const mapped = items.map(async (item) => {
    const results = await getYoutubeSuggestions({ name: item.name, band: item.band });
    return {
      ...item,
      ...results,
    };
  });
  const resultssss = await Promise.all(mapped);
  fs.writeFileSync('./finalData2.js', JSON.stringify(resultssss));
  // const data3 = require('./finalData2');
  // console.log(data3);
};

init();
