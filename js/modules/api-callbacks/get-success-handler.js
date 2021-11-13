import {setActivateFormState} from '../map/set-forms-state.js';
import {addMarkersGroup} from '../map/map.js';
import { setFilterFormChange, setResRanking } from '../filter/filter.js';

const filtersForm = document.querySelector('.map__filters');

export const getSuccessHandler = (res) => {
  const rankingRes = setResRanking(res);
  addMarkersGroup(res);
  setActivateFormState(filtersForm);
  setFilterFormChange(() => addMarkersGroup(rankingRes));
};

