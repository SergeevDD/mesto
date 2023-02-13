const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileActivity = profile.querySelector('.profile__activity');
const editBtn = profile.querySelector('.profile__edit-btn');
const addBtn = profile.querySelector('.profile__add-btn');
const popupEdit = document.querySelector('.popup_type_edit');
const popupEditForm = popupEdit.querySelector('.popup__form');
const popupEditCloseBtn = popupEdit.querySelector('.popup__close');
const inputName = popupEdit.querySelector('.popup__input_type_name');
const inputActivity = popupEdit.querySelector('.popup__input_type_activity');
const popupAdd = document.querySelector('.popup_type_add');
const popupAddForm = popupAdd.querySelector('.popup__form');
const popupAddCloseBtn = popupAdd.querySelector('.popup__close');
const inputPlace = popupAdd.querySelector('.popup__input_type_place');
const inputLink = popupAdd.querySelector('.popup__input_type_link');
const popupPreview = document.querySelector('.popup_type_preview');
const popupPreviewCloseBtn = popupPreview.querySelector('.popup__close');
const popupPreviewImage = popupPreview.querySelector('.popup__image');
const popupPreviewSubtitle = popupPreview.querySelector('.popup__subtitle');
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

function showPopup(targetPopup, evt) {
  targetPopup.classList.add('popup_opened');
  if (evt) {
    popupPreviewImage.src = evt.target.src;
    popupPreviewSubtitle.textContent = evt.target.alt;
  }
  inputName.value = profileName.textContent;
  inputActivity.value = profileActivity.textContent;
}

function hidePopup(targetPopup) {
  targetPopup.classList.remove('popup_opened');
}

function editProfile(evt) {
  evt.preventDefault();
  if (inputName.value.length > 1 && inputActivity.value.length > 1) {
    profileName.textContent = inputName.value;
    profileActivity.textContent = inputActivity.value;
    hidePopup(popupEdit);
  } else {
    alert('Заполните все поля!');
  }
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
  image.addEventListener('click', (evt) => showPopup(popupPreview, evt));
  return card;
}

function addNewCard(evt) {
  evt.preventDefault();
  if (inputPlace.value.length > 1 && inputLink.value.length > 1) {
    const cardName = inputPlace.value;
    const cardLink = inputLink.value;
    const newCard = cardRendering(cardName, cardLink);
    photoList.prepend(newCard);
    hidePopup(popupAdd);
  } else {
    alert('Заполните все поля!');
  }
}

initialCards.forEach((cardData) => {
  const card = cardRendering(cardData.name, cardData.link);
  photoList.append(card);
});

addBtn.addEventListener('click', () => showPopup(popupAdd));
editBtn.addEventListener('click', () => showPopup(popupEdit));
popupEditCloseBtn.addEventListener('click', () => hidePopup(popupEdit));
popupAddCloseBtn.addEventListener('click', () => hidePopup(popupAdd));
popupPreviewCloseBtn.addEventListener('click', () => hidePopup(popupPreview));
popupEditForm.addEventListener('submit', editProfile);
popupAddForm.addEventListener('submit', addNewCard);
