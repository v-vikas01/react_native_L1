export interface CarSpec {
  item_spec: string;
  value: string;
}

export interface CarDetail {
  id: number;
  title: string;
  subtitle: string;
  itemlist: number;
  color: string;
  price: number;
  ex_price: number;
  images: string[];
  description: string;
  about: string;
  page_navigation: string;
  spec: CarSpec[];
}

export interface CarDetailApiResponse {
  data: CarDetail[];
}

export const DummyCarDetailData: CarDetailApiResponse = {
  data: [
    {
      id: 1666,
      title: 'ALTO K10 VXI 1L AGS',
      subtitle: 'ALTO K10 VXI 1L AGS Solid White',
      itemlist: 216,
      color: 'Solid White',
      price: 689256.4,
      ex_price: 556000.0,
      images: [
        'https://assets.kalyanicrm.com/ALTOK10/ALTO-white.png',
        'https://assets.kalyanicrm.com/AltoK10/Alto_k10_1.jpg',
        'https://assets.kalyanicrm.com/AltoK10/Alto_k10_2.jpg',
        'https://assets.kalyanicrm.com/AltoK10/Alto_k10_3.jpg',
        'https://assets.kalyanicrm.com/AltoK10/Alto_k10_4.jpg',
        'https://assets.kalyanicrm.com/AltoK10/Alto_k10_5.jpg',
      ],
      description:
        'The Maruti ALTO K10 VXI 1L AGS - is powered by a 1.0-liter, three-cylinder petrol engine that produces a maximum power of 49 kW @ 5500 rpm and a peak torque of 89 Nm @ 3500 rpm. The engine is mated to an AGS (Auto Gear Shift) transmission, which is an automated manual transmission that offers the convenience of an automatic gearbox with the fuel efficiency of a manual gearbox. The car can accelerate from 0-100 kmph in 14.5 seconds and has a top speed of 145 kmph.',
      about:
        "The Maruti ALTO K10 VXI 1L AGS - has a spacious and well-designed cabin that can comfortably accommodate up to five passengers. The car comes with features like a 2-DIN audio system with FM/AM, USB, and Bluetooth connectivity, power windows, power steering, and manual air conditioning. The seats are covered in fabric upholstery, and the driver's seat is adjustable.The car features a compact and stylish exterior design, with a length of 3,545 mm, a width of 1,490 mm, and a height of 1,475 mm. The front of the car features a chrome grille, halogen headlamps, and body-colored bumpers. The car rides on 13-inch steel wheels with full wheel covers.",
      page_navigation: 'details',
      spec: [
        {item_spec: 'Boot Space', value: '214 L'},
        {
          item_spec: 'Dimensions',
          value: '3530 mm x 1490 mm x 1520 mm (L x W x H)',
        },
        {item_spec: 'Wheel Size', value: '14-inch'},
        {item_spec: 'Tyre Size', value: '145/80 R13'},
        {
          item_spec: 'Suspension',
          value:
            'McPherson Strut with Coil Spring (Front), 3-Link Rigid (Rear)',
        },
        {item_spec: 'Brakes', value: 'Front Disc and Rear Drum'},
        {item_spec: 'Fuel Efficiency', value: '24.9 km/l'},
        {item_spec: 'Transmission', value: '5-Speed AGS (Auto Gear Shift)'},
        {item_spec: 'Max Torque', value: '89 Nm @ 3500 rpm'},
        {item_spec: 'Max Power', value: '49 kW @ 5500 rpm'},
        {item_spec: 'Engine', value: '1.0L Petrol'},
        {item_spec: 'Gross Vehicle Weight', value: '1150 Kg'},
        {item_spec: 'Seating Capacity', value: '5'},
        {item_spec: 'Turning Radius', value: '4.5m'},
      ],
    },
  ],
};

export interface ColorCarApiResponse {
  data: ColorCarCard[];
}

export interface ColorCarCard {
  id: number;
  title: string;
  subtitle: string;
  itemlist: number;
  color: string;
  price: number;
  ex_price: number;
  images: string[];
  description: string;
  about: string;
  page_navigation: string;
  spec: Spec[];
}

export interface Spec {
  item_spec: string;
  value: string;
}

