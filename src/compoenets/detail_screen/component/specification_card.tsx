import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
} from 'react-native';
import {Image} from 'react-native-animatable';
import {SizeConfig} from '../../../size';
import {CarSpec} from './data';

interface Specification {
  id: number;
  type: string;
  value: string;
}

interface Props {
  specifications: CarSpec[];
}

const SpecificationsCard: React.FC<Props> = ({specifications}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  const renderSpecifications = () => {
    const specsToShow = expanded ? specifications : specifications.slice(0, 6);

    return (
      <View style={styles.specContainer}>
        {specsToShow.map((spec, index) => (
          <View key={index} style={styles.specItem}>
            <Text style={styles.specType}>{spec.item_spec}</Text>
            <Text style={styles.specValue}>{spec.value}</Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderSpecifications()}
      {specifications.length > 6 && !expanded && (
        <TouchableOpacity onPress={toggleExpansion} style={styles.button}>
          <Text style={styles.buttonText}>See More</Text>
          <Image
            style={styles.seemoreImg}
            source={require('../../../../assets/product_details/seemore.png')}
          />
        </TouchableOpacity>
      )}
      {expanded && (
        <TouchableOpacity onPress={toggleExpansion} style={styles.button}>
          <Text style={styles.buttonText}>See Less</Text>
          <Image
            style={styles.seemoreImg}
            source={require('../../../../assets/product_details/seeless.png')}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  specContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  specItem: {
    width: '49%',
    paddingHorizontal: SizeConfig.width * 5,
    marginBottom: SizeConfig.height * 0.8,
    borderRadius: SizeConfig.width * 3,
    borderWidth: SizeConfig.width * 0.3,
    borderColor: '#DBDBDB',
    backgroundColor: '#F2F2F2',
    paddingVertical: SizeConfig.height * 2,
  },
  specType: {
    color: '#666666',
    fontFamily: 'Outfit-Medium',
    fontWeight: '500',
    textAlign: 'left',
    fontSize: SizeConfig.width * 3.8,
  },
  specValue: {
    fontFamily: 'Outfit-Medium',
    fontWeight: '500',
    textAlign: 'left',
    fontSize: SizeConfig.width * 4,
    color: '#000000',
    paddingTop: SizeConfig.height * 1,
  },
  button: {
    paddingVertical: SizeConfig.height * 1.5,
    paddingHorizontal: SizeConfig.width * 5,
    borderRadius: SizeConfig.width * 3,
    borderColor: '#DBDBDB',
    backgroundColor: '#F2F2F2',
    borderWidth: SizeConfig.width * 0.3,
    alignItems: 'center',
    marginVertical: SizeConfig.height * 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#B00303',
    fontFamily: 'Outfit-Medium',
    fontWeight: '500',
    fontSize: SizeConfig.width * 3.6,
  },
  seemoreImg: {
    resizeMode: 'contain',
    height: SizeConfig.height * 2,
    marginTop: SizeConfig.height * 0.3,
  },
});

export default SpecificationsCard;
