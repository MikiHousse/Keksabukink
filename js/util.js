const getRandomInt = function (min, max) {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};



//Генерация числа с плавающей точкой
const createRandomNamber = (min, max) => {
  if (min < 0 || max < 0) {
  return -1;
  } else if (max === min) {
    return min;
  }
  return Math.random() * (max - min) + min;
};


//Случайный элемент масива

const getRandomElementArr = (array) => {
  return array[getRandomInt(0, array.length - 1)];
};



export {getRandomInt, createRandomNamber, getRandomElementArr};
