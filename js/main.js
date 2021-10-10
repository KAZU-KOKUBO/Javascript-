const OFFERS_COUNT = 10;
const TITLE = 'Недвижимость в вашем городе';
const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECK_TIMES = ['12:00', '13:00', '14:00'];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const DESCRIPTIONS = [
  'Прямой железнодорожный маршрут до аэропорта Ханеда. Всего в 5 минутах ходьбы!',
  'В окрестностях есть много ресторанов. Популярный китайский ресторан Nihao, Ootoya, Burger King и т.д.',
  'Безключевая регистрация заезда (Smart lock system)',
  'Полностью оборудована мебелью, бытовой техникой, кухней и удобствами. Идеально подходит для длительного пребывания!',
  'Коробка доставки и почтовый ящик доступны!',
  'Фантастический доступ в аэропорт Ханеда, Шинагава, Кавасаки и Йокогама]',
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

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

const getRandomOfferElement = (array) => array[getRandomInt(0, array.length - 1)];

const createRandomArray = (array) => {
  const randomArray = [];

  for (let index = 0; index < getRandomInt(1, array.length - 1); index++) {
    randomArray.push(array[getRandomInt(0, array.length - 1)]);
  }

  return Array.from(new Set (randomArray));
};

const createOffer = () => {
  const lat = getRandomInt(35.65, 35.7, 5);
  const lng = getRandomInt(139.7, 139.8, 5);

  return {
    author: getAvatar(),
    offer: {
      title: TITLE,
      address: `${lat} ${lng}`,
      price: getRandomInt(0, 1000000),
      type: getRandomOfferElement(TYPE),
      rooms: getRandomInt(1, 3),
      guests: getRandomInt(1, 3),
      checking: getRandomOfferElement(CHECK_TIMES),
      checkout: getRandomOfferElement(CHECK_TIMES),
      features: createRandomArray(FEATURES),
      description: getRandomOfferElement(DESCRIPTIONS),
      photos: createRandomArray(PHOTOS),
    },
    location: {
      lat,
      lng,
    },
  };
};

const similarOffers = Array.from({ length: OFFERS_COUNT }, createOffer);
console.log(similarOffers);
