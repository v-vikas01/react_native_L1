import React, {useState, useEffect, useCallback} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {SizeConfig} from '../../../size';

import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../../types';

type VideoPlayerRouteParams = {
  data: string;
};

type VideoPlayerProps = StackScreenProps<RootStackParamList, 'VideoPlayer'>;

const VideoPlayer: React.FC<VideoPlayerProps> = ({route}) => {
  const {data} = route.params;
  const [loading, setLoading] = useState(false);
	
  const [shouldDisplayYoutube, setShouldDisplayYoutube] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [data]);

  useFocusEffect(
    useCallback(() => {
      setTimeout(() => {
        setShouldDisplayYoutube(true);
      }, 100);
      return () => {``
        setShouldDisplayYoutube(false);
      };
    }, []),
  );

  return (
    <>
      {shouldDisplayYoutube && (
        <YoutubePlayer
          webViewProps={{
            injectedJavaScript: `
              var element = document.getElementsByClassName('container')[0];
              element.style.position = 'unset';
              element.style.paddingBottom = 'unset';
              true;
            `,
          }}
          videoId={data}
          play={true}
          onReady={() => {
            console.log('###### ready loading video #######');
            setLoading(false);
          }}
          onError={() => {
            console.log('###### Error loading video #######');
            ToastAndroid.showWithGravityAndOffset(
              'Ops, Something went wrong! Please Try again later.',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
              25,
              50,
            );
          }}
          height={SizeConfig.height * 100}
          width={SizeConfig.width * 100}
        />
      )}
      {loading && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </>
  );
};

export default VideoPlayer;
