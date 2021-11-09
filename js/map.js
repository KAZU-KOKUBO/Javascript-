import { setEnabledFormState } from './set-page-status.js';
import { createCard } from './elements.js';
import { similarOffers } from './data.js';

const resetButton = document.querySelector('.ad-form__reset');
export const addFormElement = document.querySelector('.ad-form');
const address = addFormElement.querySelector('#address');
const mapInteractive = L.map('map-canvas');
let mainPinMarker;
let markerGroup;

const MAP_CENTER = {
  lat: 35.6839,
  lng: 139.75323,
};

const cardArray = similarOffers;

resetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng(MAP_CENTER);
  mapInteractive.setView(MAP_CENTER, 12);
});

const ADVERT_COUNT = 10;
const addMarkersGroup = () => {
  markerGroup = L.layerGroup().addTo(mapInteractive);
  cardArray.slice(0, ADVERT_COUNT).forEach((el) => {
    const lat = el.location.lat;
    const lng = el.location.lng;

    const icon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon,
      },
    );

    marker.addTo(markerGroup).bindPopup(createCard(el), {
      keepInView: true,
    });
  });
};

export const map = () => {
  mapInteractive.on('load', () => {
    setEnabledFormState(addFormElement);
    addMarkersGroup();
  }).setView(MAP_CENTER, 12);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(mapInteractive);

  const mainPinIcon = L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  mainPinMarker = L.marker(MAP_CENTER,
    {
      draggable: true,
      icon: mainPinIcon,
    });

  mainPinMarker.addTo(mapInteractive);

  address.value = `${MAP_CENTER.lat.toFixed(5)}, ${MAP_CENTER.lng.toFixed(5)}`;

  mainPinMarker.on('moveend', (evt) => {
    address.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
  });
};

const resetMap = () => {
  map.closePopup();
  map.setView(MAP_CENTER, 12);
  mainPinMarker.setLatLng(MAP_CENTER);
};

const showPopover = (templateId) => {
  const bodyElement = document.querySelector('body');
  const messageTemplateElement = document.querySelector(`#${templateId}`).content;
  const messageElement = messageTemplateElement.firstElementChild.cloneNode(true);
  const onEscapeKeyPress = (evt) => {
    if (evt.key === 'Escape') {
      messageElement.remove();
      window.removeEventListener('keydown', onEscapeKeyPress);
    }
  };

  const onMessageClick = () => {
    messageElement.remove();
    window.removeEventListener('keydown', onEscapeKeyPress);
  };

  messageElement.addEventListener('click', onMessageClick);
  window.addEventListener('keydown', onEscapeKeyPress);
  bodyElement.appendChild(messageElement);
};

const addressElement = addFormElement.querySelector('#address');
const resetForm = () => {
  addFormElement.reset();
  resetMap();
  addressElement.value = `${MAP_CENTER.lat}, ${MAP_CENTER.lng}`;
};

const resetButtonElement = addFormElement.querySelector('.ad-form__reset');
resetButtonElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetForm();
});

export { showPopover, resetForm };
