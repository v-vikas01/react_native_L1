import * as React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Animated from 'react-native-reanimated';
import {sharedElementTransition} from './src/compoenets/sharedelement';
import {Image} from 'react-native-animatable';

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, marginTop: 50}}>
      <Animated.View
        sharedTransitionTag="sharedTag"
        // sharedTransitionStyle={sharedElementTransition}
      >
        <Image
          source={require('../../assets/car.png')}
          style={styles.cardContainer2}></Image>
      </Animated.View>
      <Button title="Go back" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default DetailsScreen;

const styles = StyleSheet.create({
  cardContainer2: {
    borderRadius: 12,
    backgroundColor: '#fff',

    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    width: '100%',
    height: 'auto',
  },
});
