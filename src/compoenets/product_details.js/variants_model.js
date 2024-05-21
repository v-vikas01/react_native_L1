// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   Modal,
//   FlatList,
//   TouchableOpacity,
// } from 'react-native';

// const CardModal = ({isVisible, onClose}) => {
//   const CardsData = [
//     {
//       id: '1',
//       image: require('../../../assets/home/card/car1.png'),
//       text: 'Fronx Alpha MT',
//       subText: 'Ex-Showroom Price',
//       price: '₹ 7,99,500',
//     },
//     {
//       id: '2',
//       image: require('../../../assets/home/card/car2.png'),
//       text: 'Invicto Alpha 6MT',
//       subText: 'Ex-Showroom Price',
//       price: '₹ 24,83,500',
//     },
//     {
//       id: '3',
//       image: require('../../../assets/home/card/car1.png'),
//       text: 'Fronx Alpha MT',
//       subText: 'Ex-Showroom Price',
//       price: '₹ 7,99,500',
//     },
//     {
//       id: '4',
//       image: require('../../../assets/home/card/car2.png'),
//       text: 'Invicto Alpha 6MT',
//       subText: 'Ex-Showroom Price',
//       price: '₹ 24,83,500',
//     },
//   ];
//   // const renderItem = ({item}) => (
//   //   <TouchableOpacity>
//   //     <View style={styles.card}>
//   //       <Image source={item.image} style={styles.cardImage} />
//   //       <Text style={styles.cardText}>{item.text}</Text>
//   //     </View>
//   //   </TouchableOpacity>
//   // );

//   return (
//     <Modal visible={true} animationType="slide" style={styles.container}>
//       <View style={styles.modalContainer}>
//         {/* <FlatList
//           data={CardsData}
//           renderItem={renderItem}
//           keyExtractor={item => item.id}
//           horizontal
//         />
//         <TouchableOpacity onPress={onClose} style={styles.closeButton}>
//           <Image
//             source={require('../../../assets/product_details/close.png')}
//             style={styles.closeIcon}
//           />
//         </TouchableOpacity> */}
//       </View>
//     </Modal>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     margin: 0,
//     // Other styles
//   },
//   variationContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   variationText: {
//     flex: 1,
//     // Other styles
//   },
//   drop_down_img: {
//     width: 20,
//     height: 20,
//     // Other styles
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   card: {
//     margin: 5,
//     // Other styles
//   },
//   cardImage: {
//     width: 100,
//     height: 100,
//     // Other styles
//   },
//   cardText: {
//     textAlign: 'center',
//     // Other styles
//   },
//   closeButton: {
//     position: 'absolute',
//     top: 20,
//     right: 20,
//     // Other styles
//   },
//   closeIcon: {
//     width: 20,
//     height: 20,
//     // Other styles
//   },
// });

// export default CardModal;

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';
import {SizeConfig} from '../../size';

const BottomModalSheet = ({isVisible, onHide, cardsData}) => {
  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardText}>{item.text}</Text>

      <Text style={styles.cardPrice}>{item.price}</Text>
    </View>
  );

  return (
    <Modal
      hideModalContentWhileAnimating={true}
      isVisible={isVisible}
      onBackdropPress={onHide}
      style={styles.modal}
      animationIn="fadeInDown"
      animationOut="slideOutDown"
      animationInTiming={600}
      animationOutTiming={600}
      backdropOpacity={0.5}
      avoidKeyboard={true}>
      <View style={styles.modalContent}>
        <Text style={styles.header}>Choose Idel Car Variant Here</Text>
        <FlatList
          data={cardsData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: SizeConfig.width * 2,
            paddingHorizontal: SizeConfig.width * 3,
          }}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    paddingVertical: SizeConfig.height * 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: SizeConfig.height * 35,
  },
  header: {
    fontSize: SizeConfig.width * 4.3,
    color: '#1E1E1E',
    fontFamily: 'Outfit-Bold',
    fontWeight: '900',
    textAlign: 'center',
    paddingTop: SizeConfig.height,
    paddingBottom: SizeConfig.height * 2,
  },
  card: {
    alignItems: 'center',
    borderWidth: SizeConfig.width * 0.2,
    borderRadius: SizeConfig.width * 3,
    borderColor: '#EFEFEF',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
    elevation: 2,
    textAlign: 'center',
    marginLeft: SizeConfig.width * 2.3,
    paddingVertical: SizeConfig.height * 3,
    paddingHorizontal: SizeConfig.width * 3,
    alignContent: 'center',
  },
  cardImage: {
    width: SizeConfig.width * 36,
    height: SizeConfig.width * 18,
    resizeMode: 'contain',
  },
  cardText: {
    fontSize: SizeConfig.width * 4,
    color: '#1E1E1E',
    fontFamily: 'Outfit-SemiBold',
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: SizeConfig.height,
  },
  cardSubText: {
    fontSize: SizeConfig.width * 4,
    color: '#079F04',
    fontFamily: 'Outfit-SemiBold',
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: SizeConfig.height,
  },
  cardPrice: {
    fontSize: SizeConfig.width * 3.8,
    color: '#079F04',
    fontFamily: 'Outfit-SemiBold',
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: SizeConfig.height,
  },
  closeButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    textAlign: 'center',
    color: 'white',
  },
});

export default BottomModalSheet;
