import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../reuse_component/reuse_component';
import {SizeConfig} from '../../size';
import StepsList from './component/stepsTypes';
import {StepsTypeList, WhyBuyList} from './component/data';
import Button from './component/button';
import {useNavigation} from '@react-navigation/native';
import {
  BuyUsedCarsScreenNavigationProp,
  SellUsedCarsScreenNavigationProp,
} from '../../types';
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
} from 'react-native-reanimated';

const BuySellCars: React.FC = () => {
  const navigationBuyUsedCarsScreen =
    useNavigation<BuyUsedCarsScreenNavigationProp>();
  const navigationSellUsedCarsScreen =
    useNavigation<SellUsedCarsScreenNavigationProp>();
  const [selected, setSelected] = useState('Buy');

  const handleToggle = () => {
    setSelected(selected === 'Buy' ? 'Sell' : 'Buy');
  };
  return (
    <Animated.View
      style={{flex: 1}}
      // entering={FadeInLeft.duration(400).delay(300)}
    >
      <StatusBar animated backgroundColor="#FFFFFF" barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <LinearGradient
            colors={['#FFFFFF', '#70A9EE']}
            start={{x: 0, y: 0.2}}
            end={{x: 0, y: 2}}
            style={styles.headerConatiner}>
            <ImageBackground
              style={styles.backgroundImg}
              source={require('../../../assets/buy_sell/background.png')}></ImageBackground>
            <View style={styles.headerBodyConatiner}>
              <View>
                <BackButton />
                <View>
                  <Text style={styles.headerText}>True Value</Text>
                  <View style={{paddingHorizontal: SizeConfig.width * 7}}>
                    <View style={styles.toggleButtonConatiner}>
                      <TouchableOpacity
                        style={[
                          styles.toggleButton,
                          selected === 'Buy' ? styles.toggleButtonActive : null,
                        ]}
                        onPress={handleToggle}>
                        <Text
                          style={[
                            styles.toggleButtonText,
                            selected === 'Buy'
                              ? styles.toggleButtonTextActive
                              : null,
                          ]}>
                          Buy
                        </Text>
                      </TouchableOpacity>
                      <View style={{marginHorizontal: SizeConfig.width}} />
                      <TouchableOpacity
                        style={[
                          styles.toggleButton,
                          selected === 'Sell'
                            ? styles.toggleButtonActive
                            : null,
                        ]}
                        onPress={handleToggle}>
                        <Text
                          style={[
                            styles.toggleButtonText,
                            selected === 'Sell'
                              ? styles.toggleButtonTextActive
                              : null,
                          ]}>
                          Sell
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View>
                      <Text
                        style={[
                          styles.headerText,
                          {color: '#FFFFFF', fontSize: SizeConfig.width * 4.2},
                        ]}>
                        BUY FROM TRUE VALUE IN
                      </Text>
                      <View style={{alignItems: 'center'}}>
                        <View style={styles.stepsTextConatiner}>
                          <Image
                            style={styles.stepsTextImg}
                            source={require('../../../assets/buy_sell/stepsTextImg.png')}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
          <Animated.View
            style={styles.bodyConatiner}
            entering={FadeInDown.duration(400).delay(300)}>
            <StepsList data={StepsTypeList} />
            <View
              style={{
                paddingHorizontal: SizeConfig.width * 15,
                marginVertical: SizeConfig.height * 3,
              }}>
              <Button
                onPress={() => {
                  if (selected === 'Buy') {
                    navigationBuyUsedCarsScreen.navigate('BuyUsedScreen');
                  } else {
                    navigationSellUsedCarsScreen.navigate('SellUsedCars');
                  }
                }}
                text={'Continue'}
                textStyle={styles.submitbuttonText}
                style={styles.Submitbutton}
              />
            </View>
            <View
              style={{
                paddingHorizontal: SizeConfig.width * 3.2,
                paddingVertical: SizeConfig.height * 1.5,
              }}>
              <Text style={styles.whyBuyText}>WHY BUY AT TRUE VALUE ?</Text>
              {WhyBuyList.map((item, index) => (
                <View key={index} style={styles.whyBuyContainer}>
                  <Image
                    style={styles.whyBuyImageConatiner}
                    source={item.image}
                  />
                  <View style={{flex: 1, marginLeft: SizeConfig.width * 3.5}}>
                    <Text style={styles.whyBuyText}>{item.text}</Text>
                    <Text style={styles.whyBuySubText}>{item.subText}</Text>
                  </View>
                </View>
              ))}
            </View>
          </Animated.View>
        </ScrollView>
      </SafeAreaView>
    </Animated.View>
  );
};
export default BuySellCars;
