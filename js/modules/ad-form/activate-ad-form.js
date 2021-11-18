import {setActivateFormState} from '../map/set-forms-state.js';
import {validateForm} from './form-validation.js';
import {sendData} from '../api/api-service.js';
import {sendSuccessHandler} from '../api-callbacks/send-success-handler.js';
import {sendErrorHandler} from '../api-callbacks/error-action-handler.js';
import {setPinMarkersStartState} from '../map/map.js';
import {clearImgBlocks, addChooserInputsListeners} from './load-photo.js';
import { trackRoomsSelectChange } from '../ad-form/form-validation.js';

const addForm = document.querySelector('.ad-form');
const filter = document.querySelector('.map__filters');

const addFormSubmitHandler = (evt) => {
  evt.preventDefault();
  sendData(sendSuccessHandler,sendErrorHandler, new FormData(evt.target));
};

export const resetFilter = () => {
  filter.reset();
  const event = new Event('change');
  filter.dispatchEvent(event);
};

export const resetAddForm = () => {
  setPinMarkersStartState();
  clearImgBlocks();
};

const addFormResetHandler = () => {
  setTimeout(() => {
    resetAddForm();
    resetFilter();
    trackRoomsSelectChange();
  });
};

export const activateAdForm = () => {
  setActivateFormState(addForm);
  validateForm();
  addChooserInputsListeners();
  addForm.addEventListener('submit', addFormSubmitHandler);
  addForm.addEventListener('reset', addFormResetHandler);
};

