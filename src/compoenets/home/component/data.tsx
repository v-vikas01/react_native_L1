export interface TypeCategoryItem {
  id: number;
  title: string;
  description: string;
  image: any;
  position: number;
}

export interface TypeCategoryItemApiResponse {
  data: TypeCategoryItem[];
}

export const TypeCategoryList: TypeCategoryItemApiResponse = {
  data: [
    {
      id: 1,
      title: 'Arena',
      description:
        'Maruti Suzuki Arena is a dealership chain and retail network for Maruti Suzuki cars in India. They offer a wide range of Maruti Suzuki vehicles, including popular models such as the Alto, Swift, Dzire, and Vitara Brezza. Customers can also find financing',
      image: require('../../../../assets/home/cat-type01.png'),
      position: 1,
    },
    {
      id: 7,
      title: 'Nexa',
      description: 'Only for data usage',
      image: require('../../../../assets/home/cat-type02.png'),
      position: 7,
    },
    {
      id: 2,
      title: 'True Value',
      description:
        'Maruti Suzuki Nexa is a premium dealership chain and retail network for Maruti Suzuki cars in India. They offer a wide range of high-end Maruti Suzuki vehicles, including popular models such as the Ciaz, Baleno, S-Cross and Ignis.',
      image: require('../../../../assets/home/cat-type03.png'),
      position: 2,
    },
    {
      id: 4,
      title: 'Service',
      description:
        'Get all your car needs i.e. repairs, maintenance, body repairs, cashless insurance claims insurance renewals, accessories, car care etc.',
      image: require('../../../../assets/home/cat-type04.png'),
      position: 4,
    },
    {
      id: 3,
      title: 'Insurance',
      description: 'Used Cars',
      image: require('../../../../assets/home/cat-type05.png'),
      position: 3,
    },
  ],
};

// export interface TypeCategoryItem {
//   image: any;
//   text: string;
//   subText: string;
// }

// export const TypeCategoryList: TypeCategoryItem[] = [
//   {
//     image: require('../../../../assets/home/cat-type01.png'),
//     text: 'Explore Now',
//     subText: 'Arena',
//   },
//   {
//     image: require('../../../../assets/home/cat-type02.png'),
//     text: 'Explore Now',
//     subText: 'Nexa',
//   },
//   {
//     image: require('../../../../assets/home/cat-type03.png'),
//     text: 'Explore Now',
//     subText: 'TrueValue',
//   },
//   {
//     image: require('../../../../assets/home/cat-type04.png'),
//     text: 'Explore Now',
//     subText: 'Service',
//   },
//   {
//     image: require('../../../../assets/home/cat-type05.png'),
//     text: 'Explore Now',
//     subText: 'Insurance',
//   },
// ];

