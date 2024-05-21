import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
  Animated,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SizeConfig} from '../../size';
import {useNavigation} from '@react-navigation/native';
import SwiperConatiner from './swiper';
import {FadeInUp, SharedTransition, withSpring} from 'react-native-reanimated';
import CustomButton from './button_component';
import TruncatedText from './truncated_text_component';
import TruncatedTextComponent from './truncated_text_component';
import SpecificationsCard from './specification_card';
import CardModal from './variants_model';
import BottomModalSheet from './variants_model';

const ProductDetailScreen = ({route}) => {
  const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);

  const closeModal = () => setIsModalVisible(false);

  // const handleSelectCard = card => {
  //   setSelectedCard(card);
  //   closeModal();
  //   // You can perform any action upon selecting a card
  // };
  const id = route.params ?? '';
  console.log(route.params);

  const images = [
    require('../../../assets/product_details/car1.png'),
    require('../../../assets/product_details/car2.png'),
    require('../../../assets/product_details/car1.png'),
    require('../../../assets/product_details/car2.png'),
    require('../../../assets/product_details/car1.png'),
    require('../../../assets/product_details/car2.png'),
    require('../../../assets/product_details/car1.png'),
    require('../../../assets/product_details/car2.png'),
  ];
  const ColorsCarsCardsData = [
    {
      image: require('../../../assets/product_details/variation1.png'),
      id: 1,
    },
    {
      image: require('../../../assets/product_details/variation2.png'),
      id: 2,
    },
    {
      image: require('../../../assets/product_details/variation3.png'),
      id: 3,
    },
    {
      image: require('../../../assets/product_details/variation1.png'),
      id: 4,
    },
    {
      image: require('../../../assets/product_details/variation3.png'),
      id: 5,
    },
    {
      image: require('../../../assets/product_details/variation2.png'),
      id: 6,
    },
  ];
  const customTransition = SharedTransition.custom(values => {
    'worklet';
    return {
      height: withSpring(values.targetHeight),
      width: withSpring(values.targetWidth),
      originX: withSpring(values.targetOriginX),
      originY: withSpring(values.targetOriginY),
    };
  });

  const SpecificationData = [
    {
      id: 1,
      type: 'Engine Capacity',
      value: '1.2L',
    },
    {
      id: 2,
      type: 'Max Power',
      value: '78.8KW @6000 rpm',
    },
    {
      id: 3,
      type: 'Max Torque',
      value: '113@4400',
    },
    {
      id: 4,
      type: 'Gross Vehicle Weight',
      value: '1450 Kg',
    },
    {
      id: 5,
      type: 'Fuel type',
      value: 'Petrol',
    },
    {
      id: 6,
      type: 'Max Torque',
      value: '113@4400',
    },
    {
      id: 7,
      type: 'Gross Vehicle Weight',
      value: '1450 Kg',
    },
  ];

  const CardsData = [
    {
      id: '1',
      image: require('../../../assets/home/card/car1.png'),
      text: 'Fronx Alpha MT',
      subText: 'Ex-Showroom Price',
      price: '₹ 7,99,500',
    },
    {
      id: '2',
      image: require('../../../assets/home/card/car2.png'),
      text: 'Invicto Alpha 6MT',
      subText: 'Ex-Showroom Price',
      price: '₹ 24,83,500',
    },
    {
      id: '3',
      image: require('../../../assets/home/card/car1.png'),
      text: 'Fronx Alpha MT',
      subText: 'Ex-Showroom Price',
      price: '₹ 7,99,500',
    },
    {
      id: '4',
      image: require('../../../assets/home/card/car2.png'),
      text: 'Invicto Alpha 6MT',
      subText: 'Ex-Showroom Price',
      price: '₹ 24,83,500',
    },
  ];

  useEffect(() => {
    if (ColorsCarsCardsData.length > 0) {
      setSelectedId(ColorsCarsCardsData[0].id);
    }
  }, []);

  const handleImagePress = id => {
    setSelectedId(id);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => handleImagePress(item.id)}>
        <View style={[selectedId === item.id && styles.selectedCircle]}>
          <View style={styles.circle}>
            <Image style={styles.image} source={item.image} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View style={{flex: 1}}>
        <StatusBar
          backgroundColor={'#F2F2F2'}
          animated
          barStyle="dark-content"></StatusBar>
        <SafeAreaView style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{paddingHorizontal: SizeConfig.width * 4}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <Image
                  style={styles.arrow_back}
                  source={require('../../../assets/product_details/arrow_back.png')}></Image>
              </TouchableOpacity>
              <Text
                style={styles.header}
                numberOfLines={1}
                ellipsizeMode="tail">
                FRONX TURBO SMART HYBRID ALPHA 1L 6AT ESP - DUAL TONE
              </Text>
              <Text style={styles.subheader}>Nexa Blue (Celestial)</Text>
            </View>
            <SwiperConatiner images={images} />
            <Animated.View
              style={{
                width: SizeConfig.width * 100,
              }}
              // entering={FadeInUp.duration(400).delay(600)}
              sharedTransitionStyle={customTransition}
              sharedTransitionTag={id}>
              <Text style={styles.bodyHeader}>Variants </Text>
              <Pressable style={styles.variationConatiner} onPress={openModal}>
                <Text
                  style={styles.variationText}
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  FRONX TURBO SMART HYBRID ALPHA 1L 6AT ESP - DUAL TONE
                </Text>
                <Image
                  style={styles.drop_down_img}
                  source={require('../../../assets/product_details/drop_down.png')}></Image>
              </Pressable>
              <FlatList
                data={ColorsCarsCardsData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                scrollEnabled={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  paddingHorizontal: SizeConfig.width * 5,
                }}
              />
              <View style={styles.priceContainer}>
                <View>
                  <Text style={styles.PriceText}>₹11,95,500</Text>
                  <Text style={styles.PriceSubText}>Ex-Showroom Price</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Pressable style={styles.calculaterConatiner}>
                    <Image
                      style={styles.calculaterImg}
                      source={require('../../../assets/product_details/emi.png')}></Image>
                    <Text style={styles.calculaterText}>Enquire</Text>
                  </Pressable>
                  <Pressable
                    style={[
                      styles.calculaterConatiner,
                      {marginLeft: SizeConfig.width * 4},
                    ]}>
                    <Image
                      style={styles.calculaterImg}
                      source={require('../../../assets/product_details/cal.png')}></Image>
                    <Text style={styles.calculaterText}>EMI</Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.buttonConatiner}>
                <CustomButton
                  color="#A5A5A5"
                  text="Wishlist"
                  onPress={() => console.log()}
                />
                <View style={{marginHorizontal: SizeConfig.width * 1.5}}></View>
                <CustomButton
                  color="#6060EF"
                  text="Book Now"
                  onPress={() => console.log()}
                />
              </View>
              <View style={styles.truncatedTextConatiner}>
                <TruncatedTextComponent
                  text="freestar freestar What is Lorem Ipsum? Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It
          was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum"
                />
              </View>
              <Text style={styles.bodyHeader}>Specifications </Text>
              <View style={styles.specificationsConatiner}>
                <SpecificationsCard specifications={SpecificationData} />
              </View>
            </Animated.View>
          </ScrollView>
        </SafeAreaView>
      </View>
      <BottomModalSheet
        isVisible={isModalVisible}
        onHide={closeModal}
        cardsData={CardsData}
      />
    </>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    paddingTop: SizeConfig.width * 2.5,
  },
  arrow_back: {
    objectFit: 'contain',
    width: SizeConfig.width * 6,
    height: SizeConfig.height * 6,
  },
  drop_down_img: {
    objectFit: 'contain',
    width: SizeConfig.width * 6,
    height: SizeConfig.height * 3,
  },
  header: {
    fontSize: SizeConfig.width * 4.8,
    color: '#1E1E1E',
    fontFamily: 'Outfit-Bold',
    fontWeight: '900',
    textAlign: 'center',
    paddingTop: SizeConfig.width,
  },
  subheader: {
    fontSize: SizeConfig.width * 3.8,
    color: '#1E1E1E',
    fontFamily: 'Outfit-SemiBold',
    fontWeight: '900',
    textAlign: 'center',
    paddingTop: SizeConfig.width,
  },
  productImages: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  bodyHeader: {
    color: '#000000',
    fontFamily: 'Outfit-Bold',
    fontWeight: '800',
    fontSize: SizeConfig.width * 4.8,
    paddingHorizontal: SizeConfig.width * 6.8,
  },
  variationConatiner: {
    marginHorizontal: SizeConfig.width * 4,
    borderColor: '#DBDBDB',
    borderWidth: SizeConfig.width * 0.35,
    paddingVertical: SizeConfig.height * 1.8,
    paddingHorizontal: SizeConfig.width * 3.5,
    marginVertical: SizeConfig.width * 2.5,
    borderRadius: SizeConfig.width * 3.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  variationText: {
    color: '#000000',
    fontFamily: 'Outfit-SemiBold',
    fontWeight: '700',
    fontSize: SizeConfig.width * 4,
    width: '90%',
  },
  circle: {
    width: SizeConfig.width * 14,
    height: SizeConfig.width * 14,
    borderRadius: SizeConfig.width * 7,
    borderColor: '#DDDDDD',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: SizeConfig.width * 2.5,
  },
  selectedCircle: {
    borderColor: 'black',
    width: SizeConfig.width * 16,
    height: SizeConfig.width * 16,
    borderRadius: SizeConfig.width * 8,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginHorizontal: SizeConfig.width * 1.5,
  },
  image: {
    width: '90%',
    objectFit: 'contain',
    borderRadius: SizeConfig.width * 9,
  },
  priceContainer: {
    flexDirection: 'row',
    paddingLeft: SizeConfig.width * 6.8,
    paddingRight: SizeConfig.width * 4.5,
    marginVertical: SizeConfig.height * 1,
    justifyContent: 'space-between',
  },
  PriceText: {
    fontSize: SizeConfig.width * 7.5,
    color: '#000000',
    fontFamily: 'Outfit-Black',
    fontWeight: '900',
    textAlign: 'center',
    paddingVertical: SizeConfig.width,
    textAlign: 'left',
  },
  PriceSubText: {
    fontSize: SizeConfig.width * 4,
    color: '#000000',
    fontFamily: 'Outfit-Bold',
    fontWeight: '900',
    textAlign: 'left',
  },
  calculaterConatiner: {
    borderRadius: SizeConfig.width * 4,
    paddingVertical: SizeConfig.width * 3,
    paddingHorizontal: SizeConfig.width * 3,
    width: SizeConfig.width * 16,
    alignItems: 'center',
    backgroundColor: '#8E8E90',
  },
  calculaterText: {
    fontSize: SizeConfig.width * 2.8,
    color: '#F2F2F2',
    fontFamily: 'Outfit-SemiBold',
    fontWeight: '700',
    paddingTop: SizeConfig.width * 0.5,
  },
  calculaterImg: {
    objectFit: 'contain',
    width: SizeConfig.width * 5,
    height: SizeConfig.width * 5,
  },
  buttonConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SizeConfig.width * 5,
    marginVertical: SizeConfig.height * 2,
  },
  truncatedTextConatiner: {
    paddingHorizontal: SizeConfig.width * 6.8,
    marginBottom: SizeConfig.height * 1.5,
  },
  specificationsConatiner: {
    paddingHorizontal: SizeConfig.width * 5,
    marginTop: SizeConfig.height * 1.5,
    marginBottom: SizeConfig.height * 1.5,
  },
});
