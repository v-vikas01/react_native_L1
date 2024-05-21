import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {SizeConfig} from '../../size';

const CustomButton = ({color, text, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color}]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: SizeConfig.width * 4,
    paddingHorizontal: SizeConfig.width * 3,
    borderRadius: SizeConfig.width * 4,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
    flex: 1,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Outfit-Bold',
    fontWeight: '900',
    textAlign: 'center',
    fontSize: SizeConfig.width * 4,
  },
});

export default CustomButton;
