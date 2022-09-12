// Генерация случайного числа
const getRandomInt =  (min, max) => {
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
const createRandomNamber = (min, max) => {
  if (min < 0 || max < 0) {
  return -1;
  } else if (max === min) {
    return min;
  }
  return (Math.random() * (max - min) + min).toFixed(2);
};


console.log(createRandomNamber(1, 10));


//Случайный элемент масива
const getRandomElementArr = (array) => {
  return array[getRandomInt(0, array.length - 1)];
};

export {getRandomInt, createRandomNamber, getRandomElementArr};
