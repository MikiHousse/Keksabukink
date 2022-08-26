const getRandomInt = function (min, max) {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min -1)) + min;
};



//Генерация числа с плавающей точкой
const createRandomNamber = (min, max, floatingPoint) => {
  if (min > max || max < 0 || max <= 0) {
  return -1;
  }
  if (max < min) {
    [min, max] = [max, min];
  }
  // const digits  = 10 ** floatingPoint;
  return (Math.random() * (max - min) + min);
};

// console.log(createRandomNamber(139.70000, 139.80000));

//Случайный элемент масива

const getRandomElementArr = (array) => {
  return array[getRandomInt(0, array.length - 1)];
}



export {getRandomInt, createRandomNamber, getRandomElementArr};
