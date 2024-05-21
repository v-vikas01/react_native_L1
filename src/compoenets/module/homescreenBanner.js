import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import {SizeConfig} from '../../size.js';

export const SLIDER_WIDTH = SizeConfig.width * 100;
export const ITEM_WIDTH = SizeConfig.width * 100;
export const SLIDER_HEIGHT = SizeConfig.height * 40;

const SwiperHomeBanner = () => {
  const refCarousel = React.useRef(null);

  const images = [
    require('../../../assets/home/background-banner.png'),
    require('../../../assets/home/background-banner1.png'),
    require('../../../assets/home/background-banner.png'),
    require('../../../assets/home/background-banner1.png'),
  ];

  const renderItem = ({item, index}) => {
    return (
      <View>
        <Image style={styles.homeBanner} source={item} />
      </View>
    );
  };
  return (
    <Carousel
      ref={refCarousel}
      data={images}
      renderItem={renderItem}
      sliderWidth={SLIDER_WIDTH}
      itemWidth={ITEM_WIDTH}
      sliderHeight={SLIDER_HEIGHT}
      itemHeight={SLIDER_HEIGHT}
      autoplayInterval={3000}
      useScrollView={true}
      activeSlideAlignment="center"
      decelerationRate={50}
      enableMomentum={false}
      swipeThreshold={20}
      removeClippedSubviews={true}
      disableIntervalMomentum={true}
      enableSnap={true}
      useExperimentalSnap={true}
      scrollEndDragDebounceValue={0}
      autoplayDelay={100}
      lockScrollWhileSnapping={true}
      animatedFriction={4}
      animatedTension={50}
      shouldOptimizeUpdates
      loop={true}
      autoplay={true}
      lockScrollTimeoutDuration={1000}
    />
  );
};

export default SwiperHomeBanner;

const styles = StyleSheet.create({
  homeBanner: {
    width: '100%',
    height: SizeConfig.height * 40,
    resizeMode: 'contain',
    marginTop: SizeConfig.height * 2,
  },
});
