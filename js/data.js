import { getRandomNum, getFloatNum, getRandomElementArr, getSortingArr} from './util.js';
//Количество объявлений
const MAP_LOCATION = 10;
// Список объявлений
const mapAdds = [];

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
  x: getFloatNum(35.65000, 35.70000),
  y: getFloatNum(139.70000, 139.80000),
};

// цена
const PRICE = {
  min: 1000,
  max: 5000,
};

// тип
const TYPE = {
  hotel: 'Отель',
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
    // Добавляем элементы в конец массива методом push
    mapAdds.push({
      author: {
        avatar: 'img/avatars/user0' + i + '.png',
      },
      offer: {
        title: getRandomElementArr(TITLE),
        address: `${location.x}, ${location.y}`,
        price: getRandomNum(PRICE.min, PRICE.max),
        type: getRandomElementArr(Object.values(TYPE)),
        rooms: getRandomNum(ROOMS.min, ROOMS.max),
        guests: getRandomNum(GUESTS.min, GUESTS.max),
        checkin: getRandomElementArr(CHECKIN),
        checkout: getRandomElementArr(CHECKOUT),
        features: getSortingArr(FEATURES),
        description: getRandomElementArr(DESCRIPTION),
        photos: getRandomElementArr(PHOTOS),
      },
      location: {
        x: getFloatNum(35.65000, 35.70000),
        y: getFloatNum(139.70000, 139.80000),
      },
    })
  }
  return mapAdds;
};

// console.log(generationData());
generationData();

export {mapAdds};
