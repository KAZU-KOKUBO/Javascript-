const roomsSelect = document.querySelector('#room_number');
const guestsSelect = document.querySelector('#capacity');
const guestsOptions = document.querySelectorAll('#capacity option');
const priceInput = document.querySelector('#price');
const typeSelect = document.querySelector('#type');
const checkIn = document.querySelector('#timein');
const checkOut = document.querySelector('#timeout');

const minPriceRooms = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const typeInputChange = () => {
  priceInput.placeholder = minPriceRooms[typeSelect.value];
  priceInput.min = minPriceRooms[typeSelect.value];
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

  guestsSelect.value = roomsOptions[roomsSelect.value].value;
};

const validateForm = () => {
  typeInputChange();

  checkIn.addEventListener('change', onTimeInChange);
  checkOut.addEventListener('change', onTimeOutChange);
  typeSelect.addEventListener('change', onTypeInputChange);
  roomsSelect.addEventListener('change', onRoomsChange);
};


export { validateForm };
