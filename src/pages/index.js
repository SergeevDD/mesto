import './index.css'
import { addBtn, editBtn, editAvatar, validateConfig, profileActivity, profileName, profileAvatar, formValidators } from "../components/constants.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupDelete from '../components/PopupDelete.js';
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import Api from "../components/Api.js";

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
      popupPreview.open(item);
    }, handleLikeClick: (liked, id) => {

      apiRequest.toggleLike(liked, id)
        .then(data => { card.updateLikes(data, userInfo.getUserId()) })
        .catch(err => console.log('Ошибка:', err))
    }, handleDeleteIconClick: (cardId) => {
      deletePopup.open(cardId)
    }
  }, '#cardTemplate');
  const cardElement = card.createCard(userInfo.getUserId());
  return cardElement
}

const apiRequest = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64/',
  headers: {
    authorization: '3c534f09-d342-4d2e-b9ef-3f9b232c8ade',
    'Content-Type': 'application/json'
  }
});

const popupPreview = new PopupWithImage('.popup_type_preview');
popupPreview.setEventListeners();

const cardList = new Section(createCard, '.photo__list');

const userInfo = new UserInfo({ nameElement: profileName, activityElement: profileActivity, avatarElement: profileAvatar });

const editPopup = new PopupWithForm({
  popupSelector: '.popup_type_edit', handleformSubmit: (item) => {
    apiRequest.setUserData(item)
      .then(data => {
        userInfo.setUserInfo(data);
        editPopup.resetLoadingStyle();
        editPopup.close()
      })
      .catch((err) => console.log('Ошибка:', err))
  }
});

const addPopup = new PopupWithForm({
  popupSelector: '.popup_type_add', handleformSubmit: (item) => {
    apiRequest.uploadCard(item)
      .then(data => {
        cardList.addItem(createCard(data));
        addPopup.resetLoadingStyle();
        addPopup.close();
      })
      .catch((err) => console.log('Ошибка:', err))
  }
});

const editAvatarPopup = new PopupWithForm({
  popupSelector: '.popup_type_avatar', handleformSubmit: (item) => {
    apiRequest.setUserAvatar(item)
      .then(data => {
        userInfo.setUserInfo(data);
        editAvatarPopup.resetLoadingStyle();
        editAvatarPopup.close();
      })
      .catch((err) => console.log('Ошибка:', err));
  }
})

const deletePopup = new PopupDelete({
  popupSelector: '.popup_type_delete', handleformSubmit: (item) => {
    apiRequest.removeCard(item)
      .then(answer => {
        if (answer.message = 'Пост удалён') {
          apiRequest.getInitialCards()
            .then(data => {
              cardList.clearField();
              cardList.rendererItems(data);
              deletePopup.close();
            })
        }
      })
      .catch(err => console.log('Ошибка:', err))

  }
})

editPopup.setEventListeners();
addPopup.setEventListeners();
deletePopup.setEventListeners();
editAvatarPopup.setEventListeners();

editBtn.addEventListener('click', () => {
  editPopup.open();
  editPopup.setUserData(userInfo.getUserInfo())
  formValidators['popupFormEdit'].clearInputErrors();
});
addBtn.addEventListener('click', () => { addPopup.open(); formValidators['popupFormAdd'].clearInputErrors(); });
editAvatar.addEventListener('click', () => { editAvatarPopup.open(); formValidators['popupFormAvatar'].clearInputErrors(); })

activateValidation(validateConfig);


Promise.all([apiRequest.getUserData(), apiRequest.getInitialCards()])
  .then(([user, cards]) => {
    userInfo.setUserInfo(user);
    cardList.rendererItems(cards);
  })
  .catch((err) => console.log('Ошибка:', err))


