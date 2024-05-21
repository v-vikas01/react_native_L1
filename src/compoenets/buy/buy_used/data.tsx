export interface ItemType {
  mainType: string;
  name: string;
  items: {id: number; name: string; logo: any}[];
}

export const types: ItemType[] = [
  {
    mainType: 'Brand',
    name: 'Brand',
    items: [
      {
        id: 1,
        name: 'Mercedes Benz',
        logo: require('../../../../assets/buy_sell/buy1.png'),
      },
      {
        id: 2,
        name: 'BMW',
        logo: require('../../../../assets/buy_sell/buy2.png'),
      },
      {
        id: 3,
        name: 'Ford',
        logo: require('../../../../assets/buy_sell/buy3.png'),
      },
      {
        id: 4,
        name: 'Mercedes Benz',
        logo: require('../../../../assets/buy_sell/buy1.png'),
      },
      {
        id: 5,
        name: 'BMW',
        logo: require('../../../../assets/buy_sell/buy2.png'),
      },
      {
        id: 6,
        name: 'Ford',
        logo: require('../../../../assets/buy_sell/buy3.png'),
      },
      {
        id: 7,
        name: 'Mercedes Benz',
        logo: require('../../../../assets/buy_sell/buy1.png'),
      },
      {
        id: 8,
        name: 'BMW',
        logo: require('../../../../assets/buy_sell/buy2.png'),
      },
      {
        id: 9,
        name: 'Ford',
        logo: require('../../../../assets/buy_sell/buy3.png'),
      },
      {
        id: 10,
        name: 'Mercedes Benz',
        logo: require('../../../../assets/buy_sell/buy1.png'),
      },
      {
        id: 11,
        name: 'Ford',
        logo: require('../../../../assets/buy_sell/buy3.png'),
      },
      {
        id: 12,
        name: 'Mercedes Benz',
        logo: require('../../../../assets/buy_sell/buy1.png'),
      },
    ],
  },
  {
    mainType: 'Model',
    name: 'Model',
    items: [
      {id: 1, name: 'Fiestra', logo: null},
      {id: 2, name: 'Figo', logo: null},
      {id: 3, name: 'Ecosport', logo: null},
      {id: 4, name: 'Endeavour', logo: null},
      {id: 5, name: 'Ikon', logo: null},
      {id: 6, name: 'Mustang', logo: null},
    ],
  },
  {
    mainType: 'Fuel',
    name: 'Fuel',
    items: [
      {id: 1, name: 'Petrol', logo: null},
      {id: 2, name: 'CNG', logo: null},
      {id: 3, name: 'Diesel', logo: null},
      {id: 4, name: 'Electric', logo: null},
    ],
  },
  {
    mainType: 'Transmission',
    name: 'Transmission',
    items: [
      {id: 1, name: 'Manual', logo: null},
      {id: 2, name: 'Automatic', logo: null},
    ],
  },
  {
    mainType: 'Year',
    name: 'Year',
    items: [
      {id: 1, name: '2001', logo: null},
      {id: 2, name: '2005', logo: null},
      {id: 3, name: '2010', logo: null},
      {id: 4, name: '2015', logo: null},
      {id: 5, name: '2020', logo: null},
      {id: 6, name: '2022', logo: null},
      {id: 7, name: '2023', logo: null},
      {id: 8, name: '2024', logo: null},
    ],
  },
  {
    mainType: 'Kilometers',
    name: 'Kilometers',
    items: [
      {id: 1, name: '10,000Km or less', logo: null},
      {id: 2, name: '30,000Km or less', logo: null},
      {id: 3, name: '50,000Km or less', logo: null},
      {id: 4, name: '75,000Km or less', logo: null},
      {id: 5, name: '1,00,000Km or less', logo: null},
      {id: 6, name: '1,25,000Km or less', logo: null},
      {id: 7, name: '1,50,000Km or less', logo: null},
    ],
  },
  {
    mainType: 'Price',
    name: 'Price',
    items: [
      {id: 1, name: 'Upto 2Lakhs', logo: null},
      {id: 2, name: 'Upto 4Lakhs', logo: null},
      {id: 3, name: 'Upto 6Lakhs', logo: null},
      {id: 4, name: 'Upto 8Lakhs', logo: null},
      {id: 5, name: 'Upto 12Lakhs', logo: null},
      {id: 6, name: 'Upto 20Lakhs', logo: null},
      {id: 7, name: 'Upto 25Lakhs', logo: null},
    ],
  },
];

export interface HederTypesItem {
  mainType: string;
  name: string;
  id: number;
}

export const HederTypes: HederTypesItem[] = [
  {
    mainType: 'Brand',
    name: 'Brand',
    id: 1,
  },
  {
    mainType: 'Model',
    name: 'Model',
    id: 2,
  },
  {
    mainType: 'Fuel',
    name: 'Fuel',
    id: 3,
  },
  {
    mainType: 'Transmission',
    name: 'Transmission',
    id: 4,
  },
  {
    mainType: 'Year',
    name: 'Year',
    id: 5,
  },
  {
    mainType: 'Kilometers',
    name: 'Kilometers',
    id: 6,
  },
  {
    mainType: 'Price',
    name: 'Price',
    id: 7,
  },
];
export interface SubmitItemType {
  mainType: string;
  selectedName: string;
}

export const slectedtypes: SubmitItemType[] = [
  {
    mainType: 'Brand',
    selectedName: '',
  },
  {
    mainType: 'Model',
    selectedName: '',
  },
  {
    mainType: 'Fuel',
    selectedName: '',
  },
  {
    mainType: 'Transmission',
    selectedName: '',
  },
  {
    mainType: 'Year',
    selectedName: '',
  },
  {
    mainType: 'Kilometers',
    selectedName: '',
  },
  {
    mainType: 'Price',
    selectedName: '',
  },
];
