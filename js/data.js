import { getRandomInt, createRandomNamber, getRandomElementArr } from './util.js';

// Список объявлений
const mapAdd = [];

//Количество объявлений
const ADD_COUNT = 10;

// Описывает автора
// const author = {
//   avatar: 'img/avatars/user-' + getRandomInt(1, 10) +'.png'
// };

const title = ['Дорого', 'Нормально', 'Дешего', 'Люкс',];

const Address = {
  MIN: 40,
  MAX: 150,
};

const Price = {
  MIN: 1000,
  MAX: 5000,
};

const type = ['palace', 'flat', 'house', 'bungalow',];

const Rooms = {
  MIN: 1,
  MAX: 10,
};

const Guests = {
  MIN: 1,
  MAX: 10,
};

const Checkin = [
  '12:00',
  '13:00',
  '14:00',
];

const Checkout = [
  '12:00',
  '13:00',
  '14:00',
];

const Features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
]

const Description = [
  'Уютное место для кхм)',
  'Для тех кто приехал на работу',
  'Самое лучшая остановка для путешествиников',
  'Иногда и на такое соглашаются',
]

const Photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
]

const X = {
  MIN: 35.65000,
  MAX: 35.70000,
}

const Y = {
  MIN: 139.70000,
  MAX: 139.80000,
}


const add = () =>  {
  for (let i = 0; i < ADD_COUNT; i++) {
    mapAdd.push({
      avatar: 'img/avatars/user-' + getRandomInt(1, 10) +'.png',
      offer: [{
        title: getRandomElementArr(title),
        address: getRandomInt(Address.MIN, Address.MAX),
        price: getRandomInt(Price.MIN, Price.MAX),
        type: getRandomElementArr(type),
        rooms: getRandomInt(Rooms.MIN, Rooms.MAX),
        guests: getRandomInt(Guests.MIN, Guests.MAX),
        checkin: getRandomElementArr(Checkin),
        checkout: getRandomElementArr(Checkout),
        features: getRandomElementArr(Features),
        description: getRandomElementArr(Description),
        photos: getRandomElementArr(Photos),
      }],
      location: [{
        x: createRandomNamber(X.MIN, X.MAX),
        y: createRandomNamber(Y.MIN, Y.MAX),
      }],
    })
  }
};

add();

export { mapAdd };
