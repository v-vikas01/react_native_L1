import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {StepsTypeListItem} from './data';
import {SizeConfig} from '../../../size';

const StepRow = ({item, index}: {item: StepsTypeListItem; index: number}) => {
  const isReverse = index % 2 === 1;
  return (
    <View style={[styles.container, isReverse && styles.reverseContainer]}>
      <View style={[styles.imageContainer]}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.text,
            {
              textAlign: isReverse ? 'right' : 'left',
            },
          ]}>
          {item.text}
        </Text>
        <Text
          style={[styles.subText, {textAlign: isReverse ? 'right' : 'left'}]}>
          {item.subText},
        </Text>
      </View>
    </View>
  );
};

const StepsList = ({data}: {data: StepsTypeListItem[]}) => {
  return (
    <View>
      {data.map((item, index) => (
        <StepRow key={index} item={item} index={index} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SizeConfig.height * 1.5,

    width: '100%',
    justifyContent: 'space-between',
  },
  reverseContainer: {
    flexDirection: 'row-reverse',
  },
  imageContainer: {
    width: SizeConfig.width * 20,
    height: SizeConfig.width * 20,
    alignItems: 'center',
    alignContent: 'center',
    paddingTop: SizeConfig.height * 0.5,
  },
  image: {
    width: '90%',
    height: '90%',

    objectFit: 'contain',
  },
  textContainer: {
    flex: 2,
  },
  text: {
    fontFamily: 'Outfit-Medium',
    fontWeight: '500',
    fontSize: SizeConfig.width * 3.9,
    color: '#000000',
  },
  subText: {
    fontFamily: 'Outfit-Regular',
    fontWeight: '400',
    fontSize: SizeConfig.width * 3.6,
    color: '#8A8A8A',
    paddingTop: SizeConfig.height * 1,
  },
});

export default StepsList;
