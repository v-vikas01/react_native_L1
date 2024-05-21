import React from 'react';
import {Modal, View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {SizeConfig} from '../../../size';
import Button from '../component/button';

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const ThankYouModuleComponent: React.FC<ModalProps> = ({
  isVisible,
  onClose,
}) => {
  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="fade"
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text
            style={[
              styles.modalText,
              {
                paddingBottom: SizeConfig.height * 2,
                fontSize: SizeConfig.width * 4.8,
              },
            ]}>
            Thank you
          </Text>
          <View style={styles.imageConatiner}>
            <Image
              style={styles.image}
              source={require('../../../../assets/buy_sell/thankyou.png')}></Image>
          </View>
          <Text style={[styles.modalText, {paddingTop: SizeConfig.height * 3}]}>
            Your enquiry has been successfully {'\n'} sent
          </Text>
          <Button
            text="Back"
            style={styles.moduleButton}
            onPress={onClose}
            textStyle={styles.moduleButtonText}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',

    padding: SizeConfig.width * 5,
    borderRadius: SizeConfig.width * 4,
    alignItems: 'center',
  },
  modalText: {
    fontFamily: 'Outfit-Regular',
    fontWeight: '400',
    fontSize: SizeConfig.width * 4.2,
    color: '#000000',
    textAlign: 'center',

    // marginBottom: 20,
  },
  imageConatiner: {
    width: SizeConfig.width * 70,
    height: SizeConfig.width * 45,
    alignItems: 'center',
    marginVertical: SizeConfig.height * 2,
  },
  image: {
    width: '80%',
    height: '100%',
    objectFit: 'contain',
  },
  moduleButton: {
    borderRadius: SizeConfig.width * 3,
    borderWidth: SizeConfig.width * 0.3,
    borderColor: '#006FD7',
    padding: SizeConfig.width * 2,
    width: SizeConfig.width * 80,
    backgroundColor: '#FFFFFF',
    marginTop: SizeConfig.height * 3.8,
    elevation: 0,
    paddingVertical: SizeConfig.height * 2,
  },
  moduleButtonText: {
    fontFamily: 'Outfit-Regular',
    fontWeight: '400',
    fontSize: SizeConfig.width * 4.5,
    color: '#006FD7',
  },
});

export default ThankYouModuleComponent;
