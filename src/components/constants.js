
const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileActivity = profile.querySelector('.profile__activity');
const editBtn = profile.querySelector('.profile__edit-btn');
const addBtn = profile.querySelector('.profile__add-btn');
const editAvatar = profile.querySelector('.avatar');
const profileAvatar = editAvatar.querySelector('.avatar__image');
const formValidators = {};

const validateConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

export {
  validateConfig,
  addBtn,
  editBtn,
  formValidators,
  profileName,
  profileActivity,
  editAvatar,
  profileAvatar,
}
