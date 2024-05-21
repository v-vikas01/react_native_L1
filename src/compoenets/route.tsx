import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, Text} from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import HomeScreen from './home/update_home';
import VideoPlayer from './home/component/video_player';
import BuySellCars from './buy';
import BuyUsedScreen from './buy/buy_used';
import SubitBuyUsedCarsScreen from './buy/buy_used/submit';
import Example from './buy/buy_used/dumy';
import DetailScreen from './detail_screen';
import SellUsedCars from './buy/sell';
import CartTab from './tab_screens/cart';
import PaymentTab from './tab_screens/payment';
import ProfileTab from './tab_screens/profile';
import {RootStackParamList} from '../types';
import {createStackNavigator} from '@react-navigation/stack';
import {SizeConfig} from '../size';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<RootStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
      <Stack.Screen name="BuySellCars" component={BuySellCars} />
      <Stack.Screen name="BuyUsedScreen" component={BuyUsedScreen} />
      <Stack.Screen
        name="SubitBuyUsedCarsScreen"
        component={SubitBuyUsedCarsScreen}
      />
      <Stack.Screen name="CheckboxList" component={Example} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="SellUsedCars" component={SellUsedCars} />
    </Stack.Navigator>
  );
};

const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: (() => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
          if (
            routeName === 'Home' ||
            routeName === 'CartTab' ||
            routeName === 'PaymentTab' ||
            routeName === 'ProfileTab'
          ) {
            return styles.tabBar;
          }
          return {display: 'none'};
        })(),

        tabBarIcon: ({focused}) => {
          let iconName;
          let iconFocusedName;
          console.log(route.name);

          switch (route.name) {
            case 'HomeStack':
              iconName = require('../../assets/tabbar/icon11.png');
              iconFocusedName = require('../../assets/tabbar/icon1.png');
              break;
            case 'CartTab':
              iconName = require('../../assets/tabbar/icon2.png');
              iconFocusedName = require('../../assets/tabbar/icon22.png');
              break;
            case 'PaymentTab':
              iconName = require('../../assets/tabbar/icon3.png');
              iconFocusedName = require('../../assets/tabbar/icon33.png');
              break;
            case 'ProfileTab':
              iconName = require('../../assets/tabbar/icon4.png');
              iconFocusedName = require('../../assets/tabbar/icon44.png');
              break;
            default:
          }

          return (
            <Image
              source={focused ? iconFocusedName : iconName}
              style={styles.icon}
            />
          );
        },
        tabBarLabel: ({focused}) => {
          let label;
          switch (route.name) {
            case 'HomeStack':
              label = 'Home';
              break;
            case 'CartTab':
              label = 'Cart';
              break;
            case 'PaymentTab':
              label = 'Payment';
              break;
            case 'ProfileTab':
              label = 'Profile';
              break;
            default:
              label = 'Home';
          }
          return (
            <Text style={focused ? styles.activeIcon : styles.inactiveIcon}>
              {label}
            </Text>
          );
        },
      })}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="CartTab" component={CartTab} />
      <Tab.Screen name="PaymentTab" component={PaymentTab} />
      <Tab.Screen name="ProfileTab" component={ProfileTab} />
    </Tab.Navigator>
  );
};

const MainRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: SizeConfig.height * 8,
    borderTopLeftRadius: SizeConfig.width * 6,
    borderTopRightRadius: SizeConfig.width * 6,
    paddingBottom: SizeConfig.height * 1,
    paddingTop: SizeConfig.height * 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -9,
    },
    shadowOpacity: 0.25,
    shadowRadius: 25,
    elevation: 5,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    borderWidth: SizeConfig.width * 0.1,
    borderColor: '#FFFFFF',
  },
  icon: {
    width: SizeConfig.width * 6,
    height: SizeConfig.width * 6,
    objectFit: 'contain',
  },
  activeIcon: {
    color: '#6060EF',
    fontFamily: 'Outfit-SemiBold',
    fontWeight: '600',
    fontSize: SizeConfig.width * 4,
  },
  inactiveIcon: {
    color: '#A9A9A9',
    fontFamily: 'Outfit-Regular',
    fontWeight: '400',
    fontSize: SizeConfig.width * 4,
  },
});

export default MainRoutes;
