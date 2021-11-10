import {setActivateFormState} from '../map/set-forms-state.js';
import {addMarkersGroup} from '../map/map.js';

const filtersForm = document.querySelector('.map__filters');

export const getSuccessHandler = (res) => {
  addMarkersGroup(res);
};
