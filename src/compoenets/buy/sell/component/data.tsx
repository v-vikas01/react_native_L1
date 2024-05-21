export interface SellCarBrandSelect {
  data: brandItems[];
}

export interface brandItems {
  id: number;
  title: string;
  name: null;
  description: null;
  price: number;
  category: number;
  page_navigation: string;
  images: string[];
}

export interface SellCarModuleSelect {
  data: moduleItem[];
}

export interface moduleItem {
  id: number;
  // title_for_price: string;
  title: string;
  // subtitle: string;
  // color: string;
  // ex_price: number;
  // price: number;
  // images: null;
  // description: null;
  // about: null;
  // page_navigation: string;
  // isActive: boolean;
  // itemlist: number;
  // channel: number;
}

export interface AddressSelectList {
  profile_address: addressItem[];
}

export interface addressItem {
  id: number;
  type_of_address: string;
  // door_no: string;
  street: string;
  // area: null;
  // city: null;
  // landmark: null;
  // pincode: string;
  // lat: string;
  // long: string;
  // status: number;
  // profile: number;
}

export const SellCarBrandSelectList: SellCarBrandSelect = {
  data: [
    {
      id: 1,
      title: 'Benz',
      price: 585000.0,
      images: [
        'https://assets.kalyanicrm.com/used-cars/Brand_logo/benz-logo.png',
      ],
      page_navigation: '',
      category: 1,
      description: null,
      name: null,
    },
    {
      id: 2,
      title: 'Chevrolet',
      price: 585000.0,
      images: [
        'https://assets.kalyanicrm.com/used-cars/Brand_logo/chevrolet-logo.png',
      ],
      page_navigation: '',
      category: 1,
      description: null,
      name: null,
    },
    {
      id: 3,
      title: 'Fiat',
      price: 585000.0,
      images: [
        'https://assets.kalyanicrm.com/used-cars/Brand_logo/ford-logo.png',
      ],
      page_navigation: '',
      category: 1,
      description: null,
      name: null,
    },
    {
      id: 4,
      title: 'Hyundai',
      price: 585000.0,
      images: [
        'https://assets.kalyanicrm.com/used-cars/Brand_logo/hyundai-logo.png',
      ],
      page_navigation: '',
      category: 1,
      description: null,
      name: null,
    },
    {
      id: 5,
      title: 'Mahindra',
      price: 585000.0,
      images: [
        'https://assets.kalyanicrm.com/used-cars/Brand_logo/mahindra-logo.png',
      ],
      page_navigation: '',
      category: 1,
      description: null,
      name: null,
    },
    {
      id: 6,
      title: 'Maruti Suzuki',
      price: 585000.0,
      images: [
        'https://assets.kalyanicrm.com/used-cars/Brand_logo/maruti-suzuki-logo.png',
      ],
      page_navigation: '',
      category: 1,
      description: null,
      name: null,
    },
    {
      id: 11,
      title: 'Benz',
      price: 585000.0,
      images: [
        'https://assets.kalyanicrm.com/used-cars/Brand_logo/benz-logo.png',
      ],
      page_navigation: '',
      category: 1,
      description: null,
      name: null,
    },
    {
      id: 12,
      title: 'Chevrolet',
      price: 585000.0,
      images: [
        'https://assets.kalyanicrm.com/used-cars/Brand_logo/chevrolet-logo.png',
      ],
      page_navigation: '',
      category: 1,
      description: null,
      name: null,
    },

    {
      id: 54,
      title: 'Hyundai',
      price: 585000.0,
      images: [
        'https://assets.kalyanicrm.com/used-cars/Brand_logo/hyundai-logo.png',
      ],
      page_navigation: '',
      category: 1,
      description: null,
      name: null,
    },
    {
      id: 55,
      title: 'Mahindra',
      price: 585000.0,
      images: [
        'https://assets.kalyanicrm.com/used-cars/Brand_logo/mahindra-logo.png',
      ],
      page_navigation: '',
      category: 1,
      description: null,
      name: null,
    },
    {
      id: 16,
      title: 'Maruti Suzuki',
      price: 585000.0,
      images: [
        'https://assets.kalyanicrm.com/used-cars/Brand_logo/maruti-suzuki-logo.png',
      ],
      page_navigation: '',
      category: 1,
      description: null,
      name: null,
    },
  ],
};

export const SellCarModuleSelectList: SellCarModuleSelect = {
  data: [
    {
      id: 1,
      title: 'SLS Class',
    },
    {
      id: 2,
      title: 'S Class',
    },
    {
      id: 3,
      title: 'Ml Class',
    },
    {
      id: 4,
      title: 'SS Class',
    },
    {
      id: 5,
      title: 'LS Class',
    },
    {
      id: 6,
      title: 'Ss Class',
    },

    {
      id: 7,
      title: 'XS Class',
    },
    {
      id: 8,
      title: 'MSLS Class',
    },
    {
      id: 9,
      title: 'SBLS Class',
    },
  ],
};

export const AddressList: AddressSelectList = {
  profile_address: [
    {
      id: 1,
      street:
        'WGHR+4H6, Hrushikesh Nagar, Dattatreya Nagar, Hosakerehalli, Bengaluru, Karnataka 560085, India',
      type_of_address: 'Home',
    },
    {
      id: 2,
      street: 'WGHR+4H6,  Bengaluru, Karnataka 560085, India',
      type_of_address: 'Home',
    },
  ],
};

export interface selectSoltItem {
  time: any;
  id: number;
}

export const selectSlotList: selectSoltItem[] = [
  {
    time: '9 AM - 10 AM',
    id: 1,
  },
  {
    time: '10 AM - 11 AM',
    id: 2,
  },
  {
    time: '11 AM - 12 PM',
    id: 3,
  },
  {
    time: '12 AM - 1 PM',
    id: 4,
  },
  {
    time: '2 AM - 3 PM',
    id: 5,
  },
  {
    time: '3 AM - 4 PM',
    id: 6,
  },
  {
    time: '4 AM - 5 PM',
    id: 7,
  },
  {
    time: '5 AM - 6 PM',
    id: 8,
  },
];
