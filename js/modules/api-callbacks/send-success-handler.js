import { isEscEvent, renderElement } from '../utils/utils.js';
import { setPinMarkersStartState} from '../map/map.js';
import { resetAddForm } from '../ad-form/activate-ad-form.js';
import { trackRoomsSelectChange } from '../ad-form/form-validation.js';

const forms = document.querySelectorAll('form');

const createSuccessMarkup = () => `<div class="success">
                                    <p class="success__message">Ваше объявление<br>успешно размещено!</p>
                                    </div>`;

const successBlockClickHandler = (evt) => {
  evt.preventDefault();
  if (evt.target.closest('.success')) {
    closeSuccessBlock();
  }
};

const documentKeyDownHandler = (evt) => {
  evt.preventDefault();
  if (isEscEvent(evt)) {
    closeSuccessBlock();
  }
};

const addListeners = () => {
  document.addEventListener('click', successBlockClickHandler);
  document.addEventListener('keydown', documentKeyDownHandler);
};

function closeSuccessBlock() {
  document.querySelector('.success').remove();
  document.removeEventListener('keydown', documentKeyDownHandler);
  document.removeEventListener('click', successBlockClickHandler);
}

export const sendSuccessHandler = () => {
  renderElement(createSuccessMarkup(), document.body);
  addListeners();
  forms.forEach((form) => form.reset());
  resetAddForm();
  setPinMarkersStartState();
  trackRoomsSelectChange();
  document.activeElement.blur();
};
