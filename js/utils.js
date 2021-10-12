// Функция создания рандомного целого числа

const getRandomInt = (min, max, counter = 0) => {
  if (min > max || min < 0 || max <= 0) {
    return false;
  }
  return +(Math.random() * (max - min) + min).toFixed(counter);
};

const getAvatar = () => {
  const avatarId = getRandomInt(1, 9);
  const author = {
    avatar: `img/avatars/user${avatarId}.png`,
  };
  return author;
};

// Массив строк случайной длины
const getRandomOfferElement = (array) => array[getRandomInt(0, array.length - 1)];

const createRandomArray = (array) => {
  const randomArray = [];

  for (let index = 0; index < getRandomInt(1, array.length - 1); index++) {
    randomArray.push(array[getRandomInt(0, array.length - 1)]);
  }

  return Array.from(new Set (randomArray));
};

export {getRandomInt, getAvatar, getRandomOfferElement, createRandomArray};
