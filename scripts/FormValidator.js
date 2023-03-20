export default class FormValidator {
  constructor(classConfiguration, validateElement) {
    this._configuration = classConfiguration;
    this._element = validateElement;
  }

  _setEventListeners() {
    const inputList = Array.from(this._element.querySelectorAll(this._configuration.inputSelector));
    const buttonElement = this._element.querySelector(this._configuration.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, this._configuration.inactiveButtonClass);
    formElement.addEventListener('reset', () => {
      setTimeout(() => {
        toggleButtonState(inputList, buttonElement, this._configuration.inactiveButtonClass);
      }, 0);
    });
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(this._element, inputElement, this._configuration.inputErrorClass, this._configuration.errorClass);
        toggleButtonState(inputList, buttonElement, this._configuration.inactiveButtonClass);
      });
    });

  };
}
