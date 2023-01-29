let profile = document.querySelector('.profile');
let profileName = profile.querySelector('.profile__name');
let profileActivity = profile.querySelector('.profile__activity');
let editBtn = profile.querySelector('.profile__edit-btn');
let popup = document.querySelector('.popup');
let popupForm = popup.querySelector('.popup__form');
let popupCloseBtn = popup.querySelector('.popup__close');
let inputName = popup.querySelector('.popup__input_name');
let inputActivity = popup.querySelector('.popup__input_activity');

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

editBtn.addEventListener('click', showPopup);
popupCloseBtn.addEventListener('click', hidePopup);
popupForm.addEventListener('submit', handleFormSubmit);
