// Функция проверяющая нажатую клавишу 'Ecs'

export const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Ecs';

// Функция рендера элемента

export const renderElement = (el, container, position = 'beforeend') => {
  container.insertAdjacentHTML(position, el);
};
