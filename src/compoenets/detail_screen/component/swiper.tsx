import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Animated as RNAnimated,
  Pressable,
  FlatList,
  ImageBackground,
} from 'react-native';

import {ExpandingDot} from 'react-native-animated-pagination-dots';

import {SizeConfig} from '../../../size';
import ImageModal from './image_preview';
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
  SharedTransition,
  useAnimatedScrollHandler,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

interface Props {
  images: any[];
  name: any;
}

const SwiperConatiner: React.FC<Props> = ({images, name}) => {
  const [imageModal, setImageModal] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const scrollX = useRef(new RNAnimated.Value(0)).current;
  const flatListRef = useRef<FlatList>(null);

  const keyExtractor = (_item: any, index: number) => index.toString();

  const onViewRef = useRef(({viewableItems}: {viewableItems: any[]}) => {
    setSlideNumber(viewableItems[0].index);
  });

  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 40});
  console.log(images);

  return (
    <View style={styles.container}>
      <RNAnimated.FlatList
        ref={flatListRef}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        keyExtractor={keyExtractor}
        data={images}
        showsHorizontalScrollIndicator={false}
        onScroll={RNAnimated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        pagingEnabled
        horizontal
        decelerationRate="normal"
        scrollEventThrottle={16}
        initialScrollIndex={0}
        onScrollToIndexFailed={info => {
          const wait = new Promise(resolve => setTimeout(resolve, 500));
          wait.then(() => {
            flatListRef.current?.scrollToIndex({
              index: info.index,
              animated: true,
            });
          });
        }}
        renderItem={({item}) => (
          <Pressable
            onPress={() => setImageModal(true)}
            style={styles.imageContainer}>
            <Animated.View style={styles.productImages}>
              <ImageBackground style={styles.Images} source={{uri: item}} />
            </Animated.View>
          </Pressable>
        )}
      />

      <ExpandingDot
        data={images}
        expandingDotWidth={30}
        scrollX={scrollX}
        inActiveDotOpacity={0.9}
        inActiveDotColor="#D7D7D7"
        activeDotColor={'#BABABA'}
        dotStyle={{
          width: 7,
          height: 7,
          backgroundColor: '#B3B3B3',
          borderRadius: 5,
          marginHorizontal: 5,
        }}
        containerStyle={styles.dotContainer}
      />
      <ImageModal
        isVisible={imageModal}
        data={images}
        indexNumber={slideNumber}
        onHide={() => setImageModal(false)}
      />
    </View>
  );
};

export default SwiperConatiner;

const styles = StyleSheet.create({
  container: {
    width: SizeConfig.width * 100,
    height: SizeConfig.height * 33.5,
    marginTop: SizeConfig.height * 1.5,
    marginBottom: SizeConfig.height * 0.2,
  },
  imageContainer: {
    width: SizeConfig.width * 100,
    height: SizeConfig.height * 30,

    alignItems: 'center',
  },
  productImages: {
    width: SizeConfig.width * 90,
    height: '100%',
  },
  Images: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    borderRadius: SizeConfig.width * 4,
    overflow: 'hidden',
  },
  dotContainer: {
    position: 'absolute',
    bottom: SizeConfig.height * 1,
  },
});