export interface CardItem {
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

export interface CardsDataApiResponse {
  data: Array<CardItem[]>;
}

export const CardsData: CardsDataApiResponse = {
  data: [
    [
      {
        id: 2207,
        title_for_price: 'XL6 ZETA AT 1.5L 6 AT',
        title: 'XL6 SMARTT',
        subtitle: 'XL6 SMART HYBRID ZETA 1.5L 6AT Brave Khakhi',
        color: 'Brave Khakhi',
        ex_price: 1301000.0,
        price: 1660495.29,
        images: [
          'https://assets.kalyanicrm.com/XL6/xl6_brave-khaki.png',
          'https://assets.kalyanicrm.com/xl6/xl6-1.jpg',
          'https://assets.kalyanicrm.com/xl6/xl6-2.jpg',
          'https://assets.kalyanicrm.com/xl6/xl6-3.jpg',
          'https://assets.kalyanicrm.com/xl6/xl6-4.jpg',
          'https://assets.kalyanicrm.com/xl6/xl6-5.jpg',
          'https://assets.kalyanicrm.com/xl6/xl6-6.jpg',
          'https://assets.kalyanicrm.com/xl6/xl6-7.jpg',
          'https://assets.kalyanicrm.com/xl6/xl6-8.jpg',
          'https://assets.kalyanicrm.com/xl6/xl6-9.jpg',
          'https://assets.kalyanicrm.com/xl6/xl6-10.jpg',
        ],
        description:
          'The Maruti Suzuki XL6 SMART HYBRID ZETA 1.5L 6AT - is a 7-seater compact MPV designed for families and individuals looking for a comfortable, practical, and feature-packed vehicle. This variant is equipped with an automatic transmission and is powered by a 1.5-liter petrol engine that delivers a decent level of performance and fuel efficiency. It features a stylish exterior with a bold grille, body-colored bumpers, and a set of alloy wheels.',
        about:
          "The Maruti Suzuki XL6 SMART HYBRID ZETA 1.5L 6AT - is a compact MPV (Multi Purpose Vehicle) produced by Indian automaker Maruti Suzuki. It is part of the company's XL6 lineup and is positioned as a premium offering. The Zeta AT variant is equipped with an automatic transmission and is powered by a 1.5-liter petrol engine.",
        page_navigation: 'details',
        isActive: true,
        itemlist: 39,
        channel: 2,
      },
    ],
    [
      {
        id: 1972,
        title_for_price: 'GRAND VITARA SMART HYBRID SIGMA',
        title: 'GRAND VITARA SMART HYBRID SIGMA 1.5L 5MT',
        subtitle: 'GRAND VITARA SMART HYBRID SIGMA 1.5L 5MT Grandeur Grey',
        color: 'Grandeur Grey',
        ex_price: 1099000.0,
        price: 1417248.31,
        images: [
          'https://assets.kalyanicrm.com/Grand-Vitara/Grand-Vitara-grandeur-grey.png',
          'https://assets.kalyanicrm.com/grand-vitara/grand-vitara-1.jpg',
          'https://assets.kalyanicrm.com/grand-vitara/grand-vitara-2.jpg',
          'https://assets.kalyanicrm.com/grand-vitara/grand-vitara-4.jpg',
          'https://assets.kalyanicrm.com/grand-vitara/grandVitara1.jpg',
          'https://assets.kalyanicrm.com/grand-vitara/grandVitara2.jpg',
          'https://assets.kalyanicrm.com/grand-vitara/grandVitara3.jpg',
          'https://assets.kalyanicrm.com/grand-vitara/grandVitara4.jpg',
          'https://assets.kalyanicrm.com/grand-vitara/grandVitara5.jpg',
          'https://assets.kalyanicrm.com/grand-vitara/grandVitara6.jpg',
          'https://assets.kalyanicrm.com/grand-vitara/grandVitara7.jpg',
        ],
        description:
          'Maruti GRAND VITARA SMART HYBRID SIGMA 1.5L 5MT - is the mild hybrid(electric + petrol) variant. It returns a certified mileage of 21.11 kmpl. This Sigma Smart Hybrid variant comes with an engine putting out 75.8kw @ 6000 rpm and 136.8 Nm @ 4400 rpm of max power and max torque respectively. Maruti Grand Vitara Sigma Smart Hybrid is available in Manual transmission.',
        about:
          'The Maruti Suzuki GRAND VITARA SMART HYBRID SIGMA 1.5L 5MT - is a variant of the Maruti Suzuki Grand Vitara, a compact SUV manufactured by Indian automaker Maruti Suzuki. The "SIGMA" in the name indicates that it is a base trim level of the Grand Vitara. The Grand Vitara SIGMA is a feature-rich vehicle that comes with safety features such as airbags, ABS with EBD, and hill hold control, among others.',
        page_navigation: 'details',
        isActive: true,
        itemlist: 35,
        channel: 2,
      },
    ],
    [
      {
        id: 11574,
        title_for_price: 'JIMNY ALPHA ALLGRIP PRO 1.5L 5MT ISS',
        title: 'JIMNY ISS ALPHA ALLGRIP PRO 1.5L 5MT',
        subtitle: 'JIMNY ISS ALPHA ALLGRIP PRO 1.5L 5MT Granite Grey',
        color: 'Granite Grey',
        ex_price: 1369000.0,
        price: 1763068.0,
        images: [
          'https://assets.kalyanicrm.com/Jimny/Jimny_Granite-Grey.png',
          'https://assets.kalyanicrm.com/jimny/jimny-1.jpg',
          'https://assets.kalyanicrm.com/jimny/jimny-2.jpg',
          'https://assets.kalyanicrm.com/jimny/jimny-3.jpg',
          'https://assets.kalyanicrm.com/jimny/jimny-4.jpg',
          'https://assets.kalyanicrm.com/jimny/jimny-5.jpg',
          'https://assets.kalyanicrm.com/jimny/jimny-6.jpg',
          'https://assets.kalyanicrm.com/jimny/jimny-7.jpg',
          'https://assets.kalyanicrm.com/jimny/jimny-8.jpg',
          'https://assets.kalyanicrm.com/jimny/jimny-9.jpg',
          'https://assets.kalyanicrm.com/jimny/jimny-10.jpg',
          'https://assets.kalyanicrm.com/jimny/jimny-11.jpg',
          'https://assets.kalyanicrm.com/jimny/jimny-12.jpg',
          'https://assets.kalyanicrm.com/jimny/jimny-13.jpg',
        ],
        description:
          'The Maruti JIMNY ISS ALPHA ALLGRIP PRO 1.5L 5MT - features a boxy and rugged design with clean lines and a compact footprint. It typically showcases a distinctive front grille, round headlights, chunky wheel arches, and a spare tire mounted on the rear. Its compact size makes it maneuverable and well-suited for urban environments, while its robust design hints at its off-road capabilities.\nInside the cabin, the Maruti Jimny offers a practical and functional layout. It typically provides seating for four passengers, with supportive seats and ample headroom and legroom. The interior design is focused on durability and usability, with storage compartments and flexible seating arrangements to accommodate different cargo needs.',
        about:
          'The Maruti JIMNY ISS ALPHA ALLGRIP PRO 1.5L 5MT - is known for its capable performance both on and off the road. It usually comes equipped with a robust four-wheel-drive system that allows it to tackle various terrains and challenging conditions. The specific engine options and drivetrain configurations can vary based on the market and model year, providing a balance of power and efficiency.\nhe Maruti Jimny typically includes a range of features aimed at convenience, comfort, and safety. These may include modern infotainment systems with touchscreen displays, smartphone connectivity, air conditioning, power windows, and keyless entry. Safety features may include multiple airbags, anti-lock braking system (ABS), electronic stability control (ESC), and hill hold assist.',
        page_navigation: 'details',
        isActive: true,
        itemlist: 42,
        channel: 2,
      },
    ],
  ],
};

export interface SubCardItem {
  id: number;
  title: string;
  name: string;
  description: string;
  price: number;
  category: number;
  page_navigation: string;
  images: string[];
}

export interface SubCardsDataApiResponse {
  data: SubCardItem[];
}

export const SubCardsData: SubCardsDataApiResponse = {
  data: [
    {
      id: 216,
      title: 'Maruti Suzuki Alto K10',
      name: 'Alto K10',
      description:
        '"The Maruti Suzuki Alto K10 is a popular hatchback known for its compact size, fuel efficiency, and affordability. It is a variant of the Maruti Suzuki Alto, offering a more powerful engine and additional features compared to the standard Alto model.\n\nThe Alto K10 is powered by a 1.0-liter K-Series petrol engine, which provides a peppy and responsive performance. This engine offers a good balance of power and fuel efficiency, making it suitable for both city commutes and highway drives. The car delivers a smooth driving experience, allowing for easy maneuverability in congested urban areas."',
      price: 354000.0,
      category: 1,
      page_navigation: 'varients',
      images: ['https://assets.kalyanicrm.com/ALTOK10/ALTO-home.png'],
    },
    {
      id: 216,
      title: 'Maruti Suzuki Alto K10',
      name: 'Alto K10',
      description:
        '"The Maruti Suzuki Alto K10 is a popular hatchback known for its compact size, fuel efficiency, and affordability. It is a variant of the Maruti Suzuki Alto, offering a more powerful engine and additional features compared to the standard Alto model.\n\nThe Alto K10 is powered by a 1.0-liter K-Series petrol engine, which provides a peppy and responsive performance. This engine offers a good balance of power and fuel efficiency, making it suitable for both city commutes and highway drives. The car delivers a smooth driving experience, allowing for easy maneuverability in congested urban areas."',
      price: 354000.0,
      category: 1,
      page_navigation: 'varients',
      images: ['https://assets.kalyanicrm.com/ALTOK10/ALTO-home.png'],
    },
    {
      id: 32,
      title: 'Maruti Suzuki Brezza',
      name: 'Brezza',
      description:
        'The Maruti Suzuki Brezza 2022 is a stylish and practical compact SUV with a spacious cabin, advanced features and excellent fuel efficiency. It offers a sleek exterior design, advanced technology and a fuel-efficient engine. Advanced safety features include ABS, airbags, and hill hold control. With its spacious and comfortable cabin, the Brezza 2022 is a reliable and practical choice for car buyers looking for a compact SUV.',
      price: 819000.0,
      category: 1,
      page_navigation: 'varients',
      images: ['https://assets.kalyanicrm.com/Brezza/new_brezza_home.png'],
    },
    {
      id: 29,
      title: 'Maruti Suzuki Celerio',
      name: 'Celerio',
      description:
        'The All-New Celerios Comes With New Advanced Steering Mounted Controls,along With other advanced features like auto-gear shift,Engine push start-stop button.all varients of celerio comes with spacious cabin.',
      price: 535000.0,
      category: 1,
      page_navigation: 'varients',
      images: ['https://assets.kalyanicrm.com/Celerio/celerio-speedy-blue.png'],
    },
    {
      id: 31,
      title: 'Maruti Suzuki Dzire',
      name: 'Dzire',
      description:
        'The new Dzire gets the 1.2L 4-cylinder (petrol) engine, which offers 83bhp of power and a peak torque of 113Nm, and a 1.3L 4-cylinder (diesel) engine, producing 75bhp of power and 190Nm of torque.The Maruti Dzire manages to deliver 23.26kmpl mileage (ARAI-certified) with the manual gearbox variant and 24.12kmpl mileage (ARAI-certified) with the AMT gearbox variant.',
      price: 644000.0,
      category: 1,
      page_navigation: 'varients',
      images: ['https://assets.kalyanicrm.com/Dzire/dzire-oxford-blue.png'],
    },
    {
      id: 30,
      title: 'Maruti Suzuki Eeco',
      name: 'Eeco',
      description:
        'The 1.2 L Advanced K-Series Dual Jet, Dual VVT Engine delivers peak-power of 59.4 kW (80.96 PS) @6000rpm and max-torque of 104.4 Nm @3000rpm; making the New Eeco more powerful and more fuel-efficient.',
      price: 463200.0,
      category: 1,
      page_navigation: 'varients',
      images: ['https://assets.kalyanicrm.com/Eeco/eeco-cerulean-blue.png'],
    },
    {
      id: 36,
      title: 'Maruti Suzuki Ertiga',
      name: 'Ertiga',
      description:
        'The 1.2 L Advanced K-Series Dual Jet, Dual VVT Engine delivers peak-power of 59.4 kW (80.96 PS) @6000rpm and max-torque of 104.4 Nm @3000rpm; making the New Eeco more powerful and more fuel-efficient.',
      price: 849000.0,
      category: 1,
      page_navigation: 'varients',
      images: ['https://assets.kalyanicrm.com/Ertiga/Ertiga-auburn-red.png'],
    },
    {
      id: 34,
      title: 'Maruti Suzuki S-Presso',
      name: 'S-Presso',
      description:
        'The S-Presso is powered by a 1.0-liter, 3-cylinder K10B petrol engine that produces 67 horsepower and 90 Nm of torque. It comes with a 5-speed manual transmission and an optional 5-speed AMT. It has a fuel efficiency of 21.7 km/l.',
      price: 425000.0,
      category: 1,
      page_navigation: 'varients',
      images: [
        'https://assets.kalyanicrm.com/S-Presso/spresso-solid-sizzle-orange.png',
      ],
    },
    {
      id: 217,
      title: 'Maruti Suzuki Super Carry',
      name: 'Super Carry',
      description:
        '"The Maruti Suzuki Super Carry is a compact and versatile commercial vehicle designed for small business owners and commercial enterprises. It provides a reliable and efficient transportation solution for carrying goods, making it a popular choice in the commercial vehicle segment.\n\nThe Super Carry features a functional and practical design, optimized for commercial use. It has a robust and durable body construction, ensuring the ability to withstand heavy loads and tough operating conditions. The compact dimensions of the Super Carry make it easy to navigate through narrow streets and congested urban areas, enabling efficient deliveries and pickups.\n\nOne of the key highlights of the Super Carry is its spacious cargo area. It offers ample storage space for transporting goods, with a flat load bed and sturdy side panels. The cargo area can be customized with additional accessories and modifications to suit specific business requirements, making it a versatile vehicle for a wide range of commercial applications."',
      price: 515500.01,
      category: 1,
      page_navigation: 'varients',
      images: ['https://assets.kalyanicrm.com/superCarry/supercarry_home.png'],
    },
    {
      id: 28,
      title: 'Maruti Suzuki Swift',
      name: 'Swift',
      description:
        'The Swift is a compact car that is known for its fuel efficiency and sporty design. It is available in both petrol and diesel engine options and comes in a variety of trim levels. The car is primarily sold in the Indian market and is one of the most popular car models in the country.',
      price: 599450.0,
      category: 1,
      page_navigation: 'varients',
      images: ['https://assets.kalyanicrm.com/SWIFT/swift-home.png'],
    },
    {
      id: 38,
      title: 'Maruti Suzuki Wagon R',
      name: 'Wagon R',
      description:
        "Maruti Suzuki New WagonR's Engine. 998 cc, 3 Cylinders Inline, 4 Valves/Cylinder, DOHC.Maruti Suzuki WagonR's mileage is dictated by the engine option you choose. So, while the 1.0L petrol engine delivers a mileage of 24.35 km/l (Manual) and 25.19 km/l (Automatic), the 1.2L engine delivers a fuel-efficiency of 23.56 km/l (Manual) and 24.43 km/l (Automatic).",
      price: 553000.0,
      category: 1,
      page_navigation: 'varients',
      images: ['https://assets.kalyanicrm.com/WagonR/WagonR_Silky_Silver.png'],
    },
  ],
};

export interface ReviewVideoItem {
  image: any;
  text: string;
}

export const ReviewVideoData: ReviewVideoItem[] = [
  {
    image: require('../../../../assets/home/video1.png'),
    text: 'Maruti Suzuki Jimny',
  },
  {
    image: require('../../../../assets/home/video2.png'),
    text: 'Grand Vitara',
  },
  {
    image: require('../../../../assets/home/video1.png'),
    text: 'Maruti Suzuki Jimny',
  },
  {
    image: require('../../../../assets/home/video2.png'),
    text: 'Grand Vitara',
  },
  {
    image: require('../../../../assets/home/video1.png'),
    text: 'Maruti Suzuki Jimny',
  },
];

export interface BannerData {
  id: number;
  banner_img: any;
  position: string;
  type: number;
  city: string;
  created_at: null | string;
  updated_at: null | string;
}

export const bannerDummyData: BannerData[] = [
  {
    id: 233,
    banner_img: require('../../../../assets/home/background-banner.png'),
    position: '1',
    type: 1,
    city: 'bengaluru',
    created_at: null,
    updated_at: null,
  },
  {
    id: 234,
    banner_img: require('../../../../assets/home/background-banner1.png'),
    position: '1',
    type: 1,
    city: 'mysore',
    created_at: null,
    updated_at: null,
  },
  {
    id: 50,
    banner_img: require('../../../../assets/home/background-banner.png'),
    position: '14',
    type: 1,
    city: 'mysore',
    created_at: null,
    updated_at: null,
  },
  {
    id: 234,
    banner_img: require('../../../../assets/home/background-banner1.png'),
    position: '1',
    type: 1,
    city: 'mysore',
    created_at: null,
    updated_at: null,
  },
];

export const images: any[] = [
  require('../../../../assets/home/background-banner.png'),
  require('../../../../assets/home/background-banner1.png'),
  require('../../../../assets/home/background-banner.png'),
  require('../../../../assets/home/background-banner1.png'),
];

export const imagesBanners: any[] = [
  require('../../../../assets/home/banner1.png'),
  require('../../../../assets/home/banner2.png'),
  require('../../../../assets/home/banner3.png'),
];

export interface BannerItems {
  image: any;
  text: string;
  subText: string;
  buttonText: string;
}

export const BannerList: BannerItems[] = [
  {
    image: require('../../../../assets/home/banner01.png'),
    text: 'Insurance Expiring?',
    subText: 'Get Hassle Free Renewal',
    buttonText: 'Renew Now',
  },
  {
    image: require('../../../../assets/home/banner02.png'),
    text: 'Payment Request !',
    subText: 'You have 2 unpaid requests',
    buttonText: 'Pay Now',
  },
  {
    image: require('../../../../assets/home/banner03.png'),
    text: 'Due For Service ?',
    subText: 'Give your car the care it deserves',
    buttonText: 'Book Service',
  },
];
