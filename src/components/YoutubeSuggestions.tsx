import React from 'react';
import { View } from 'react-native';

import { YoutubeVideo } from '../graphql/types/YoutubeVideo';

type Props = {
  data: [YoutubeVideo];
};

const YoutubeSuggestions: React.FC<Props> = ({ data }) => {
  return (
    <View>
      {data.map((item) => (
        <a href={`https://youtube.com/watch?v=${item.id}`} target="_blank" rel="noreferrer" key={item.id}>
          {item.title}
        </a>
      ))}
    </View>
  );
};

export default YoutubeSuggestions;
