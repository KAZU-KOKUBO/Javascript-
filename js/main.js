import {validateForm} from './form.js';
import {setDisabledFormState, setEnabledFormState} from './set-page-status.js';
import {map, addFormElement, resetForm, showPopover} from './map.js';
import { getData, setUserFormSubmit } from './api.js';
const filterFormElement = document.querySelector('.map__filters');

validateForm();

setDisabledFormState();

map();

setEnabledFormState(filterFormElement);

getData(map);
setUserFormSubmit(addFormElement, resetForm, showPopover);
