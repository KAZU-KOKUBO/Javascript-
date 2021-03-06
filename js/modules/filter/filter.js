const FILTERING_DELAY = 500;

const priceRange = {
  'LOW': 10000,
  'MIDDLE': 50000,
};

let timer;

const filterForm = document.querySelector('.map__filters');
const typeFilterSelect = document.querySelector('#housing-type');
const priceFilterSelect = document.querySelector('#housing-price');
const roomsFilterSelect = document.querySelector('#housing-rooms');
const guestsFilterSelect = document.querySelector('#housing-guests');

const filterByType = ({ type }) => typeFilterSelect.value === type || typeFilterSelect.value === 'any';

const filterByRooms = ({ rooms }) => +roomsFilterSelect.value === rooms || roomsFilterSelect.value === 'any';

const filterByGuests = ({ guests }) => +guestsFilterSelect.value === guests || guestsFilterSelect.value === 'any';

const filterByPrice = ({ price }) => {
  switch (priceFilterSelect.value) {
    case 'low':
      return price <= priceRange['LOW'];

    case 'middle':
      return price > priceRange['LOW'] && price <= priceRange['MIDDLE'];

    case 'high':
      return price > priceRange['MIDDLE'];

    default:
      return true;
  }
};

const filterByFeatures = ({ features }) => {
  const currentFeatures = document.querySelectorAll('.map__checkbox:checked');

  if (features) {
    return Array.from(currentFeatures).every((item) => features.includes(item.value));
  }
  return false;
};


export const setResRanking = (res) =>
  res
    .reduce((rankedRes, item) => {
      const rank = item.offer.features && item.offer.features.length ? item.offer.features.length : 0;
      item.offer.rank = rank;
      rankedRes.push(item);
      return rankedRes;
    }, [])
    .sort((a, b) => b.offer.rank - a.offer.rank);

export const setFilterFormChange = (cb) => {
  filterForm.addEventListener('change', () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb();
    }, FILTERING_DELAY);
  });
};


export const filterAdverts = ({ offer }) =>
  filterByType(offer) &&
  filterByPrice(offer) &&
  filterByRooms(offer) &&
  filterByGuests(offer) &&
  filterByFeatures(offer);
