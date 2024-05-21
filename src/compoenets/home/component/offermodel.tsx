import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Modal from 'react-native-modal';
import Carousel from 'react-native-reanimated-carousel';

import LinearGradient from 'react-native-linear-gradient';
import {SizeConfig} from '../../../size';

interface HalfScreenModalProps {
  visible: boolean;
  onClose: () => void;
  images: any;
}

const HalfScreenModal: React.FC<HalfScreenModalProps> = ({
  visible,
  onClose,
  images,
}) => {
  return (
    <Modal
      hideModalContentWhileAnimating={true}
      backdropColor="#F4F4F4"
      isVisible={visible}
      animationIn="fadeInDown"
      animationOut="slideOutUp"
      animationInTiming={600}
      backdropOpacity={0.5}
      statusBarTranslucent={true}
      avoidKeyboard={true}
      style={styles.modal}
      onBackdropPress={onClose}>
      <LinearGradient
        style={styles.modalContainer}
        start={{x: 0, y: 0.1}}
        end={{x: 0, y: 1.0}}
        locations={[0, 0.5, 1]}
        colors={['#E9C5FF', '#91B1D7', '#FFFFFF']}>
        <Text style={styles.headerText}>OFFERS JUST FOR YOU</Text>

        <Carousel
          loop
          width={SizeConfig.width * 100}
          // layout={'default'}
          height={SizeConfig.height * 1}
          vertical={false}
          style={{
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            height: SizeConfig.height * 25,
          }}
          autoPlay={true}
          data={images}
          scrollAnimationDuration={1000}
          modeConfig={{
            parallaxScrollingOffset: 80,
          }}
          mode="parallax"
          onSnapToItem={index => console.log('current index:', index)}
          renderItem={({index}) => (
            <View>
              <View style={styles.imageContainer}>
                <Image
                  source={require('../../../../assets/module/banner.png')}
                  style={styles.image}
                />
              </View>
            </View>
          )}
        />
        <View style={styles.row_container}>
          <View style={styles.line}></View>
          <Text style={styles.saveText}>SAVE NOW</Text>
          <View style={styles.line}></View>
        </View>

        <View style={styles.imagesRow}>
          <Image
            style={styles.image1}
            source={require('../../../../assets/module/image1.png')}
          />
          <Image
            style={styles.image2}
            source={require('../../../../assets/module/image2.png')}
          />
        </View>
      </LinearGradient>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-start',
    margin: 0,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  modalContainer: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: SizeConfig.height * 55,
    paddingTop: 20,
  },
  offerConatiner: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 15,
    padding: 15,
  },
  carouselItem: {
    backgroundColor: 'red',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  imageContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    aspectRatio: 14 / 9,
  },
  headerText: {
    textAlign: 'center',
    alignItems: 'center',
    fontSize: SizeConfig.fontSize * 6,
    color: '#000000',
    fontFamily: 'Outfit-SemiBold',
    fontWeight: '600',
    paddingTop: SizeConfig.height * 4,
  },

  row_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SizeConfig.width * 5,
  },
  line: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  saveText: {
    paddingHorizontal: 10,
    fontSize: SizeConfig.width * 4,
    fontFamily: 'Outfit-Medium',
    fontWeight: '500',
    color: '#590000',
  },
  imagesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 1,
    paddingHorizontal: 18,
  },
  image1: {
    width: SizeConfig.width * 55,
    height: SizeConfig.height * 18,
    resizeMode: 'contain',
  },
  image2: {
    width: SizeConfig.width * 30,
    height: SizeConfig.height * 13,
    resizeMode: 'contain',
  },
});

export default HalfScreenModal;
