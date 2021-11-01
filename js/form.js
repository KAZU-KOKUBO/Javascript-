const roomsSelected = document.querySelector('#rooms__number');
const guestsSelected = document.querySelector('#capacity');
const guestsOptions = document.querySelector('#capacity option');
const priceInput = document.querySelector('#price');
const typeSelected = document.querySelector('#type');
const checkIn = document.querySelector('#check-in');
const checkOut = document.querySelector('#checkout');

const minPriceRooms = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const typeInputChange = () => {
  priceInput.placeholder = minPriceRooms[typeSelected.value];
  priceInput.min = minPriceRooms[typeSelected.value];
};

const onTypeInputChange = () => {
  typeInputChange();
};

const onTimeInChange = ({ target }) => {
  checkOut().value = target.value;
};

const onTimeOutChange = ({ target }) => {
  checkIn().value = target.value;
};

const roomsOptions = {
  1: {
    value: 1,
    items: [2],
  },

  2: {
    value: 2,
    items: [2, 1],
  },

  3: {
    value: 3,
    items: [2, 1, 0],
  },

  100: {
    value: 0,
    items: [3],
  },
};

const onRoomsChange = ({ target }) => {
  guestsOptions.forEach((option) => (option.disabled = true));
  roomsOptions[target.value].items.forEach((item) => {
    guestsOptions[item].disabled = false;
  });

  guestsSelected.value = roomsOptions[roomsSelected.value].value;
};

export const validatedForm = () => {
  typeInputChange();
  checkIn.addEventListener('change', onTimeInChange);
  checkOut.addEventListener('change', onTimeOutChange);
  typeSelected.addEventListener('change', onTypeInputChange);
  roomsSelected.addEventListener('change', onRoomsChange);
};