export const ColorCarCardCategoryData: ColorCarApiResponse = {
  data: [
    {
      id: 1,
      title: 'Item 1',
      subtitle: 'Subtitle 1',
      itemlist: 10,
      color: '#FF5733',
      price: 100,
      ex_price: 120,
      images: [
        'https://assets.kalyanicrm.com/ALTOK10/ALTO-grey.png',
        'https://assets.kalyanicrm.com/AltoK10/Alto_k10_1.jpg',
        'https://assets.kalyanicrm.com/AltoK10/Alto_k10_2.jpg',
      ],
      description: 'Description for Item 1',
      about: 'About Item 1',
      page_navigation: 'Page1',
      spec: [
        {item_spec: 'Weight', value: '1kg'},
        {item_spec: 'Dimension', value: '10x10x10cm'},
      ],
    },
    {
      id: 2,
      title: 'Item 2',
      subtitle: 'Subtitle 2',
      itemlist: 5,
      color: '#33FF57',
      price: 200,
      ex_price: 220,
      images: [
        'https://assets.kalyanicrm.com/ALTOK10/ALTO-red.png',
        'https://assets.kalyanicrm.com/AltoK10/Alto_k10_1.jpg',
        'https://assets.kalyanicrm.com/AltoK10/Alto_k10_2.jpg',
      ],
      description: 'Description for Item 2',
      about: 'About Item 2',
      page_navigation: 'Page2',
      spec: [
        {item_spec: 'Weight', value: '2kg'},
        {item_spec: 'Dimension', value: '20x20x20cm'},
      ],
    },
    {
      id: 3,
      title: 'Item 2',
      subtitle: 'Subtitle 2',
      itemlist: 5,
      color: '#33FF57',
      price: 200,
      ex_price: 220,
      images: [
        'https://assets.kalyanicrm.com/ALTOK10/ALTO-black.png',
        'https://assets.kalyanicrm.com/AltoK10/Alto_k10_1.jpg',
      ],
      description: 'Description for Item 2',
      about: 'About Item 2',
      page_navigation: 'Page2',
      spec: [
        {item_spec: 'Weight', value: '2kg'},
        {item_spec: 'Dimension', value: '20x20x20cm'},
      ],
    },
  ],
};

export interface VariantsCardsDataApiResponce {
  data: VariantsCardsData[];
}

export interface VariantsCardsData {
  id: number;
  title_for_price: string;
  title: string;
  subtitle: string;
  color: string;
  ex_price: number;
  price: number;
  images: string[];
  description: string;
  about: string;
  page_navigation: string;
  isActive: boolean;
  itemlist: number;
  channel: number;
}

export const VariantsCardsDataList: VariantsCardsDataApiResponce = {
  data: [
    {
      id: 1,
      title_for_price: 'MARUTI ALTO K10 VXI+ 1L AGS',
      title: 'ALTO K10 VXI+ 1L AGS',
      subtitle: 'Metallic Midnight Black',
      color: 'Metallic Midnight Black',
      ex_price: 585000.0,
      price: 585000.0,
      images: [
        'https://assets.kalyanicrm.com/AltoK10/pearl-midnight-black.png',
        'https://assets.kalyanicrm.com/AltoK10/Alto_k10_1.jpg',
      ],
      description: 'The Maruti ALTO K10',
      about: 'The Maruti ALTO K10',
      page_navigation: '',
      isActive: true,
      itemlist: 216,
      channel: 1,
    },
    {
      id: 2,
      title_for_price: 'MARUTI ALTO K10 VXI+ 1L AGS',
      title: 'ALTO K10 VXI CNG 1L 5MT',
      subtitle: 'Metallic Midnight Black',
      color: 'Metallic Midnight Black',
      ex_price: 596000.0,
      price: 585000.0,
      images: [
        'https://assets.kalyanicrm.com/ALTOK10/ALTO-red.png',
        'https://assets.kalyanicrm.com/AltoK10/pearl-midnight-black.png',
        'https://assets.kalyanicrm.com/AltoK10/Alto_k10_1.jpg',
      ],
      description: 'The Maruti ALTO K10',
      about: 'The Maruti ALTO K10',
      page_navigation: '',
      isActive: true,
      itemlist: 216,
      channel: 1,
    },
    {
      id: 3,
      title_for_price: 'MARUTI ALTO K10 VXI+ 1L AGS',
      title: 'ALTO K10 VXI CNG 1L 5MT',
      subtitle: 'Metallic Midnight Black',
      color: 'Metallic Midnight Black',
      ex_price: 596000.0,
      price: 585000.0,
      images: [
        'https://assets.kalyanicrm.com/ALTOK10/ALTO-red.png',
        'https://assets.kalyanicrm.com/AltoK10/pearl-midnight-black.png',
        'https://assets.kalyanicrm.com/AltoK10/Alto_k10_1.jpg',
      ],
      description: 'The Maruti ALTO K10',
      about: 'The Maruti ALTO K10',
      page_navigation: '',
      isActive: true,
      itemlist: 216,
      channel: 1,
    },
  ],
};
