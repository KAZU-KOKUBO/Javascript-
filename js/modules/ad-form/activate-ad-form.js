import {setActivateFormState} from '../map/set-forms-state.js';
import {initFormValidation, changePriceInputState, changeRoomQuantityInputState} from './form-validation.js';
import {sendData} from '../api/api-service.js';
import {sendSuccessHandler} from '../api-callbacks/send-success-handler.js';
import {sendErrorHandler} from '../api-callbacks/error-action-handler.js';
import {setPinMarkersStartState} from '../map/map.js';
import {clearImgBlocks, addChooserInputListeners} from '../ad-form/load-photo.js';

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
  changePriceInputState();
  changeRoomQuantityInputState();
  clearImgBlocks();
};

const addFormResetHandler = () => {
  setTimeout(() => {
    resetAddForm();
    resetFilter();
  });
};

export const activateAdForm = () => {
  setActivateFormState(addForm);
  initFormValidation();
  addChooserInputListeners();
  addForm.addEventListener('submit', addFormSubmitHandler);
  addForm.addEventListener('submit', addFormResetHandler);
};

