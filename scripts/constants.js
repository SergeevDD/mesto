const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileActivity = profile.querySelector('.profile__activity');
const editBtn = profile.querySelector('.profile__edit-btn');
const addBtn = profile.querySelector('.profile__add-btn');
const popupEdit = document.querySelector('.popup_type_edit');
const popupEditForm = document.forms['popupFormEdit'];
const inputName = popupEdit.querySelector('.popup__input_type_name');
const inputActivity = popupEdit.querySelector('.popup__input_type_activity');
const popupAdd = document.querySelector('.popup_type_add');
const popupAddForm = document.forms['popupFormAdd'];
const inputPlace = popupAdd.querySelector('.popup__input_type_place');
const inputLink = popupAdd.querySelector('.popup__input_type_link');
const popupPreview = document.querySelector('.popup_type_preview');
const popupPreviewImage = popupPreview.querySelector('.popup__image');
const popupPreviewSubtitle = popupPreview.querySelector('.popup__subtitle');
const popupList = document.querySelectorAll('.popup');
const photoList = document.querySelector('.photo__list');
const formValidators = {};

const validateConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

const initialCards = [
  {
    placeName: 'Берёзовая роща',
    placeLink: './images/birch.jpg'
  },
  {
    placeName: 'Дуб великан',
    placeLink: './images/giant-oak.jpg'
  },
  {
    placeName: 'Стражи леса',
    placeLink: './images/guardians.webp'
  },
  {
    placeName: 'Тенистый пруд',
    placeLink: './images/shady-pond.jpg'
  },
  {
    placeName: 'Серебрянный родник',
    placeLink: './images/silver-spring.jpg'
  },
  {
    placeName: 'Местные жители',
    placeLink: './images/squirrel.jpg'
  }
];

export {
  initialCards,
  validateConfig,
  addBtn,
  editBtn,
  formValidators,
  profileName,
  profileActivity,
}
