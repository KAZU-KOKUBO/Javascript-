import {isEscEvent, renderElement} from '../../modules/utils/utils.js';

const createErrorMarkup = (text, btnState) => `<div class="error">
                                                <p class="error__message">${text}</p>
                                                ${btnState ? '<button type="button" class="error__button">Попробовать снова</button': ''}
                                                </div>`;

const errorBlockClickHandler = (evt) => {
  evt.preventDefault();
  if (evt.target.closest('.error')) {
    document.querySelector('.error').remove();
  }
};

const documentKeyDownHandler = (evt) => {
  evt.preventDefault();
  if (isEscEvent(evt)) {
    document.querySelector('.error').remove();
  }
};

const addListeners = () => {
  document.addEventListener('click', errorBlockClickHandler, {once: true});
  document.addEventListener('keydown', documentKeyDownHandler, {once: true});
};

export const getErrorHandler = () => {
  renderElement(createErrorMarkup('При загрузке данных произошла ошибка!'), document.body);
  addListeners();
};

export const sendErrorHandler = () => {
  renderElement(createErrorMarkup('Ошибка размещения объявления', true), document.body);
  addListeners();
};

