import { createOffer } from './data.js';
createOffer();

const template = document.querySelector('#card').content;
const element = template.querySelector('.popup');

const advertisement = function (info) {
  const newElement = element.cloneNode(true);

  const popupTitle = newElement.querySelector('popup__title');
  popupTitle.textContent = info.offer.title;

  popupTitle.querySelector('.popup__title').textContent = info.offer.title;


  const address = newElement.querySelector('popup__text--adress');
  address.textContent = info.offer.address;

  const price = newElement.querySelector('.popup__text--price');
  price.textContent = `${info.offer.price}₽/ночь`;

  const type = newElement.querySelector('.popup__type');
  if (info.offer.type === 'flat') {
    type.textContent = 'Квартира';
  }

  if (info.offer.type === 'bungalow') {
    type.textContent = 'Бунгало';
  }

  if (info.offer.type === 'house') {
    type.textContent = 'Дом';
  }

  if (info.offer.type === 'palace') {
    type.textContent = 'Дворец';
  }

  if (info.offer.type === 'hotel') {
    type.textContent = 'Отель';
  }

  const guests = newElement.querySelector('.popup__text--capacity');
  guests.textContent = `${info.offer.rooms} комнаты для ${info.offer.guests} гостей`;

  const time = newElement.querySelector('.popup__text--time');
  time.textContent = `Заезд после ${info.offer.checkin} выезд до ${info.offer.checkout}`;

  const features = newElement.querySelector('.popup__features');
  features.innerHTML = '';
  for (let i = 0; i < info.offer.features.length; i++) {
    const feature = document.createElement('li');
    feature.classList.add('popup__feature');
    feature.classList.add(`${'popup__feature'} '+' ${info.offer.features[i]}`);
    features.appendChild(feature);
  }

  const description = newElement.querySelector('.popup__description');
  description.textContent = info.offer.description;

  const photos = newElement.querySelector('.popup__photos');
  photos.innerHTML = '';
  for (let i = 0; i < info.offer.photos.length; i++) {
    const cloningImg = photos.cloneNode(true);
    cloningImg.src = info.offer.photos[i];
    photos.appendChild(cloningImg);
  }

  const avatar = newElement.querySelector('.popup__avatar');
  avatar.src = info.author.avatar;

  const canvas = document.querySelector('#map-canvas');
  canvas.append(newElement);
};

const addElement = advertisement(createOffer[1]);

export{addElement};
