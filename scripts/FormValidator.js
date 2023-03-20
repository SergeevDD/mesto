export default class FormValidator {
  constructor(classConfiguration, validateElement) {
    this._configuration = classConfiguration;
    this._element = validateElement;
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._element.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._configuration.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._configuration.errorClass);
};

  _hideInputError(inputElement) {
    const errorElement = this._element.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._configuration.inputErrorClass);
    errorElement.classList.remove(this._configuration.errorClass);
    errorElement.textContent = '';
};
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
};
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  _toggleButtonState(inputList,buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._configuration.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this._configuration.inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }
  _setEventListeners() {
    const inputList = Array.from(this._element.querySelectorAll(this._configuration.inputSelector));
    const buttonElement = this._element.querySelector(this._configuration.submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement);
    this._element.addEventListener('reset', () => {
      setTimeout(() => {
        this._toggleButtonState(inputList, buttonElement);
      }, 0);
    });
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  };

  enableValidation() {
      this._setEventListeners();
  }
}
