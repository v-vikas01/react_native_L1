import {View, StyleSheet, Image, Animated, Pressable} from 'react-native';
import React, {useState} from 'react';
import {SizeConfig} from '../../size';
import {ExpandingDot} from 'react-native-animated-pagination-dots';
import ImageModal from './preview_img_model';

const SwiperConatiner = ({images}) => {
  const [imageModal, setImageModal] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  let flatListRef = React.useRef(null);
  const keyExtractor = React.useCallback((_, index) => index.toString(), []);
  const onViewRef = React.useRef(({viewableItems}) => {
    setSlideNumber(viewableItems[0].index);
  });
  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 40});

  return (
    <View
      style={{
        width: SizeConfig.width * 100,
        height: SizeConfig.height * 33.5,
        marginTop: SizeConfig.height * 1.5,
        marginBottom: SizeConfig.height * 0.2,
      }}>
      <Animated.FlatList
        ref={flatListRef}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        keyExtractor={keyExtractor}
        data={images}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        pagingEnabled
        horizontal
        decelerationRate={'normal'}
        scrollEventThrottle={16}
        initialScrollIndex={0}
        onScrollToIndexFailed={info => {
          const wait = new Promise(resolve => setTimeout(resolve, 500));
          wait.then(() => {
            flatListRef.current.scrollToIndex({
              index: info.index,
              animated: true,
            });
          });
        }}
        renderItem={({item}) => {
          return (
            <Pressable
              onPress={() => {
                {
                  setImageModal(true);
                }
              }}
              style={{
                width: SizeConfig.width * 100,
                height: SizeConfig.height * 30,
              }}>
              <Image style={styles.productImages} source={item} />
            </Pressable>
          );
        }}
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
        containerStyle={{
          position: 'absolute',
          bottom: SizeConfig.height * 1,
        }}
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
  productImages: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
});
