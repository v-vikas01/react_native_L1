// import React from 'react';
// import {ThemeProvider} from './themecontext';
// import MainNavigator from './main-activity';

// const AppScreen = () => {
//   return (
//     <ThemeProvider>
//       <MainNavigator />
//     </ThemeProvider>
//   );
// };

// export default AppScreen;

// import React, {useState} from 'react';
// import {View, Button} from 'react-native';
// import HalfScreenModal from './module/top-view-module'; // Make sure to import the HalfScreenModal component

// const AppScreen = () => {
//   const [modalVisible, setModalVisible] = useState(false);

//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Button title="Open Modal" onPress={() => setModalVisible(true)} />
//       <HalfScreenModal
//         visible={modalVisible}
//         onClose={() => setModalVisible(false)}
//       />
//     </View>
//   );
// };

// export default AppScreen;

// import React, {useState} from 'react';
// import {View, Button} from 'react-native';
// import HalfScreenModal from './module/top-view-module';
// import Home from '../home';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import VideoPlayer from './module/video-player';
// import ProductDetailScreen from './product_details.js/product-details';
// import HomeScreen from './home/update_home';

// const AppScreen = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const images = ['./assets/', './assets/image2.jpg', './assets/image3.jpg'];
//   const Stack = createNativeStackNavigator();
//   return (
//     // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//     //   <Button title="Open Modal" onPress={() => setModalVisible(true)} />
//     //   <HalfScreenModal
//     //     visible={modalVisible}
//     //     onClose={() => setModalVisible(false)}
//     //     images={images}
//     //   />
//     // </View>

//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="VideoPlayer"
//           component={VideoPlayer}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="ProductDetailScreen"
//           component={ProductDetailScreen}
//           options={{headerShown: false}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppScreen;

import React, {useState} from 'react';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './home/update_home';
import VideoPlayer from './home/component/video_player';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types';
import BuySellCars from './buy';
import BuyUsedScreen from './buy/buy_used';
import SubitBuyUsedCarsScreen from './buy/buy_used/submit';
import CheckboxList from '../checklist';
import DetailScreen from './detail_screen';
import Stepper from './buy/sell';
import SellUsedCars from './buy/sell';
import TabViewExample from './buy/buy_used/dumy';
import Example from './buy/buy_used/dumy';

// export type NavigationProps<T extends keyof RootStackParamList> = {
//   navigation: StackNavigationProp<RootStackParamList, T>;
//   route: RouteProp<RootStackParamList, T>;
// };

const AppScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const images: string[] = [
    './assets/',
    './assets/image2.jpg',
    './assets/image3.jpg',
  ];
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VideoPlayer"
          component={VideoPlayer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BuySellCars"
          component={BuySellCars}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BuyUsedScreen"
          component={BuyUsedScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SubitBuyUsedCarsScreen"
          component={SubitBuyUsedCarsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CheckboxList"
          component={Example}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="SellUsedCars"
          component={SellUsedCars}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppScreen;
