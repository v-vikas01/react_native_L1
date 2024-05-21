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
import {SizeConfig} from '../../../size';
import {VariantsCardsData} from './data';
import {formatPrice} from '../../reuse_component/reuse_component';

interface Card {
  id: string;
  image: any;
  text: string;
  price: string;
}

interface Props {
  isVisible: boolean;
  onHide: () => void;
  cardsData: VariantsCardsData[];
}

const BottomModalSheet: React.FC<Props> = ({isVisible, onHide, cardsData}) => {
  const renderItem = ({item}: {item: VariantsCardsData}) => (
    <View style={styles.card}>
      <Image source={{uri: item.images[0]}} style={styles.cardImage} />
      <Text style={styles.cardText}>{item.title}</Text>
      <Text style={styles.cardPrice}>{formatPrice(item.ex_price)}</Text>
    </View>
  );

  return (
    <Modal
      hideModalContentWhileAnimating={false}
      isVisible={isVisible}
      onBackdropPress={onHide}
      style={styles.modal}
      animationOut="slideOutDown"
      backdropOpacity={0.1}
      avoidKeyboard={true}>
      <View style={styles.modalContent}>
        <Text style={styles.header}>Choose Ideal Car Variant Here</Text>
        <FlatList
          data={cardsData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: SizeConfig.width * 2,
            paddingLeft: SizeConfig.width * 2.5,
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
    color: '#000',
    fontFamily: 'Outfit-Medium',
    fontWeight: '500',
    textAlign: 'center',
    paddingBottom: SizeConfig.height,
  },
  card: {
    width: SizeConfig.width * 40,
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
    marginRight: SizeConfig.width * 2.3,
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
    fontSize: SizeConfig.width * 3.8,
    color: '#1E1E1E',
    fontFamily: 'Outfit-Medium',
    fontWeight: '500',
    textAlign: 'center',
    paddingTop: SizeConfig.height,
  },
  cardPrice: {
    fontSize: SizeConfig.width * 3.8,
    color: '#079F04',
    fontFamily: 'Outfit-Medium',
    fontWeight: '500',
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
