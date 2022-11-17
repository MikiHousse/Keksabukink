// Генерация случайного числа
const getRandomNum =  (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }
// условия для понимания меньше ли максимум минимума если да то менеет их местами
  if (max < min) {
    [min, max] = [max, min];
  }
// возвращает случайное уелое число в диапозоне округленное в меньшую сторнону
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Генерация числа  с плавающей точкой
const getFloatNum = (min, max) => {
  if (min < 0 || max < 0) {
  return -1;
  } else if (max === min) {
    return min;
  }
  return (Math.random() * (max - min) + min).toFixed(2);
};

console.log(getFloatNum(1, 10));

//Случайный элемент масива
const getRandomElementArr = (array) => {
  return array[getRandomNum(0, array.length - 1)];
};

// Сортировка массива случайно длины
const getSortingArr = (arr) => arr.slice(getRandomNum(0, arr.length - 1));
// Создание отдельных DOM элементов
const createElement = (tagName, parentTag, classOne, classTwo, text, width, height, src, alt) => {
  let element = document.createElement(tagName);
  element.classList.add(classOne);

  if (parentTag) {
    parentTag.appendChild(element);
  }

  if (classTwo) {
    element.classList.add(classTwo);
  }

  if (text) {
    element.textContent = text;
  }

  if (width && height && src && alt) {
    element.setAttribute('width', width);
    element.setAttribute('height', height);
    element.setAttribute('src', src);
    element.setAttribute('alt', alt);
  }
  return element
};

const isEscEvt = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc'
};

export {getRandomNum, getFloatNum, getRandomElementArr, getSortingArr, createElement, isEscEvt};
