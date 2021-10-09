const getRandomInt = (min, max, counter = 0) => {
  if (min > max || min < 0 || max <= 0) {
    return false;
  }
  return +(Math.random() * (max - min) + min).toFixed(counter);
};

console.log(getRandomInt(0, 10, 5));


const getAvatar = () => {
  const avatarId = getRandomNumber (1, 9);
  const author = {
    avatar: `img/avatars/user${avatarId}.png`}
  return author
  }

const getAdress = () => {
const lat = getRandomСoordinates(35.65000, 35.70000, 5);
const lng = getRandomСoordinates(139.70000, 139.80000, 5);

const PRICE = getRandomNumber(100, 1000);

const TITLE = [' Недвижимость в вашем городе ']

const TYPE  = ['palace','flat', 'house', 'bungalow', 'hotel'];

const ROOMS = getRandomNumber(1,100);

const GUESTS = getRandomNumber(1,200)

const CHECKINS = ['12:00', '13:00', '14:00'];

const CHECKOUTS = ['12:00', '13:00', '14:00'];

const FEATURES = ['wifi','dishwasher', 'parking', 'washer','elevator', 'conditioner'];

const DESCRIPTIONS = ['big', 'small', 'average',];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const OFFERS_COUNT = 1;

const getRandomOfferElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];


const createOffer = () => {

   return {
      author:getAvatar(),

      offer: {
      title: (TITLE),
      address: `${lat} ${lng}`,
      price: getRandomNumber (PRICE),
      type: getRandomOfferElement(TYPE),
      rooms: getRandomNumber(ROOMS),
      guests: getRandomNumber(GUESTS),
      checkin: getRandomOfferElement(CHECKINS),
      checkout: getRandomOfferElement(CHECKOUTS),
      features: getRandomOfferElement(FEATURES),
      description: getRandomOfferElement(DESCRIPTIONS),
      photos: getRandomOfferElement(PHOTOS),
    },

    location:{
      lat,
      lng,
    },
  };
};
const similarOffers = Array.from({length: OFFERS_COUNT}, createOffer);

  console.log(similarOffers);
