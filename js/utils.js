// Функция создания рандомного целого числа

const getRandomInt = (min, max, counter = 0) => {
  if (min > max || min < 0 || max <= 0) {
    return false;
  }
  return +(Math.random() * (max - min) + min).toFixed(counter);
};

const getAvatar = () => {
  let avatarId = getRandomInt(1, 10);
  if (avatarId < 10) {
    avatarId = `0${avatarId}`;
  }
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

const ALERT_SHOW_TIME = 5000;
const showAlert = () => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = 'Ошибка сервера';

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {getRandomInt, getAvatar, getRandomOfferElement, createRandomArray, showAlert};
