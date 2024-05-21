// import React from 'react';
// import {
//   View,
//   TouchableOpacity,
//   Text,
//   StyleSheet,
//   Dimensions,
// } from 'react-native';
// import Modal from 'react-native-modal';
// import Carousel from 'react-native-snap-carousel';

// const {height} = Dimensions.get('window');

// const HalfScreenModal = ({visible, onClose}) => {
//   return (
//     <Modal
//       isVisible={visible}
//       animationIn="fadeInDown"
//       animationOut="slideOutUp"
//       animationInTiming={600}
//       backdropOpacity={0.5}
//       avoidKeyboard={true}
//       style={styles.modal}
//       onBackdropPress={onClose}>
//       <View style={styles.modalContainer}>
//         <Text style={styles.text}></Text>
//         <MyCarousel />
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   modal: {
//     justifyContent: 'flex-start',
//     margin: 0,
//   },
//   modalContainer: {
//     backgroundColor: 'white',
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//     height: height / 2,
//     paddingHorizontal: 20,
//     paddingTop: 20,
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
// });

// export default HalfScreenModal;

// export const MyCarousel = () => {

//    const staticImages =[
//     './../../'
//    ]

//   _renderItem = ({item, index}) => {
//     return (
//       <View style={{backgroundColor:'red'}}>
//         <Text>{item.title}</Text>
//       </View>
//     );
//   };

//   return (
//     <Carousel
//       ref={c => {
//         this._carousel = c;
//       }}
//       data={this.state.entries}
//       renderItem={this._renderItem}
//       sliderWidth={sliderWidth}
//       itemWidth={itemWidth}
//     />
//   );
// };

import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import Modal from 'react-native-modal';
// import Carousel from 'react-native-snap-carousel';
import Carousel from 'react-native-reanimated-carousel';
import {SizeConfig} from '../../size';
import LinearGradient from 'react-native-linear-gradient';

// const {height} = Dimensions.get('window');

const HalfScreenModal = ({visible, onClose, images}) => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.carouselItem}>
        <Text>{item}</Text>
      </View>
    );
  };

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
          layout={'default'}
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
                  source={require('../../../assets/module/banner.png')}
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
            source={require('../../../assets/module/image1.png')}
          />
          <Image
            style={styles.image2}
            source={require('../../../assets/module/image2.png')}
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
    // backgroundColor: 'white',
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
    fontFamily: 'Outfit-Bold',
    fontWeight: '800',
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
    fontFamily: 'Outfit-Bold',
    fontWeight: '800',
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
