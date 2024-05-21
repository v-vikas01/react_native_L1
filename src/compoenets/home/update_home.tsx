import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  Pressable,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';
import {useNavigation} from '@react-navigation/native';
import Carousel from 'react-native-reanimated-carousel';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {SizeConfig} from '../../size';
import {
  TypeCategoryList,
  CardsData,
  SubCardsData,
  ReviewVideoData,
  imagesBanners,
  BannerList,
  CardsDataApiResponse,
  CardItem,
  BannerData,
  bannerDummyData,
} from './component/data';
import HalfScreenModal from './component/offermodel';
import {
  BuySellCarScreenNavigationProp,
  DetailScreenNavigationProp,
  VideoPlayerScreenNavigationProp,
} from '../../types';
import {styles} from './style';
import LinearGradient from 'react-native-linear-gradient';
import BannerCarsoleComponent from './component/homeBanner';
import {formatPrice} from '../reuse_component/reuse_component';

const HomeScreen: React.FC = () => {
  const navigationVideoPlyer = useNavigation<VideoPlayerScreenNavigationProp>();
  const navigationBuysellScreen =
    useNavigation<BuySellCarScreenNavigationProp>();
  const navigationDetailsScreen = useNavigation<DetailScreenNavigationProp>();
  const [modalVisible, setModalVisible] = useState(false);
  const [city, setCity] = useState<string>('mysore');
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const filteredData = bannerDummyData.filter(
      (banner: BannerData) => banner.city === city,
    );
    const images = filteredData.map((banner: BannerData) => banner.banner_img);
    setImages(images);
  }, [city]);

  const singleListData = (Data: CardsDataApiResponse): CardItem[] => {
    return Data.data.reduce(
      (acc, currentArray) => acc.concat(currentArray),
      [],
    );
  };

  const SingleListData = singleListData(CardsData);

  return (
    <View style={{flex: 1}}>
      <StatusBar animated backgroundColor="#FFFFFF" barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          scrollEventThrottle={16}
          stickyHeaderIndices={[0]}>
          <View>
            <LinearGradient
              colors={['#FFFFFF', '#E4E4FF', '#BEC5EA']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              style={styles.headerConatiner}>
              <View style={styles.appbarHome}>
                <Image
                  style={styles.logImage}
                  source={require('../../../assets/home/kalyani_logo.png')}
                />
                <Image
                  style={styles.logImage1}
                  source={require('../../../assets/home/Maruti_Suzuki.png')}
                />
              </View>
              <View style={styles.offerZone}>
                <Image
                  style={styles.offerLine}
                  source={require('../../../assets/home/offerLineRight.png')}
                />
                <Pressable
                  style={styles.offerZoneContainer}
                  onPress={() => setModalVisible(true)}>
                  <Text style={styles.offerText}>OFFER ZONE</Text>
                  <Image
                    style={styles.offericonImage}
                    source={require('../../../assets/home/offer.png')}
                  />
                </Pressable>
                <Image
                  style={[styles.offerLine]}
                  source={require('../../../assets/home/offerLineLeft.png')}
                />
              </View>

              <TouchableOpacity style={styles.searchContainer}>
                <Image
                  style={styles.searchIcon}
                  source={require('../../../assets/home/search.png')}
                />
                <TextInput
                  style={styles.searchInput}
                  editable={false}
                  selectTextOnFocus={false}
                />
              </TouchableOpacity>
            </LinearGradient>
          </View>

          <View style={styles.overlay}>
            <View style={styles.homeBannerCarsoleMainConatiner}>
              <BannerCarsoleComponent images={images} />
            </View>

            <FlatList
              data={TypeCategoryList.data}
              contentContainerStyle={styles.typeCategoryListContainer}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={({item}) => (
                <Pressable
                  style={styles.typeCategoryContainer}
                  onPress={() => {
                    navigationBuysellScreen.navigate('BuySellCars');
                  }}>
                  <View style={styles.typeCategoryCircle}>
                    <Image style={styles.categoryImage} source={item.image} />
                  </View>
                  <Text style={styles.typeSubText}>{item.title}</Text>
                </Pressable>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
            <View>
              <Image
                style={styles.longLineImag}
                source={require('../../../assets/home/fullLine.png')}></Image>
            </View>
            <View style={{marginTop: SizeConfig.height}}>
              <Carousel
                loop
                width={SizeConfig.width * 100}
                height={SizeConfig.height * 10}
                vertical={false}
                style={{
                  flex: 1,
                }}
                autoPlay={true}
                snapEnabled={true}
                data={BannerList}
                scrollAnimationDuration={1000}
                mode="parallax"
                modeConfig={{
                  parallaxScrollingScale: 0.9,
                  parallaxScrollingOffset: 50,
                  parallaxAdjacentItemScale: 0.78,
                }}
                renderItem={({index, item}) => (
                  <View style={styles.bannersImagescontainer}>
                    <Image source={item.image} style={styles.bennerLogo} />
                    <View style={styles.textBannerContainer}>
                      <Text style={styles.BannnerCardHeader}>{item.text}</Text>
                      <Text style={styles.BannnerSubCardHeader}>
                        {item.subText}
                      </Text>
                    </View>
                    <View style={styles.bannerButtonConatiner}>
                      <Text style={[styles.bannerButtonText]}>
                        {item.buttonText}{' '}
                      </Text>
                      <Text
                        style={[
                          styles.bannerButtonText,
                          {
                            paddingTop: SizeConfig.height * 0.2,
                            paddingLeft: SizeConfig.width * 1,
                          },
                        ]}>
                        {'>'}{' '}
                      </Text>
                    </View>
                  </View>
                )}
              />
            </View>
            <Text style={styles.cardsHeaderText}>Popular Cars</Text>
            <FlatList
              data={SingleListData}
              contentContainerStyle={{
                alignItems: 'center',
                paddingBottom: SizeConfig.height,
                paddingRight: SizeConfig.width * 5,
                paddingLeft: SizeConfig.width * 1,
              }}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={({item}) => (
                <Pressable
                  onPress={() => {
                    navigationDetailsScreen.navigate('DetailScreen', {
                      name: item.title,
                    });
                  }}
                  style={styles.popularCardMainContainer}>
                  <View style={styles.popularCardsContainer}>
                    <Animated.Image
                      style={styles.popularCardsImage}
                      source={{uri: item.images[0]}}
                      sharedTransitionTag={item.title}
                    />
                  </View>
                  <View style={styles.textContainer}>
                    <Text
                      style={styles.popularCardHeader}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      {item.title}
                    </Text>
                  </View>
                  <Text style={styles.popularCardPrice}>
                    {' '}
                    {formatPrice(item.ex_price)}
                  </Text>
                </Pressable>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
            <View style={styles.dividerContainerZone}>
              <Image
                style={styles.offerLine}
                source={require('../../../assets/home/line.png')}
              />
              <Text style={styles.gridCardsHeaderText}>NEXA</Text>
              <Image
                style={[styles.offerLine]}
                source={require('../../../assets/home/line.png')}
              />
            </View>
            <Text style={styles.gridSubCardsHeaderText}>CREATE . INSPIRE</Text>

            <View style={styles.subCardsMainConatiner}>
              <FlatList
                data={SubCardsData.data}
                horizontal={false}
                scrollEnabled={false}
                numColumns={3}
                renderItem={({item}) => (
                  <View style={styles.subCardsConatiner}>
                    <Image
                      style={styles.subCardsImage}
                      source={{uri: item.images[0]}}
                    />
                    <Text
                      style={styles.subCardHeader}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      {item.name}
                    </Text>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.flatListContent}
              />
            </View>
            <View style={styles.dividerContainerZone}>
              <Image
                style={styles.offerLine}
                source={require('../../../assets/home/line.png')}
              />
              <Text style={styles.gridCardsHeaderText}>ARENA</Text>
              <Image
                style={[styles.offerLine]}
                source={require('../../../assets/home/line.png')}
              />
            </View>
            <Text style={styles.gridSubCardsHeaderText}>Find Your Match</Text>

            <View style={styles.subCardsMainConatiner}>
              <FlatList
                data={SubCardsData.data}
                horizontal={false}
                scrollEnabled={false}
                numColumns={3}
                renderItem={({item}) => (
                  <View style={styles.subCardsConatiner}>
                    <Image
                      style={styles.subCardsImage}
                      source={{uri: item.images[0]}}
                    />
                    <Text
                      style={styles.subCardHeader}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      {item.name}
                    </Text>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.flatListContent}
              />
            </View>
            <View style={{paddingTop: SizeConfig.height * 0.5}}>
              <Image
                style={styles.longLineImag}
                source={require('../../../assets/home/fullLine.png')}></Image>
            </View>
            <Text style={styles.cardsHeaderText}>Recommended for You</Text>
            <FlatList
              data={SingleListData}
              contentContainerStyle={{
                alignItems: 'center',
                paddingBottom: SizeConfig.height,
                paddingRight: SizeConfig.width * 5,
                paddingLeft: SizeConfig.width * 1,
              }}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={({item}) => (
                <Pressable
                  onPress={() => {
                    navigationDetailsScreen.navigate('DetailScreen', {
                      name: item.title,
                    });
                  }}
                  style={[
                    styles.popularCardMainContainer,
                    {
                      height: SizeConfig.height * 22,
                    },
                  ]}>
                  <LinearGradient
                    colors={['#FFFFFF', '#E4E4FF', '#BEC5EA']}
                    start={{x: 0, y: 0}}
                    end={{x: 0, y: 1}}
                    style={[
                      styles.popularCardsContainer,
                      {
                        elevation: 0,
                        borderWidth: SizeConfig.width * 0.2,
                        overflow: 'hidden',
                      },
                    ]}>
                    <Animated.Image
                      style={styles.popularCardsImage}
                      source={{uri: item.images[0]}}
                      sharedTransitionTag={item.title}
                    />
                  </LinearGradient>
                  <View
                    style={[
                      styles.textContainer,
                      {
                        paddingTop: SizeConfig.height * 0.5,
                      },
                    ]}>
                    <Text
                      style={styles.popularCardHeaderTwo}
                      numberOfLines={2}
                      ellipsizeMode="tail">
                      {item.title}
                    </Text>
                  </View>
                </Pressable>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
            <Image
              style={styles.longLineImag}
              source={require('../../../assets/home/fullLine.png')}></Image>
            <Text style={styles.cardsHeaderText}>Reviews</Text>
            <FlatList
              data={ReviewVideoData}
              horizontal={true}
              scrollEnabled={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <Pressable
                  onPress={() => {
                    navigationVideoPlyer.navigate('VideoPlayer', {
                      data: 'iee2TATGMyI',
                    });
                  }}>
                  <View style={styles.reviewConatiner}>
                    <ImageBackground
                      style={styles.reviewCardsImage}
                      source={item.image}>
                      <Text style={styles.reviewCardsPlayerText}>
                        {item.text}
                      </Text>
                      <Image
                        style={styles.reviewCardsPlayerImage}
                        source={require('../../../assets/home/player.png')}></Image>
                    </ImageBackground>
                  </View>
                </Pressable>
              )}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={{
                paddingRight: SizeConfig.width * 5,
              }}
            />
            <View style={{paddingTop: SizeConfig.height * 2}}>
              <Image
                style={styles.longLineImag}
                source={require('../../../assets/home/fullLine.png')}></Image>
            </View>
            <Text style={styles.cardsHeaderText}>Begin your Nexa Journey</Text>
            <FlatList
              data={SingleListData}
              contentContainerStyle={{
                alignItems: 'center',
                paddingBottom: SizeConfig.height,
                paddingRight: SizeConfig.width * 5,
                paddingLeft: SizeConfig.width * 1,
              }}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={({item}) => (
                <Pressable
                  onPress={() => {
                    navigationDetailsScreen.navigate('DetailScreen', {
                      name: item.title,
                    });
                  }}
                  style={[
                    styles.popularCardMainContainer,
                    {height: SizeConfig.height * 26},
                  ]}>
                  <View style={[styles.popularCardsContainer, {elevation: 0}]}>
                    <Animated.Image
                      style={styles.popularCardsImage}
                      source={{uri: item.images[0]}}
                      sharedTransitionTag={item.title}
                    />
                  </View>
                  <View style={styles.textContainer}>
                    <Text
                      style={styles.popularCardHeader}
                      numberOfLines={2}
                      ellipsizeMode="tail">
                      {item.title}
                    </Text>
                  </View>
                  <View style={styles.popularCardContainer}>
                    <Text style={styles.popularCardPrice}>
                      {' '}
                      {formatPrice(item.ex_price)}
                    </Text>
                    <Text style={styles.popularExPrice}>Ex-Showroom</Text>
                  </View>
                </Pressable>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </ScrollView>
        <HalfScreenModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          images={images}
        />
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
