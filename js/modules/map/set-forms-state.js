const forms = document.querySelectorAll('form');
const interactiveFormElements = document.querySelectorAll('form input, select, button, textarea');

const setElementDisableState = () => {
  interactiveFormElements.forEach((item) => item.disabled = true);
};

const setElementEnableState = () => {
  interactiveFormElements.forEach((item) => item.disabled = false);
};

const setElementEnabledState = (form) => {
  form.querySelectorAll('form input, select, button, textarea').forEach((item) => item.disabled = false);
};

export const setDeactivatePageState = () => {
  forms.forEach((form) => form.classList.add('disabled'));
  setElementDisableState();
};

export const setActivatePageState = () => {
  forms.forEach((form) => form.classList.remove('disabled'));
  setElementEnableState();
};

export const setActivateFormState = (form) => {
  form.classList.remove('disabled');
  setElementEnabledState(form);
};
