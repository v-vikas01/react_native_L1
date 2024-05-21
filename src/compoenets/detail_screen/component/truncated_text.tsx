import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
} from 'react-native';
import {SizeConfig} from '../../../size';

interface Props {
  text: string;
}

const TruncatedTextComponent: React.FC<Props> = ({text}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Text
        numberOfLines={isExpanded ? undefined : 3}
        style={styles.text}
        ellipsizeMode="tail">
        {text}
      </Text>
      <TouchableOpacity onPress={toggleText} style={styles.button}>
        <Text style={styles.buttonText}>
          {isExpanded ? 'Read Less' : 'Read More....'}
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#000000',
    fontFamily: 'Outfit-Medium',
    fontWeight: '500',
    textAlign: 'justify',
    fontSize: SizeConfig.width * 3.8,
  },
  button: {
    marginTop: SizeConfig.height * 0.5,
  },
  buttonText: {
    color: '#079F04',
    fontFamily: 'Outfit-Medium',
    fontWeight: '500',
    textAlign: 'justify',
    fontSize: SizeConfig.width * 3.8,
  },
});

export default TruncatedTextComponent;
