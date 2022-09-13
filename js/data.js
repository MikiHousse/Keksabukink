import { getRandomInt, createRandomNamber, getRandomElementArr } from './util.js';

// Список объявлений
const mapAdds = [];
//Количество объявлений
const MAP_LOCATION = 10;

// Названия объявлений
const TITLE = [
  'Пентхаус',
  'Лофт-отель',
  'Хибара',
  'Шикарная квартира',
  'Простенький домик',
  'Отель с шикарным видом',
  'Необычный дом',
  'Дом с привидениями',
  'Комфортный люкс',
  'Двухкомнотная квартира',
];

// координаты  место расположения
const location = {
  x: createRandomNamber(35.65000, 35.70000),
  y: createRandomNamber(139.70000, 139.80000),
};

// цена
const PRICE = {
  min: 1000,
  max: 5000,
};

// тип
const TYPE = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
};

// комнаты
const ROOMS = {
  min: 1,
  max: 6,
};

// гости
const GUESTS = {
  min: 1,
  max: 8,
};

// время заезда
const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

// время выезда
const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

// приемущества
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

// описание
const DESCRIPTION = [
  'Уютное место для кхм)',
  'Самое лучшая остановка для путешествиников',
  'Иногда и на такое соглашаются',
  'В нашей квартире есть всё что душе угодно',
  'Просто и со вкусом, ничего лишнего',
  'Отсюда шикарный вид на центральную часть города',
  'Тут всё необычно, даже хоязева',
  'Тут обитают призраки, заглядывай',
  'Люкс. Для солидных господ',
  'Сдаётся 2х-комнатная квартира с удобствами',
];

// фото
const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

// функция для генерации элементов в массив madAdds
const generationData = () =>  {
  // создаем цикл для создания объектов массива до значения MAP_LOCATION
  for (let i = 0; i < MAP_LOCATION; i++) {
    // Добавляем элементы в конец массива методом posh
    mapAdds.push({
      author: {
        avatar: 'img/avatars/user0' + i + '.png',
      },
      offer: {
        title: getRandomElementArr(TITLE),
        address: `${location.x}, ${location.y}`,
        price: getRandomInt(PRICE.min, PRICE.max),
        type: getRandomElementArr(Object.values(TYPE)),
        rooms: getRandomInt(ROOMS.min, ROOMS.max),
        guests: getRandomInt(GUESTS.min, GUESTS.max),
        checkin: getRandomElementArr(CHECKIN),
        checkout: getRandomElementArr(CHECKOUT),
        features: getRandomElementArr(FEATURES),
        description: getRandomElementArr(DESCRIPTION),
        photos: getRandomElementArr(PHOTOS),
      },
      location: {
        x: createRandomNamber(35.65000, 35.70000),
        y: createRandomNamber(139.70000, 139.80000),
      },
    })
  }
  return mapAdds;
};

// console.log(add);

generationData();

export { mapAdds };
