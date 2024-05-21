import React, {useEffect, useState} from 'react';
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
  FlatList,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';
import {SizeConfig} from '../../size';
import BackButton, {formatPrice} from '../reuse_component/reuse_component';
import SwiperConatiner from './component/swiper';
import Button from '../buy/component/button';
import TruncatedTextComponent from './component/truncated_text';
import SpecificationsCard from './component/specification_card';
import BottomModalSheet from './component/viriation_module';
import {
  ColorCarCard,
  ColorCarCardCategoryData,
  DummyCarDetailData,
  VariantsCardsDataList,
} from './component/data';
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
  route: any;
}

const DetailScreen: React.FC<Props> = ({route}) => {
  const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);

  const closeModal = () => setIsModalVisible(false);

  const name = route.params.name ?? '';
  console.log(name);

  useEffect(() => {
    if (ColorCarCardCategoryData.data.length > 0) {
      setSelectedId(ColorCarCardCategoryData.data[0].id);
    }
  }, []);

  const handleImagePress = (id: number) => {
    setSelectedId(id);
  };

  const renderItem = ({item}: {item: ColorCarCard}) => {
    return (
      <TouchableOpacity onPress={() => handleImagePress(item.id)}>
        <View style={[selectedId === item.id && styles.selectedCircle]}>
          <View style={styles.circle}>
            <Image style={styles.image} source={{uri: item.images[0]}} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Animated.View style={{flex: 1}}>
        <StatusBar
          backgroundColor={'#F2F2F2'}
          animated
          barStyle="dark-content"></StatusBar>
        <SafeAreaView style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Animated.View
              style={{paddingHorizontal: SizeConfig.width * 4}}
              entering={FadeInDown.duration(400).delay(300)}>
              <BackButton />
              <Text
                style={styles.header}
                numberOfLines={1}
                ellipsizeMode="tail">
                {DummyCarDetailData.data[0].title}
              </Text>
              <Text style={styles.subheader}>
                {' '}
                {DummyCarDetailData.data[0].subtitle}
              </Text>
            </Animated.View>
            <View>
              <SwiperConatiner
                images={DummyCarDetailData.data[0].images}
                name={name}
              />
            </View>

            {/* <Animated.Image
              style={{height: '50%', objectFit: 'contain'}}
              source={{uri: DummyCarDetailData.data[0].images[0]}}
              sharedTransitionTag={name}
              sharedTransitionStyle={customTransition}
            /> */}
            <Animated.View
              entering={FadeInLeft.duration(400).delay(600)}
              style={{
                width: SizeConfig.width * 100,
              }}
              // entering={FadeInUp.duration(400).delay(600)}
            >
              <Text style={styles.bodyHeader}>Variants </Text>
              <Pressable style={styles.variationConatiner} onPress={openModal}>
                <Text
                  style={styles.variationText}
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  {DummyCarDetailData.data[0].title}
                </Text>
                <Image
                  style={styles.drop_down_img}
                  source={require('../../../assets/product_details/drop_down.png')}></Image>
              </Pressable>
              <FlatList
                data={ColorCarCardCategoryData.data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                scrollEnabled={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  paddingHorizontal: SizeConfig.width * 5,
                }}
              />
              <View style={styles.priceContainer}>
                <View>
                  <Text style={styles.PriceText}>
                    {formatPrice(DummyCarDetailData.data[0].ex_price)}
                  </Text>
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
                <Button
                  textStyle={styles.buttonTextStyle}
                  style={
                    (styles.buttonFlexConatiner,
                    {
                      backgroundColor: '#A5A5A5',
                      flex: 1,
                      minWidth: 100,
                      paddingVertical: SizeConfig.width * 4,
                      paddingHorizontal: SizeConfig.width * 3,
                    })
                  }
                  text="Wishlist"
                  onPress={() => console.log()}
                />
                <View style={{marginHorizontal: SizeConfig.width * 1.5}}></View>
                <Button
                  textStyle={styles.buttonTextStyle}
                  style={styles.buttonFlexConatiner}
                  text="Book Now"
                  onPress={() => console.log()}
                />
              </View>
              <View style={styles.truncatedTextConatiner}>
                <TruncatedTextComponent
                  text={DummyCarDetailData.data[0].description}
                />
              </View>
              <Text style={styles.bodyHeader}>Specifications </Text>
              <View style={styles.specificationsConatiner}>
                <SpecificationsCard
                  specifications={DummyCarDetailData.data[0].spec}
                />
              </View>
            </Animated.View>
          </ScrollView>
        </SafeAreaView>
      </Animated.View>
      <BottomModalSheet
        isVisible={isModalVisible}
        onHide={closeModal}
        cardsData={VariantsCardsDataList.data}
      />
    </>
  );
};

export default DetailScreen;
