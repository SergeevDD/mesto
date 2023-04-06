import giantOak from '../images/giant-oak.jpg';
import guardians from '../images/guardians.webp';
import shadyPond from '../images/shady-pond.jpg';
import silverSpring from '../images/silver-spring.jpg';
import squirrel from '../images/squirrel.jpg';
import birch from '../images/birch.jpg';

const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileActivity = profile.querySelector('.profile__activity');
const editBtn = profile.querySelector('.profile__edit-btn');
const addBtn = profile.querySelector('.profile__add-btn');
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
    placeLink: birch
  },
  {
    placeName: 'Дуб великан',
    placeLink: giantOak
  },
  {
    placeName: 'Стражи леса',
    placeLink: guardians
  },
  {
    placeName: 'Тенистый пруд',
    placeLink: shadyPond
  },
  {
    placeName: 'Серебрянный родник',
    placeLink: silverSpring
  },
  {
    placeName: 'Местные жители',
    placeLink: squirrel
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
