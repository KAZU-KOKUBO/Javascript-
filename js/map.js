import { disablePage, activePage } from './set-page-status.js';
import { createCard } from './elements.js';
import { similarOffers } from './data.js';

const resetButton = document.querySelector('.ad-form__reset');
export const addFormElement = document.querySelector('.ad-form');
const address = addFormElement.querySelector('#address');
const mapInteractive = L.map('map-canvas');
let mainPinMarker;
let markerGroup;

const cityCenter = {
  lat: 35.6839,
  lng: 139.75323,
};

const cardArray = similarOffers;

resetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng (cityCenter);
  mapInteractive.setView(cityCenter, 12);
});

const addMarkersGroup = () => {
  markerGroup = L.layerGroup().addTo(mapInteractive);
  cardArray.forEach((el) => {
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
    disablePage, activePage(addFormElement);
    addMarkersGroup();
  }).setView(cityCenter, 12);

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

  mainPinMarker = L.marker(cityCenter,
    {
      draggable: true,
      icon: mainPinIcon,
    });

  mainPinMarker.addTo(mapInteractive);

  address.value = `${cityCenter.lat.toFixed(5)}, ${cityCenter.lng.toFixed(5)}`;

  mainPinMarker.on('moveend', (evt) => {
    address.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
  });
};
