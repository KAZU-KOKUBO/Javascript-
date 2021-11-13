import { getData } from '../api/api-service.js';
import { getSuccessHandler } from '../api-callbacks/get-success-handler.js';
import { getErrorHandler } from '../api-callbacks/error-action-handler.js';
import { activateAdForm } from '../ad-form/activate-ad-form.js';
import { createCard } from '../elements.js';
import { filterAdverts, setDataRanking } from '../filter/filter.js';

const ADVERT_COUNT = 10;
const MAP_CENTER = {
  lat: 35.6839,
  lng: 139.75323,
};

const addressInput = document.querySelector('#address');
const mapInteractive = L.map('map-canvas');
let mainPinMarker;
let markerGroup;

export const removeMarkerGroup = () => {
  for (const layer in markerGroup._layers) {
    mapInteractive.removeLayer(markerGroup._layers[layer]);
  }
};

export const setPinMarkersStartState = () => {
  mainPinMarker.setLatLng(MAP_CENTER);
  mapInteractive.setView(MAP_CENTER, 12);
};

export const addMarkersGroup = (adverts) => {
  markerGroup = L.layerGroup().addTo(mapInteractive);
  setDataRanking(adverts)
    .slice()
    .filter(filterAdverts)
    .slice(0, ADVERT_COUNT)
    .forEach((el) => {
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

export const initMap = () => {
  mapInteractive
    .on('load', () => {
      activateAdForm();
      getData(getSuccessHandler, getErrorHandler);
    })
    .setView(MAP_CENTER, 12);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapInteractive);

  const mainPinIcon = L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  mainPinMarker = L.marker(
    MAP_CENTER,
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );

  addressInput.value = `${mainPinMarker.getLatLng().lat.toFixed(5)}, ${mainPinMarker.getLatLng().lng.toFixed(5)}`;

  mainPinMarker.addTo(mapInteractive).on('move', () => {
    addressInput.value = `${mainPinMarker.getLatLng().lat.toFixed(5)}, ${mainPinMarker.getLatLng().lng.toFixed(5)}`;
  });
};


export const resetMap = () => {
  mainPinMarker.setLatLng(MAP_CENTER);
  mapInteractive.setView(MAP_CENTER);
  markerGroup.clearLayers();
};
