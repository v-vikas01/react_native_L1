import {StackNavigationProp} from '@react-navigation/stack';
import {SubmitItemType} from './compoenets/buy/buy_used/data';

export type RootStackParamList = {
  Home: undefined;
  VideoPlayer: {
    data: string;
  };
  BuySellCars: undefined;
  BuyUsedScreen: undefined;
  SubitBuyUsedCarsScreen: {
    data: SubmitItemType[];
  };
  CheckboxList: undefined;
  DetailScreen: {
    name: any;
  };
  SellUsedCars: undefined;
};

export type VideoPlayerScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'VideoPlayer'
>;

export type BuySellCarScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'BuySellCars'
>;

export type BuyUsedCarsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'BuyUsedScreen'
>;

export type SubitBuyUsedCarsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SubitBuyUsedCarsScreen'
>;

export type CheckListNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CheckboxList'
>;
export type DetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'DetailScreen'
>;

export type SellUsedCarsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SellUsedCars'
>;
