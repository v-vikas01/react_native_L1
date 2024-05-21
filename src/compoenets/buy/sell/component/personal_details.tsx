import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {styles} from '../../styles';
import TextField from '../../component/textfiled';
import Snackbar from 'react-native-snackbar';
import Button from '../../component/button';
import {AddressList} from './data';
import {SizeConfig} from '../../../../size';

export interface PersonalDetails {
  name: string;
  number: string;
  address: string;
}

interface Props {
  onPersonalDetails: (details: PersonalDetails) => void;
  personalDetails: PersonalDetails | null;
  handleBack: () => void;
}

const PersonalDetailsComponent: React.FC<Props> = ({
  onPersonalDetails,
  personalDetails,
  handleBack,
}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const isNameValid = (text: string) => /^[a-zA-Z]+$/.test(text);
  const isPhoneNumberValid = (text: string) => /^\d{10}$/.test(text);
  const isSubmitDisabled =
    !name || !number || !isNameValid(name) || !isPhoneNumberValid(number);

  useEffect(() => {
    if (personalDetails) {
      setName(personalDetails.name);
      setNumber(personalDetails.number);
      setAddress(personalDetails.address);
    }
  }, [personalDetails]);

  const handleNameChange = (text: string) => setName(text);

  const handleAddressChange = (text: string) => setAddress(text);

  const handleContactNumberChange = (text: string) => setNumber(text);

  const handleValidation = (text: string) => /^[a-zA-Z ]+$/.test(text);

  const handleAddressFieldPress = () => setIsModalVisible(true);

  const handleAddressSelect = (selectedAddress: string) => {
    setAddress(selectedAddress);
    setIsModalVisible(false);
  };

  const sendPersonalDetails = () => {
    console.log('jkbijbj');

    if (!name || !number || !address) {
      return Snackbar.show({
        text: 'Please fill all details',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#FF0000',
        textColor: '#FFFFFF',
        fontFamily: 'Outfit-Medium',
      });
    }
    onPersonalDetails({name, number, address});
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={styles.stepperHeader}>Personal Details</Text>
      <View style={styles.stepperBody}>
        <TextField
          title="Name"
          placeholder="Enter Your Name"
          keyboardType="default"
          value={name}
          onChangeText={handleNameChange}
          validation={handleValidation}
          textStyle={styles.SellTextFiledtitle}
          conatinerStyle={styles.SellTextFiledContainer}
        />
        <TextField
          title="Mobile Number"
          placeholder="Enter Mobile Number"
          keyboardType="number-pad"
          value={number}
          onChangeText={handleContactNumberChange}
          validation={text => text.length === 10}
          textStyle={styles.SellTextFiledtitle}
          conatinerStyle={styles.SellTextFiledContainer}
          maxLength={10}
        />
        <TouchableOpacity onPress={handleAddressFieldPress}>
          {address === '' ? (
            <TextField
              title="Address"
              placeholder="Select Address"
              keyboardType="default"
              value={address}
              editable={false}
              onChangeText={handleAddressChange}
              textStyle={styles.SellTextFiledtitle}
              conatinerStyle={styles.SellTextFiledContainer}
            />
          ) : (
            <View style={styles.SellTextFiledContainer}>
              <Text style={styles.addressSlectedText}>{address}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
      <View
        style={{flexDirection: 'row', marginVertical: SizeConfig.height * 3.5}}>
        <Button
          text="Go Back"
          onPress={handleBack}
          textStyle={styles.submitbuttonText}
          style={styles.buttonConatiner}
        />
        <View style={{marginHorizontal: SizeConfig.width * 2}} />
        <Button
          text="Next"
          onPress={sendPersonalDetails}
          textStyle={styles.submitbuttonText}
          style={styles.buttonConatiner}
          // disabled={isSubmitDisabled}
        />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: SizeConfig.height,
              }}>
              <Text style={styles.modalTitle}>My Addresses</Text>
              <Button
                text="+ Add New"
                textStyle={styles.submitbuttonText}
                style={styles.addressbuttonConatiner}
              />
            </View>

            <FlatList
              data={AddressList.profile_address}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={[
                    styles.addressTextContainer,
                    {
                      backgroundColor:
                        address === item.street ? '#F2F2F2' : '#FFFFFF',
                    },
                  ]}
                  onPress={() => handleAddressSelect(item.street)}>
                  <View
                    style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                    <Image
                      style={styles.preferenceIcon}
                      source={require('../../../../../assets/buy_sell/location_home.png')}
                    />
                    <View style={{marginLeft: SizeConfig.width * 4}}>
                      <Text style={styles.addressTitle}>
                        {item.type_of_address}
                      </Text>
                      <Text style={styles.addressBody}>{item.street}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PersonalDetailsComponent;
