import React from 'react';
import {TouchableOpacity, Image, StyleSheet, ViewStyle} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SizeConfig} from '../../size';

const BackButton: React.FC = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Image
        style={styles.arrow_back}
        source={require('../../../assets/product_details/arrow_back.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  arrow_back: {
    objectFit: 'contain',
    width: SizeConfig.width * 6,
    height: SizeConfig.height * 3,
  },
});

export default BackButton;

export const formatPrice = (value: number): string => {
  return '₹' + value.toLocaleString('en-IN');
};
