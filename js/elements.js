import { similarOffers } from './data.js';

const template = document.querySelector('#card').content;
const element = template.querySelector('.popup');

const typeToText = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель',
};

const createSimpleText = (parent, cssClass, data) => {
  if (!data) {
    parent.querySelector(cssClass).remove();
    return;
  }
  parent.querySelector(cssClass).innerText = data;
};

const createPriceText = (parent, cssClass, data) => {
  if (!data) {
    parent.querySelector(cssClass).remove();
    return;
  }
  parent.querySelector(cssClass).innerHTML = `${data} <span>₽/ночь</span>`;
};

const createAvatar = (parent, cssClass, data) => {
  if (!data) {
    parent.querySelector(cssClass).remove();
    return;
  }
  parent.querySelector(cssClass).src = data;
};

const createCapacityText = (parent, cssClass, roomsData, guestsData) => {
  if (!roomsData && !guestsData) {
    parent.querySelector(cssClass).remove();
    return;
  }
  const roomsText = roomsData ? `${roomsData} комнаты ` : '';
  const guestsText = guestsData ? `для ${guestsData} гостей` : '';

  parent.querySelector(cssClass).innerText = `${roomsText}${guestsText}`;
};

const createTimeText = (parent, cssClass, checkInData, checkOutData) => {
  if (!checkInData && !checkOutData) {
    parent.querySelector(cssClass).remove();
    return;
  }
  const checkInText = checkInData ? `Заезд после ${checkInData} ` : '';
  const checkOutText = checkOutData ? `выезд до ${checkOutData}` : '';
  const separator = checkInText && checkOutText ? ', ' : '';

  parent.querySelector(cssClass).innerText = `${checkInText}${separator}${checkOutText}`;
};

const createPhotosList = (parent, cssClass, data) => {
  if (typeof data !== 'object') {
    parent.querySelector(cssClass).remove();
    return;
  }

  const photoList = () => data.map((imgSrc) => `<img src="${imgSrc}" class="popup__photo" width="45" height="40"
      alt="Фотография жилья">`).join('\n');

  parent.querySelector(cssClass).innerHTML = photoList();
};

const createFeaturesList = (parent, cssClass, data) => {
  if (typeof data !== 'object' || !data.length) {
    parent.querySelector(cssClass).remove();
    return;
  }

  const featuresList = () => data.map((feature) => `<li class="popup__feature popup__feature--${feature}"></li>`).join('\n');

  parent.querySelector(cssClass).innerHTML = featuresList();
};

const advertisement = ({ author, offer }) => {
  const newElement = element.cloneNode(true);
  createSimpleText(newElement, '.popup__title', offer.title);
  createSimpleText(newElement, '.popup__text--address', offer.address);
  createSimpleText(newElement, '.popup__type', typeToText[offer.address]);
  createSimpleText(newElement, '.popup__description', offer.description);
  createPriceText(newElement, '.popup__text--price', offer.price);
  createAvatar(newElement, '.popup__avatar', author.avatar);
  createCapacityText(newElement, '.popup__text--capacity', offer.rooms, offer.guests);
  createTimeText(newElement, '.popup__text--time', offer.checkin, offer.checkout);
  createPhotosList(newElement, '.popup__photos', offer.photos);
  createFeaturesList(newElement, '.popup__features', offer.features);

  const canvas = document.querySelector('#map-canvas');
  canvas.append(newElement);
};

const addElement = () => {
  advertisement(similarOffers[0]);
};

export { addElement };
