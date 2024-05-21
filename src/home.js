import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  Animated,
  Pressable,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SizeConfig} from './size';
import HalfScreenModal from './compoenets/module/top-view-module';
import {BlurView} from '@react-native-community/blur';
import YoutubePlayer from 'react-native-youtube-iframe';
import {useNavigation} from '@react-navigation/native';
import Carousel from 'react-native-reanimated-carousel';
import {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import SwiperHomeBanner from './compoenets/module/homescreenBanner';

const Home = () => {
  const navigation = useNavigation();
  const CategoryList = ['Arena', 'Nexa', 'Arena', 'nexa4', 'nexa5', 'nexa6'];
  const scrollX = useSharedValue(0);
  const onScrollHandler = useAnimatedScrollHandler(event => {
    scrollX.value = event.contentOffset.x;
  });

  const TypeCategoryList = [
    {
      image: require('../assets/home/cat-type4.png'),
      text: 'Explore Now',
      subText: 'Browse \nCars',
    },
    {
      image: require('../assets/home/cat-type3.png'),
      text: 'Schedule',
      subText: 'Book \nService',
    },
    {
      image: require('../assets/home/cat-type2.png'),
      text: 'Payments',
      subText: 'Pay & Earn \nRewards',
    },
    {
      image: require('../assets/home/cat-type1.png'),
      text: 'True Value',
      subText: 'Buy/Sell \nCars',
    },
  ];

  const CardsData = [
    {
      id: '1',
      image: require('../assets/home/card/car1.png'),
      text: 'Fronx Alpha MT',
      subText: 'Ex-Showroom Price',
      price: '₹ 7,99,500',
    },
    {
      id: '2',
      image: require('../assets/home/card/car2.png'),
      text: 'Invicto Alpha 6MT',
      subText: 'Ex-Showroom Price',
      price: '₹ 24,83,500',
    },
    {
      id: '3',
      image: require('../assets/home/card/car1.png'),
      text: 'Fronx Alpha MT',
      subText: 'Ex-Showroom Price',
      price: '₹ 7,99,500',
    },
    {
      id: '4',
      image: require('../assets/home/card/car2.png'),
      text: 'Invicto Alpha 6MT',
      subText: 'Ex-Showroom Price',
      price: '₹ 24,83,500',
    },
  ];
  const SubCardsData = [
    {
      image: require('../assets/home/card/car1.png'),
      text: 'Fronx',
    },
    {
      image: require('../assets/home/card/car2.png'),
      text: 'Nexa',
    },
    {
      image: require('../assets/home/card/car1.png'),
      text: 'Fronx',
    },
    {
      image: require('../assets/home/card/car2.png'),
      text: 'Nexa',
    },
    {
      image: require('../assets/home/card/car1.png'),
      text: 'Fronx',
    },
    {
      image: require('../assets/home/card/car2.png'),
      text: 'Nexa',
    },
    {
      image: require('../assets/home/card/car1.png'),
      text: 'Fronx',
    },
  ];

  const ReviewVideoData = [
    {
      image: require('../assets/home/video1.png'),
      text: 'Maruti Suzuki Jimny',
    },
    {
      image: require('../assets/home/video2.png'),
      text: 'Grand Vitara',
    },
    {
      image: require('../assets/home/video1.png'),
      text: 'Maruti Suzuki Jimny',
    },
    {
      image: require('../assets/home/video2.png'),
      text: 'Grand Vitara',
    },
    {
      image: require('../assets/home/video1.png'),
      text: 'Maruti Suzuki Jimny',
    },
  ];
  const [modalVisible, setModalVisible] = useState(false);
  const images = [
    require('../assets/home/background-banner.png'),
    require('../assets/home/background-banner1.png'),
    require('../assets/home/background-banner.png'),
    require('../assets/home/background-banner1.png'),
  ];

  return (
    <View style={{flex: 1}}>
      <StatusBar animated backgroundColor="#E8E8FF" barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: '#E8E8FF'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.appbarHome}>
              <Image
                style={styles.logImage}
                source={require('../assets/home/kalyani_logo.png')}
              />
              <Image
                style={styles.logImage1}
                source={require('../assets/home/Maruti_Suzuki.png')}
              />
            </View>
            <Pressable onPress={() => setModalVisible(true)}>
              <Text style={styles.offerText}>OFFER ZONE</Text>
              <View style={styles.iconImageContainer}>
                <Image
                  style={styles.iconImage}
                  source={require('../assets/home/Union.png')}
                />
              </View>
            </Pressable>

            <View style={styles.overlay}>
              <Carousel
                loop
                width={SizeConfig.width * 100}
                // panGestureHandlerProps={{
                //   activeOffsetX: [-10, 10],
                // }}
                enabled={true}
                layout={'default'}
                horizontal={true}
                vertical={false}
                snapEnabled={true}
                data={images}
                // onScroll={onScrollHandler}
                style={{
                  height: SizeConfig.height * 45,
                }}
                autoPlay={true}
                scrollAnimationDuration={1000}
                renderItem={({index, item}) => (
                  <View>
                    <Image style={styles.homeBanner} source={item} />
                  </View>
                )}
              />
              {/* <SwiperHomeBanner></SwiperHomeBanner> */}
              <View style={styles.Imagescontainer}>
                <Image
                  style={styles.leftImage}
                  source={require('../assets/home/search_bg.png')}
                />
                <Image
                  style={styles.rightImage}
                  source={require('../assets/home/search_bg.png')}
                />
              </View>

              {/* <Image
              style={styles.seachBackground}
              source={require('../assets/home/serach_bg.png')}></Image> */}
              <View style={styles.searchContainer}>
                <TouchableOpacity style={styles.searchIconContainer}>
                  <Image
                    style={styles.searchIcon}
                    source={require('../assets/home/search.png')}
                  />
                </TouchableOpacity>
                <TextInput
                  style={styles.searchInput}
                  editable={false}
                  selectTextOnFocus={false}
                />
              </View>

              <View style={styles.categoryListContainer}>
                <FlatList
                  data={CategoryList}
                  contentContainerStyle={{paddingRight: SizeConfig.width * 3}}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  renderItem={({item}) => (
                    <View style={styles.categoryCard}>
                      <Text style={styles.categoryText}>{item}</Text>
                    </View>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
            </View>

            <View style={styles.bodyContainer}>
              <FlatList
                data={TypeCategoryList}
                contentContainerStyle={styles.typeCategoryListContainer}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={({item}) => (
                  <View style={styles.typeCategoryContainer}>
                    <View style={styles.typeCategoryCircle}>
                      <Image style={styles.categoryImage} source={item.image} />
                      <Text style={styles.typeCategoryButton}>{item.text}</Text>
                    </View>
                    <Text style={styles.typeSubText}>{item.subText}</Text>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
              <Text style={styles.cardsHeaderText}>Our Popular Cars</Text>
              <FlatList
                data={CardsData}
                contentContainerStyle={{
                  alignItems: 'center',
                  paddingBottom: SizeConfig.height,
                  paddingRight: SizeConfig.width * 5,
                }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={({item, index}) => (
                  <Animated.View sharedTransitionTag={item.id}>
                    <Pressable
                      onPress={() => {
                        {
                          navigation.navigate('ProductDetailScreen', {
                            id: item.id,
                          });
                        }
                      }}>
                      <View style={styles.popularCardsConatiner}>
                        <Text
                          style={styles.popularCardHeader}
                          numberOfLines={1}
                          ellipsizeMode="tail">
                          {item.text}
                        </Text>
                        <Image
                          style={styles.popularCardsImage}
                          source={item.image}></Image>
                        <Text style={styles.popularCardPrice}>
                          {item.price}
                        </Text>
                        <Text style={styles.popularCardSubHeader}>
                          {item.subText}
                        </Text>
                      </View>
                    </Pressable>
                  </Animated.View>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
              <Text style={styles.cardsHeaderText}>Nexa</Text>
              <View style={styles.subCardsMainConatiner}>
                <FlatList
                  data={SubCardsData}
                  horizontal={false}
                  scrollEnabled={false}
                  numColumns={3}
                  renderItem={({item}) => (
                    <View style={styles.subCardsConatiner}>
                      <Text
                        style={styles.subCardHeader}
                        numberOfLines={1}
                        ellipsizeMode="tail">
                        {item.text}
                      </Text>
                      <Image style={styles.subCardsImage} source={item.image} />
                    </View>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                  contentContainerStyle={styles.flatListContent}
                />
              </View>
              <Text style={styles.cardsHeaderText}>Reviews</Text>
              <FlatList
                data={ReviewVideoData}
                horizontal={true}
                scrollEnabled={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <Pressable
                    onPress={() => {
                      {
                        navigation.navigate('VideoPlayer', {
                          hideBottomBar: false,
                          data: 'iee2TATGMyI',
                        });
                      }
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
                          source={require('../assets/home/player.png')}></Image>
                      </ImageBackground>
                    </View>
                  </Pressable>
                )}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{
                  paddingRight: SizeConfig.width * 5,
                }}
              />
            </View>
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
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appbarHome: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SizeConfig.width * 3,
    paddingTop: SizeConfig.height * 1.5,
  },
  logImage: {
    width: SizeConfig.width * 25,
    resizeMode: 'contain',
    height: SizeConfig.height * 6,
  },
  logImage1: {
    width: SizeConfig.width * 33,
    resizeMode: 'contain',
    height: SizeConfig.height * 6,
  },
  iconImageContainer: {
    alignItems: 'center',
  },
  iconImage: {
    width: SizeConfig.width * 4,
    resizeMode: 'contain',
  },
  offerText: {
    fontSize: SizeConfig.width * 4,
    color: '#1E1E1E',
    fontFamily: 'Outfit-Medium',
    fontWeight: '900',
    textAlign: 'center',
  },
  overlay: {
    position: 'relative',
  },
  mainSearchBackground: {
    position: 'absolute',
    top: 0,
    backgroundColor: '#E8E8FF',
    width: SizeConfig.deviceWidth,
    zIndex: 1,
    height: SizeConfig.height * 8,
  },
  seachBackground: {
    position: 'absolute',
    top: 8,
    // backgroundColor: '#E8E8FF',
    width: SizeConfig.width * 50,
    zIndex: 1,
    height: SizeConfig.height * 8,
    // shadowColor: 'red',
    // shadowOffset: {width: 1, height: 5},
    // shadowOpacity: 10,
    // shadowRadius: 3,
    // elevation: 100,
    // overflow: 'hidden',
  },

  Imagescontainer: {
    position: 'absolute',
    top: -5,
    flexDirection: 'row',
  },
  leftImage: {
    width: SizeConfig.width * 50,
    resizeMode: 'cover',
    height: SizeConfig.height * 10,
  },
  rightImage: {
    width: SizeConfig.width * 50,
    resizeMode: 'cover',
    height: SizeConfig.height * 10,
  },
  searchContainer: {
    position: 'absolute',
    top: 0,
    left: SizeConfig.width * 3,
    right: SizeConfig.width * 3,
    zIndex: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: SizeConfig.width * 4,
    paddingHorizontal: SizeConfig.width * 3,
    borderColor: '#CACBCC',
    borderWidth: SizeConfig.width * 0.3,
    height: SizeConfig.height * 6.8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: SizeConfig.height * 1,
    fontSize: SizeConfig.width * 4,
    color: '#1E1E1E',
  },
  searchIconContainer: {
    padding: SizeConfig.width * 2,
  },
  searchIcon: {
    width: SizeConfig.width * 4.2,
    height: SizeConfig.width * 4.2,
    resizeMode: 'contain',
  },
  homeBanner: {
    width: '100%',
    height: SizeConfig.height * 44,
    resizeMode: 'contain',
    marginTop: SizeConfig.height * 2,
  },
  categoryListContainer: {
    // paddingHorizontal: SizeConfig.width * 3,
    // marginTop: SizeConfig.height * 0,
    alignItems: 'center',
    position: 'relative',
    top: SizeConfig.height * -13,
  },
  categoryCard: {
    paddingVertical: SizeConfig.height * 1.2,
    borderRadius: SizeConfig.width * 3.5,
    backgroundColor: 'white',
    paddingHorizontal: SizeConfig.width * 4.5,
    marginVertical: SizeConfig.height * 1,
    marginRight: SizeConfig.width * 0.5,
    marginLeft: SizeConfig.width * 2.8,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 2,
    textAlign: 'center',
  },
  categoryText: {
    fontSize: SizeConfig.width * 4.2,
    color: '#4C4C4C',
    fontFamily: 'Outfit-Bold',
    fontWeight: '800',
    textAlign: 'center',
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: SizeConfig.width * 6,
    borderTopLeftRadius: SizeConfig.width * 6,
    paddingVertical: SizeConfig.height * 4,
    // paddingHorizontal: SizeConfig.width * 3.2,

    marginTop: -SizeConfig.height * 13,
    zIndex: 0,
  },
  typeCategoryListContainer: {
    alignItems: 'center',
    paddingRight: SizeConfig.width * 3,
  },
  typeCategoryContainer: {
    alignItems: 'center',
  },
  typeCategoryCircle: {
    alignItems: 'center',
    justifyContent: 'start',
    width: SizeConfig.width * 22,
    height: SizeConfig.width * 22,
    borderRadius: SizeConfig.width * 11,
    backgroundColor: '#ECECEC',
    marginLeft: SizeConfig.width * 9,
    paddingTop: SizeConfig.height * 1,
    marginRight: SizeConfig.width * 0.2,
  },
  categoryImage: {
    width: SizeConfig.width * 10,
    height: SizeConfig.width * 10,
    resizeMode: 'contain',
  },
  typeCategoryButton: {
    position: 'absolute',
    bottom: SizeConfig.width * 2.5,
    left: SizeConfig.width * -3,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    paddingVertical: SizeConfig.height * 0.8,
    paddingHorizontal: SizeConfig.width * 2,
    width: SizeConfig.width * 22,
    backgroundColor: '#706FC2',
    borderRadius: SizeConfig.width * 3,
    overflow: 'hidden',
    color: '#FFFFFF',
    fontFamily: 'Outfit-SemiBold',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: SizeConfig.width * 3,
  },
  typeSubText: {
    color: '#000000',
    fontFamily: 'Outfit-SemiBold',
    fontWeight: '900',
    textAlign: 'center',
    fontSize: SizeConfig.width * 3.4,
    marginTop: SizeConfig.height,
    right: SizeConfig.width * -4,
  },
  cardsHeaderText: {
    color: '#000000',
    fontFamily: 'Outfit-SemiBold',
    fontWeight: '700',
    fontSize: SizeConfig.width * 5,
    paddingHorizontal: SizeConfig.width * 6,
    paddingTop: SizeConfig.height * 2.5,
    paddingBottom: SizeConfig.height * 2,
  },

  popularCardsConatiner: {
    borderRadius: SizeConfig.width * 6,
    paddingVertical: SizeConfig.height * 2,
    paddingHorizontal: SizeConfig.width * 5,
    borderColor: '#E7E7E7',
    borderWidth: SizeConfig.width * 0.4,
    width: SizeConfig.width * 50,
    marginLeft: SizeConfig.width * 3.5,
    marginRight: SizeConfig.width * 1,
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 1,
  },
  popularCardsImage: {
    objectFit: 'contain',
    height: SizeConfig.height * 15,
    width: '100%',
  },
  popularCardHeader: {
    color: '#000073',
    fontFamily: 'Outfit-Bold',
    fontWeight: '900',
    fontSize: SizeConfig.width * 5,
  },
  popularCardSubHeader: {
    color: '#000000',
    fontFamily: 'Outfit-SemiBold',
    fontWeight: '700',
    fontSize: SizeConfig.width * 3.5,
    paddingTop: SizeConfig.height * 0.5,
  },
  popularCardPrice: {
    color: '#000000',
    fontFamily: 'Outfit-Bold',
    fontWeight: '700',
    fontSize: SizeConfig.width * 5.5,
  },
  subCardsMainConatiner: {
    flex: 1,
    paddingLeft: SizeConfig.width * 3,
    paddingRight: SizeConfig.width * 3,
    justifyContent: 'space-between',
    paddingVertical: SizeConfig.height * 0.5,
  },

  subCardsConatiner: {
    borderRadius: SizeConfig.width * 6,
    paddingVertical: SizeConfig.height * 1,
    paddingHorizontal: SizeConfig.width * 5,
    borderColor: '#E7E7E7',
    borderWidth: SizeConfig.width * 0.4,
    alignItems: 'center',
    backgroundColor: 'white',
    width: '31.33%',
    marginBottom: SizeConfig.width * 1,
    marginRight: SizeConfig.width * 1.5,
    marginLeft: SizeConfig.width * 0.5,
    marginBottom: SizeConfig.width * 2,
  },
  subCardHeader: {
    color: '#000000',
    fontFamily: 'Outfit-Bold',
    fontWeight: '900',
    fontSize: SizeConfig.width * 4.5,
    textAlign: 'center',
  },
  subCardsImage: {
    resizeMode: 'contain',
    height: SizeConfig.height * 10,
    width: '100%',
  },
  flatListContent: {
    justifyContent: 'space-between',
  },
  reviewConatiner: {
    borderRadius: SizeConfig.width * 6,
    width: SizeConfig.width * 80,
    height: SizeConfig.height * 22,
    marginLeft: SizeConfig.width * 5,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  reviewCardsImage: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reviewCardsPlayerImage: {
    resizeMode: 'contain',
    width: SizeConfig.width * 40,
    alignSelf: 'center',
  },
  reviewCardsPlayerText: {
    color: '#FFFFFF',
    fontFamily: 'Outfit-Bold',
    fontWeight: '900',
    fontSize: SizeConfig.width * 4,
    textAlign: 'left',
    position: 'absolute',
    top: SizeConfig.height * 1.6,
    left: SizeConfig.width * 4,
  },
});
