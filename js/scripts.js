// Contacts write-us modal

var openWriteForm = document.querySelector('.contacts-btn');
var popupWriteForm = document.querySelector('.modal-write-us');
var closeWriteForm = document.querySelector('.write-close-btn');
var userNameField = document.querySelector('#user-name');
var emailField = document.querySelector('#user-email');

var KEYCODE_ESC = 27;

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEYCODE_ESC) {
    if (popupWriteForm.classList.contains('modal-show')) {
      evt.preventDefault();
      popupWriteForm.classList.remove('modal-show');
    }
    if (popupMap.classList.contains('modal-show')) {
      evt.preventDefault();
      popupMap.classList.remove('modal-show');
    }
  }
});

openWriteForm.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupWriteForm.classList.add('modal-show');
  userNameField.focus();
});

popupWriteForm.addEventListener('submit', function (evt) {
  if (!emailField.value || !userNameField) {
    evt.preventDefault();
    popupWriteForm.classList.add('modal-error');
  }
});

closeWriteForm.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupWriteForm.classList.remove('modal-show');
  popupWriteForm.classList.remove('modal-error');
});

popupWriteForm.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupWriteForm.classList.remove('modal-show');
  popupWriteForm.classList.remove('modal-error');
});

// Contacts map modal

var openMap = document.querySelector('.contacts-map');
var closeMap = document.querySelector('.map-close-btn');
var popupMap = document.querySelector('.modal-map');

openMap.addEventListener('click', function (evt) {
  evt.preventDefault(evt);
  popupMap.classList.add('modal-show');
});

closeMap.addEventListener('click', function (evt) {
  evt.preventDefault(evt);
  popupMap.classList.remove('modal-show');
});

popupMap.addEventListener('click', function (evt) {
  evt.preventDefault(evt);
  popupMap.classList.remove('modal-show');
});

// Services slider

var servicesButtons = Array.prototype.slice.call(document.querySelectorAll('.services-btn'));
var services = document.querySelector('.services-content');
var serviceSlides = services.querySelectorAll('.services-content__item');

servicesButtons.forEach(function (button, i) {
  button.addEventListener('click', function () {

    for (var x = 0; x < serviceSlides.length; x++) {
      serviceSlides[x].classList.add('visually-hidden');
      servicesButtons[x].classList.remove('services-current');
    }

    this.classList.add('services-current');
      serviceSlides[i].classList.remove('visually-hidden');
  });
});

// Slider offer

var sliderArray = document.querySelectorAll('.slider-block');
var sliderMoveRightButton = document.querySelector('.controls__right-btn');
var sliderMoveLeftButton = document.querySelector('.controls__left-btn');
var sliderDots = document.querySelectorAll('.offers-slider-dot');

var sliderCounter = 0;
var slideCount = sliderArray.length;

var makeDefaultDot = function (number) {
  sliderDots[number].classList.remove('dot-current');
};

var makeCurrentDot = function (number) {
  sliderDots[number].classList.add('dot-current');
};

var showNextSLide = function (number) {
  sliderArray[number].classList.add('visually-hidden');
  ++number;
  sliderArray[number].classList.remove('visually-hidden');
};

var showPreviousSLide = function (number) {
  sliderArray[number].classList.add('visually-hidden');
  --number;
  sliderArray[number].classList.remove('visually-hidden');
};

sliderMoveRightButton.addEventListener('click', function (evt) {
  if (slideCount > sliderCounter + 1) {
    showNextSLide(sliderCounter);
    makeDefaultDot(sliderCounter);
    ++sliderCounter;
    makeCurrentDot(sliderCounter);
  } else {
    evt.preventDefault();
  }
});

sliderMoveLeftButton.addEventListener('click', function (evt) {
  if (sliderCounter > 0) {
    showPreviousSLide(sliderCounter);
    makeDefaultDot(sliderCounter);
    --sliderCounter;
    makeCurrentDot(sliderCounter);
  } else {
    evt.preventDefault();
  }
});
