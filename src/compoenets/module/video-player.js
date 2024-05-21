import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Text,
  ToastAndroid,
  View,
} from 'react-native';

import {useState} from 'react';
import {useEffect} from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import {useCallback} from 'react';
import {SizeConfig} from '../../size';
const VideoPlayer = ({route}) => {
  const data = route.params.data;
  const [loading, setLoading] = useState(false);
  // const [shouldDisplayYoutube, setShouldDisplayYoutube] = useState(false);

  // useEffect(() => {
  //   setLoading(false);
  // }, [data]);

  // useFocusEffect(
  //   useCallback(() => {
  //     setTimeout(() => {
  //       setShouldDisplayYoutube(true);
  //     }, 100);
  //     return () => {
  //       setShouldDisplayYoutube(false);
  //     };
  //   }, []),
  // );
  // console.log(shouldDisplayYoutube);
  return (
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
  );
};

export default VideoPlayer;
