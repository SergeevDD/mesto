import './index.css'
import { initialCards, addBtn, editBtn, validateConfig, profileActivity, profileName, formValidators } from "../components/constants.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";

function activateValidation(classConfiguration) {
  const formList = Array.from(document.querySelectorAll(classConfiguration.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(classConfiguration, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  });
}

function createCard(item) {
  const card = new Card({
    data: item, handleCardClick: (item) => {
      const popupPreview = new PopupWithImage('.popup_type_preview', item)
      popupPreview.generatePopup();
      popupPreview.open();
    }
  }, '#cardTemplate');
  const cardElement = card.createCard();
  return cardElement
}

const cardList = new Section({ items: initialCards, renderer: createCard }
  , '.photo__list');
cardList.rendererItems();

const userInfo = new UserInfo({ nameElement: profileName, activityElement: profileActivity });

const editPopup = new PopupWithForm({
  popupSelector: '.popup_type_edit', handleformSubmit: (item) => {
    userInfo.setUserInfo(item);
    editPopup.close();
  }
});
const addPopup = new PopupWithForm({
  popupSelector: '.popup_type_add', handleformSubmit: (item) => {
    cardList.addItem(createCard(item));
    addPopup.close();
  }
});

editPopup.generatePopup();
addPopup.generatePopup();
editBtn.addEventListener('click', () => {
  editPopup.open();
  editPopup.setUserData(userInfo.getUserInfo())
  formValidators['popupFormEdit'].clearInputErrors();
});
addBtn.addEventListener('click', () => { addPopup.open(); formValidators['popupFormAdd'].clearInputErrors(); });

activateValidation(validateConfig);
