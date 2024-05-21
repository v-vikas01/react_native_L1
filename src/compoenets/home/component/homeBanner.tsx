import React, {useRef, useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {SizeConfig} from '../../../size';
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';
import {styles} from '../style';
import SwiperFlatList from 'react-native-swiper-flatlist';

const BannerCarsoleComponent = ({images}: {images: any[]}) => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleProgressChange = (
    offsetProgress: number,
    absoluteProgress: number,
  ) => {
    const newIndex = Math.floor(absoluteProgress);
    setActiveIndex(newIndex);
  };

  return (
    <View>
      {/* <Carousel
        ref={carouselRef}
        loop
        width={SizeConfig.width * 100}
        pagingEnabled
        vertical={false}
        style={styles.homeBannerCarsole}
        autoPlay={true}
        data={images}
        // scrollAnimationDuration={10}
        // onProgressChange={handleProgressChange}
        // onSnapToItem={index => setActiveIndex(index)}
        onProgressChange={(_, absoluteProgress) => {
          // handleIndex(Math.round(absoluteProgress));
          setActiveIndex(Math.round(absoluteProgress));
          console.log(absoluteProgress);
          console.log(activeIndex);
        }}
        renderItem={({index, item}) => (
          <View style={styles.homeBannerContainer}>
            <Image style={styles.homeBanner} source={item} />
          </View>
        )}
      /> */}
      {/* <Pagination activeIndex={activeIndex} totalSlides={images.length} /> */}
      {/* <View
        style={{
          alignItems: 'center',
          marginVertical: SizeConfig.height * 1,
        }}>
        <AnimatedDotsCarousel
          length={images.length}
          currentIndex={activeIndex}
          maxIndicators={10}
          interpolateOpacityAndColor={true}
          activeIndicatorConfig={{
            color: '#C2C1FF',
            margin: SizeConfig.width * 1,
            opacity: 1,
            size: SizeConfig.width * 2,
          }}
          inactiveIndicatorConfig={{
            color: '#98989A',
            margin: SizeConfig.width * 1,
            opacity: 0.5,
            size: SizeConfig.width * 1.5,
          }}
          decreasingDots={[
            {
              config: {
                color: '#98989A',
                margin: SizeConfig.width * 1,
                opacity: 0.5,
                size: SizeConfig.width * 2,
              },
              quantity: 1,
            },
            {
              config: {
                color: '#98989A',
                margin: SizeConfig.width * 1,
                opacity: 0.5,
                size: SizeConfig.width * 2,
              },
              quantity: 1,
            },
          ]}
        />
      </View> */}
      <View style={styles.homeBannerCarsole}>
        <SwiperFlatList
          autoplay
          autoplayDelay={3}
          autoplayLoop
          // index={2}
          showPagination
          data={images}
          paginationActiveColor="#D7D7EE"
          paginationDefaultColor="#98989A"
          autoplayLoopKeepAnimation={true}
          renderItem={({index, item}) => (
            <View style={styles.homeBannerCarsole}>
              <Image style={styles.homeBanner} source={item} />
            </View>
          )}
          paginationStyle={{
            bottom: -30,
            alignContent: 'center',
            alignItems: 'center',
          }}
          paginationStyleItemActive={{
            width: SizeConfig.width * 2.5,
            height: SizeConfig.width * 2.5,
            borderRadius: SizeConfig.width * 2.5,
            marginHorizontal: SizeConfig.width,
          }}
          paginationStyleItemInactive={{
            width: SizeConfig.width * 1.5,
            height: SizeConfig.width * 1.5,
            borderRadius: SizeConfig.width * 1.5,
            marginHorizontal: SizeConfig.width,
          }}
        />
      </View>
    </View>
  );
};

export default BannerCarsoleComponent;
