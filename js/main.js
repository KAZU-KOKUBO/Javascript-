import { validateForm } from './form.js';
import { setDisabledFormState, setEnabledFormState } from './set-page-status.js';
import { map, addFormElement, resetForm, showPopover } from './map.js';
import { getData, setUserFormSubmit } from './api.js';
const filterFormElement = document.querySelector('.map__filters');
const onFormSubmitSuccess = () => {
  showPopover('success');
  resetForm();
};

const onFormSubmitError = () => {
  showPopover('error');
};

validateForm();

setDisabledFormState();

setEnabledFormState(filterFormElement);

getData(map);
setUserFormSubmit(addFormElement, onFormSubmitSuccess, onFormSubmitError);
