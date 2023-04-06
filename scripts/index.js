import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './components/Section.js';
import Popup from './components/Popup.js';

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
    name: 'Берёзовая роща',
    link: './images/birch.jpg'
  },
  {
    name: 'Дуб великан',
    link: './images/giant-oak.jpg'
  },
  {
    name: 'Стражи леса',
    link: './images/guardians.webp'
  },
  {
    name: 'Тенистый пруд',
    link: './images/shady-pond.jpg'
  },
  {
    name: 'Серебрянный родник',
    link: './images/silver-spring.jpg'
  },
  {
    name: 'Местные жители',
    link: './images/squirrel.jpg'
  }
];

function findActivePopup(popups) {
  const list = Array.from(popups);
  return list.find((popup) => {
    if (popup.classList.contains('popup_opened')) {
      return popup;
    }
  });
}

function handleEscape(evt) {
  if (evt.key === 'Escape') {
    hidePopup(findActivePopup(popupList));
  }
}
function showPopup(targetPopup) {
  targetPopup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscape);
}

function hidePopup(targetPopup) {
  if (targetPopup !== undefined) {
    targetPopup.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEscape);
  }
}

function handlePopupClose(evt) {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
    hidePopup(findActivePopup(popupList));
  }
}

function setProfileData() {
  inputName.value = profileName.textContent;
  inputActivity.value = profileActivity.textContent;
}

function setPreviewData(cardName, cardLink) {
  popupPreviewImage.src = cardLink;
  popupPreviewImage.alt = cardName;
  popupPreviewSubtitle.textContent = cardName;
  showPopup(popupPreview);
}

function editProfile(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileActivity.textContent = inputActivity.value;
  hidePopup(popupEdit);
}

function activateValidation(classConfiguration) {
  const formList = Array.from(document.querySelectorAll(classConfiguration.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(classConfiguration, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;

    validator.enableValidation();
  });
}

function createCard(cardData) {
  const card = new Card(cardData, '#cardTemplate', setPreviewData);
  const cardElement = card.createCard();
  return cardElement
}

function addNewCard(evt) {
  evt.preventDefault();
  photoList.prepend(createCard({ name: inputPlace.value, link: inputLink.value }));
  evt.target.reset();
  hidePopup(popupAdd);
}

popupList.forEach((popup) => {
  popup.addEventListener('click', handlePopupClose);
});

initialCards.forEach((cardData) => {
  photoList.append(createCard(cardData));
});

addBtn.addEventListener('click', () => {
  showPopup(popupAdd);
  formValidators['popupFormAdd'].clearInputErrors();
});
editBtn.addEventListener('click', () => {
  showPopup(popupEdit);
  setProfileData();
  formValidators['popupFormEdit'].clearInputErrors();
});

popupEditForm.addEventListener('submit', editProfile);
popupAddForm.addEventListener('submit', addNewCard);

activateValidation(validateConfig);

const mySection = new Section({items: initialCards, renderer : (item) => {

}}, );

