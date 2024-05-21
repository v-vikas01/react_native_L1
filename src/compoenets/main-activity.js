import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {useTheme} from './themecontext';

import {Button, Text, TouchableOpacity, View} from 'react-native';
import {SheetManager, SheetProvider} from 'react-native-actions-sheet';
import ExampleTwo from './module/top-view-module';

const Stack = createNativeStackNavigator();

const DetailImage = () => {
  return (
    <SheetProvider>
      <TouchableOpacity
        onPress={() => {
          SheetManager.show();
        }}>
        <Text>s fmbkvh</Text>
      </TouchableOpacity>
      <ExampleTwo />
    </SheetProvider>
  );
};

const Home = () => {
  const {isDarkMode, toggleTheme} = useTheme();
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isDarkMode ? 'black' : 'white',
      }}>
      <Text style={{color: isDarkMode ? 'white' : 'black'}}>Screen 1</Text>
      <Button
        title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        onPress={toggleTheme}
      />
      <View style={{marginTop: 15}}></View>
      <Button
        title={'Details'}
        onPress={() => {
          navigation.navigate('Screen2');
        }}
      />
    </View>
  );
};

const MainNavigator = () => {
  const {isDarkMode} = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Screen1"
          component={Home}
          options={{
            title: 'Screen 1',
            headerStyle: {
              backgroundColor: isDarkMode ? 'black' : 'white',
            },
            headerTintColor: isDarkMode ? 'white' : 'black',
          }}
        />
        <Stack.Screen
          name="Screen2"
          component={DetailImage}
          options={{
            title: 'Screen 2',
            headerStyle: {
              backgroundColor: isDarkMode ? 'black' : 'white',
            },
            headerTintColor: isDarkMode ? 'white' : 'black',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
