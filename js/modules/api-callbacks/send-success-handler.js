import { isEscEvent, renderElement } from '../utils/utils';
import { setPinMarkersStartState } from '../map/map';
import { resetAddForm } from '../ad-form/activate-ad-form';

const forms = document.querySelectorAll('form');

const createrSuccessMarkup = () => `<div class="success">
                                    <p class="success__message">Ваше объявление<br>успешно размещено!</p>
                                    </div>`;

const successBlockClickHandler = (evt) => {
  evt.preventDefault();
  if (evt.target.closest('success')) {
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
  renderElement(createrSuccessMarkup(), document.body);
  addListeners();
  forms.forEach((form) => form.reset());
  resetAddForm();
  setPinMarkersStartState();
};
