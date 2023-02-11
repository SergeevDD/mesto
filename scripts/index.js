let profile = document.querySelector('.profile');
let profileName = profile.querySelector('.profile__name');
let profileActivity = profile.querySelector('.profile__activity');
let editBtn = profile.querySelector('.profile__edit-btn');
let popup = document.querySelector('.popup');
let popupForm = popup.querySelector('.popup__form');
let popupCloseBtn = popup.querySelector('.popup__close');
let inputName = popup.querySelector('.popup__input_type_name');
let inputActivity = popup.querySelector('.popup__input_type_activity');
let photoList = document.querySelector('.photo__list');
let cardTemplate =  document.querySelector('#cardTemplate').content;


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

initialCards.forEach ((cardData) => {
  const card = cardRendering(cardData.name,cardData.link);
  photoList.append(card);
 });
 /* let deleteBtn = document.querySelectorAll('.photo__delete-btn'); */
/*  console.log(deleteBtn +"dsadasd"); */

function showPopup () {
  popup.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputActivity.value = profileActivity.textContent;
}

function hidePopup () {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  if(inputName.value.length > 1 && inputActivity.value.length > 1) {
     profileName.textContent = inputName.value;
     profileActivity.textContent = inputActivity.value;
     hidePopup();
  } else {
     alert('Заполните все поля!');
  }
}

function cardRendering (name,link) {
  const card = cardTemplate.querySelector('.photo__card').cloneNode(true);
  card.querySelector('.photo__name').textContent = name;
  card.querySelector('.photo__image').alt = name;
  card.querySelector('.photo__image').src= link;
  return card;
}

function deleteCard (targetBnt) {
  console.log(targetBnt);
  const card = targetBnt.target.closest('.photo__card');
  console.log(targetBnt);
  card.remove();
}
photoList.addEventListener('click', deleteCard);
editBtn.addEventListener('click', showPopup);
popupCloseBtn.addEventListener('click', hidePopup);
popupForm.addEventListener('submit', handleFormSubmit);
