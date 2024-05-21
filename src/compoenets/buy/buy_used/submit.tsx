import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StatusBar,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import {RootStackParamList} from '../../../types';
import {styles} from '../styles';
import BackButton from '../../reuse_component/reuse_component';
import {SizeConfig} from '../../../size';
import {StackScreenProps} from '@react-navigation/stack';

import Button from '../component/button';
import TextField from '../component/textfiled';
import {useNavigation} from '@react-navigation/native';
import ThankYouModuleComponent from './thank_you_module';
import {SubmitItemType} from './data';

type SubitBuyUsedCarsProps = StackScreenProps<
  RootStackParamList,
  'SubitBuyUsedCarsScreen'
>;

const SubitBuyUsedCarsScreen: React.FC<SubitBuyUsedCarsProps> = ({route}) => {
  const data: SubmitItemType[] = route.params.data;
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const isNameValid = (text: string) => /^[a-zA-Z]+$/.test(text);
  const isPhoneNumberValid = (text: string) => /^\d{10}$/.test(text);
  const isSubmitDisabled =
    !name ||
    !contactNumber ||
    !isNameValid(name) ||
    !isPhoneNumberValid(contactNumber);

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleNameChange = (text: string) => {
    setName(text);
  };

  const handleContactNumberChange = (text: string) => {
    setContactNumber(text);
  };

  const handleValidation = (text: string) => {
    return /^[a-zA-Z ]+$/.test(text);
  };

  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Contact Number:', contactNumber);
    setIsModalVisible(true);
  };
  console.log('data');
  console.log(data);

  return (
    <View style={{flex: 1}}>
      <StatusBar animated backgroundColor="#f5f5f5" barStyle="dark-content" />
      <SafeAreaView style={styles.confromContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              paddingBottom: SizeConfig.height * 2,
            }}>
            <BackButton />
            <Text style={[styles.headerText, {textAlign: 'center', flex: 1}]}>
              BUY USED CAR
            </Text>
          </View>
          <View style={{padding: SizeConfig.width * 1}}>
            <Text
              style={[
                styles.prefernceBodyHeader,
                {paddingBottom: SizeConfig.height},
              ]}>
              Your Preferences
            </Text>
            <View style={styles.prefrenceConatiner}>
              <FlatList
                data={data}
                numColumns={2}
                scrollEnabled={false}
                keyExtractor={(item, index) => item.selectedName}
                renderItem={({item}) => (
                  <View style={styles.preferenceItem}>
                    <Image
                      style={styles.preferenceIcon}
                      source={require('../../../../assets/buy_sell/icon1.png')}></Image>
                    <Text
                      style={styles.preferenceName}
                      ellipsizeMode="tail"
                      numberOfLines={2}>
                      {item.selectedName}
                    </Text>
                  </View>
                )}
              />
            </View>
            <View style={styles.preferenceButtonConatiner}>
              <Button
                textStyle={styles.preferenceButtonText}
                text="Edit Preferences"
                style={styles.preferenceButton}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            </View>
            <Text style={styles.prefernceBodyHeader}>Choose Address</Text>
            <View style={styles.prefernceFieldConatiner}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={styles.preferenceIcon}
                  source={require('../../../../assets/buy_sell/address.png')}></Image>
                <View style={{marginLeft: SizeConfig.width * 4.5}}>
                  <Text style={styles.confromHeader}>Home</Text>
                  <Text style={[styles.addressFiledConatiner]}>
                    #221,To access features and offers, kindly undergo a
                    verification process to authenticate your identity
                  </Text>
                </View>
              </View>
            </View>
            <TextField
              title="Name"
              logo={require('../../../../assets/buy_sell/person.png')}
              placeholder="Enter your Name"
              keyboardType="default"
              onChangeText={handleNameChange}
              validation={handleValidation}
              textStyle={styles.textFiledtitle}
              conatinerStyle={styles.textFiledInputContainer}
            />
            <TextField
              title="Contact Number"
              logo={require('../../../../assets/buy_sell/contact.png')}
              placeholder="Enter Phone Number"
              keyboardType="number-pad"
              onChangeText={handleContactNumberChange}
              validation={text => text.length === 10}
              textStyle={styles.textFiledtitle}
              conatinerStyle={styles.textFiledInputContainer}
              maxLength={10}
            />
            <View style={styles.preferenceButtonConatiner}>
              <Button
                text="Submit"
                onPress={handleSubmit}
                disabled={isSubmitDisabled}
                textStyle={styles.submitbuttonText}
                style={styles.Submitbutton}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <ThankYouModuleComponent
        isVisible={isModalVisible}
        onClose={handleCloseModal}
      />
    </View>
  );
};

export default SubitBuyUsedCarsScreen;
