const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileActivity = profile.querySelector('.profile__activity');
const editBtn = profile.querySelector('.profile__edit-btn');
const addBtn = profile.querySelector('.profile__add-btn');
const popupEdit = document.querySelector('.popup_type_edit');
const popupEditForm = popupEdit.querySelector('.popup__form');
const inputName = popupEdit.querySelector('.popup__input_type_name');
const inputActivity = popupEdit.querySelector('.popup__input_type_activity');
const popupAdd = document.querySelector('.popup_type_add');
const popupAddForm = popupAdd.querySelector('.popup__form');
const inputPlace = popupAdd.querySelector('.popup__input_type_place');
const inputLink = popupAdd.querySelector('.popup__input_type_link');
const popupPreview = document.querySelector('.popup_type_preview');
const popupPreviewImage = popupPreview.querySelector('.popup__image');
const popupPreviewSubtitle = popupPreview.querySelector('.popup__subtitle');
const popupList = document.querySelectorAll('.popup');
const photoList = document.querySelector('.photo__list');
const cardTemplate = document.querySelector('#cardTemplate').content;

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

function findActivePopup(popupList) {
  const list = Array.from(popupList);
  return list.find((popup) => {
    if(popup.classList.contains('popup_opened')) {
      return popup;
    }
  });
}

function escapePressed(key) {
  if(key === 'Escape') {
    hidePopup(findActivePopup(popupList));
  }
}

function popupOverlayClicked(evt) {
  if(evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
    hidePopup(findActivePopup(popupList));
  }
}

function clearInputErrors(parentPopup, errorClass) {
  const errors = parentPopup.querySelectorAll(errorClass);
  errors.forEach((error) => {
    error.textContent = '';
  });
};

function showPopup(targetPopup) {
  targetPopup.classList.add('popup_opened');
  clearInputErrors(targetPopup,'.popup__error')
}

function hidePopup(targetPopup) {
  if(targetPopup !== undefined) {
  targetPopup.classList.remove('popup_opened');
  }
}

function setProfileData() {
  inputName.value = profileName.textContent;
  inputActivity.value = profileActivity.textContent;
}

function setPreviewData(evt) {
  popupPreviewImage.src = evt.target.src;
  popupPreviewImage.alt = evt.target.alt;
  popupPreviewSubtitle.textContent = evt.target.alt;
}

function editProfile(evt) {
  evt.preventDefault();
    profileName.textContent = inputName.value;
    profileActivity.textContent = inputActivity.value;
    hidePopup(popupEdit);
}

function deleteCard(targetBtn) {
  const card = targetBtn.target.closest('.photo__card');
  card.remove();
}

function likeCard(targetBtn) {
  targetBtn.target.classList.toggle('photo__like-btn_active');
}

function cardRendering(name, link) {
  const card = cardTemplate.querySelector('.photo__card').cloneNode(true);
  const image = card.querySelector('.photo__image');
  card.querySelector('.photo__name').textContent = name;
  image.alt = name;
  image.src = link;
  card.querySelector('.photo__delete-btn').addEventListener('click', (evt) => deleteCard(evt));
  card.querySelector('.photo__like-btn').addEventListener('click', (evt) => likeCard(evt));
  image.addEventListener('click', (evt) => {showPopup(popupPreview); setPreviewData(evt);});
  return card;
}

function addNewCard(evt) {
  evt.preventDefault();
    const cardName = inputPlace.value;
    const cardLink = inputLink.value;
    const newCard = cardRendering(cardName, cardLink);
    photoList.prepend(newCard);
    evt.target.reset();
    hidePopup(popupAdd);
}

popupList.forEach((popup) => {
  popup.addEventListener('click',(evt) => popupOverlayClicked(evt));
});

initialCards.forEach((cardData) => {
  const card = cardRendering(cardData.name, cardData.link);
  photoList.append(card);
});

addBtn.addEventListener('click', () => showPopup(popupAdd));
editBtn.addEventListener('click', () => {showPopup(popupEdit);setProfileData();});
popupEditForm.addEventListener('submit', editProfile);
popupAddForm.addEventListener('submit', addNewCard);
document.addEventListener('keydown',(evt) => escapePressed(evt.key));

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
