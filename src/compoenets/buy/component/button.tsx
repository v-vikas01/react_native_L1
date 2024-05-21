import React from 'react';
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {SizeConfig} from '../../../size';

interface ButtonProps extends TouchableOpacityProps {
  style?: ViewStyle;
  text?: string;
  textStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({text, style, textStyle, ...props}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} {...props}>
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6060EF',
    paddingVertical: SizeConfig.height * 3,
    paddingHorizontal: SizeConfig.width * 5,
    borderRadius: SizeConfig.width * 4,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Outfit-Bold',
    fontWeight: '900',
    fontSize: SizeConfig.width * 3.8,
  },
});

export default Button;
