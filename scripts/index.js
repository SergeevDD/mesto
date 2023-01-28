let userProfile = document.querySelector('.profile');
let editMenu = document.querySelector('.edit-profile');
let pName = userProfile.querySelector('.profile__name');
let pJob = userProfile.querySelector('.profile__activity');
let editBtn = userProfile.querySelector('.profile__edit-btn');
let formSubmit = editMenu.querySelector('.edit-profile__container');
let closeBtn = editMenu.querySelector('.edit-profile__close');

function openEditProfile () {
  editMenu.classList.add('edit-profile_opened');
  let inputName = editMenu.querySelector('.edit-profile__input_name');
  let inputJob = editMenu.querySelector('.edit-profile__input_activity');
  inputName.value = pName.textContent;
  inputJob.value = pJob.textContent;
}

function closeEditProfile () {
  editMenu.classList.remove('edit-profile_opened');
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  let inputName = editMenu.querySelector('.edit-profile__input_name').value;
  let inputJob = editMenu.querySelector('.edit-profile__input_activity').value;
  console.log(inputName.length);
  if(inputName.length > 1 && inputJob.length > 1) {
  pName.textContent = inputName;
  pJob.textContent = inputJob;
  closeEditProfile ();
  } else {
    alert('Заполните все поля!');
  }

}

editBtn.addEventListener('click', openEditProfile);
closeBtn.addEventListener('click', closeEditProfile);
formSubmit.addEventListener('submit', handleFormSubmit);
