import React from 'react';
import { View } from 'react-native';

import { YoutubeVideo } from '../graphql/types/YoutubeVideo';

type Props = {
  data: YoutubeVideo;
};

const OriginalYoutubeVideo: React.FC<Props> = ({ data }) => {
  return (
    <View>
      <a href={`https://youtube.com/watch?v=${data.id}`} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </View>
  );
};

export default OriginalYoutubeVideo;
