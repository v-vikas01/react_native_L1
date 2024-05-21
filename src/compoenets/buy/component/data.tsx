export interface StepsTypeListItem {
  image: any;
  text: string;
  subText: string;
}

export const StepsTypeList: StepsTypeListItem[] = [
  {
    image: require('../../../../assets/buy_sell/step1.png'),
    text: 'Find Your Car',
    subText:
      'To access features and offers, kindly undergo a verification process to authenticate your identity',
  },
  {
    image: require('../../../../assets/buy_sell/step1.png'),
    text: 'Free Test Drive',
    subText:
      'To access features and offers, kindly undergo a verification process to authenticate your identity',
  },
  {
    image: require('../../../../assets/buy_sell/step1.png'),
    text: 'Get finance options',
    subText:
      'To access features and offers, kindly undergo a verification process to authenticate your identity',
  },
];

export const WhyBuyList: StepsTypeListItem[] = [
  {
    image: require('../../../../assets/buy_sell/types1.png'),
    text: 'Car History Verified',
    subText:
      "Comprehensive ownership, mileage, and service records for complete transparency about the car's history.",
  },
  {
    image: require('../../../../assets/buy_sell/types2.png'),
    text: 'Brisk Documentation',
    subText:
      'We handle all your car paperwork, including registration and insurance, so you can relax.',
  },
  {
    image: require('../../../../assets/buy_sell/types3.png'),
    text: 'Quality Check',
    subText:
      "We inspect and evaluate vehicles to ensure they're safe and reliable for you to drive.",
  },
  {
    image: require('../../../../assets/buy_sell/types4.png'),
    text: 'Hassle Free',
    subText:
      'Now buying a used car has become hassle free with us. Book a test drive to experience a trouble-free buying.',
  },
];
