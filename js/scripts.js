// Contacts write-us modal

var openWriteForm = document.querySelector('.contacts-btn');
var popupWriteForm = document.querySelector('.modal-write-us');
var closeWriteForm = document.querySelector('.write-close-btn');
var userNameField = document.querySelector('#user-name');
var emailField = document.querySelector('#user-email');

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

// services slider

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

// Modal add to cart

var openCatalogBuyForm = document.querySelector('.cart-item-add');
var closeCatalogBuyForm = document.querySelector('.cart-close-btn');
var catalogBuyButtons = document.querySelectorAll('.image-hover-btn');
var continueShoppingBtn = document.querySelector('.cart-item-back__btn');

closeCatalogBuyForm.addEventListener('click', function () {
  openCatalogBuyForm.classList.remove('modal-show');
});

continueShoppingBtn.addEventListener('click', function () {
  openCatalogBuyForm.classList.remove('modal-show');
});

// Slider offer

var sliderArray = document.querySelectorAll('.slider-block');
var sliderWrapper = document.querySelector('.offers-slider-wrapper');
var sliderMoveRightButton = document.querySelector('.controls__right-btn');
var sliderMoveLeftButton = document.querySelector('.controls__left-btn');
var sliderDots = document.querySelectorAll('.offers-slider-dot');
var moveDistance = 270;
var currentSlidePosition = 0;
var sliderCounter = 1;

var slideCount = sliderArray.length;

var moveSlider = function (distance) {
  return sliderWrapper.style.transform = 'translateY(' + distance +'px)';
};

var makeDefaultDot = function (number) {
  --number;
  sliderDots[number].classList.remove('dot-current');
};

var makeCurrentDot = function (number) {
  --number;
  sliderDots[number].classList.add('dot-current');
};

sliderMoveRightButton.addEventListener('click', function (evt) {
  if (slideCount > sliderCounter) {
    currentSlidePosition -= moveDistance;
    moveSlider(currentSlidePosition);
    makeDefaultDot(sliderCounter);
    ++sliderCounter;
    makeCurrentDot(sliderCounter);
  } else {
    evt.preventDefault();
  }
  console.log(sliderCounter);
});

sliderMoveLeftButton.addEventListener('click', function (evt) {
  if (sliderCounter > 1) {
    currentSlidePosition += moveDistance;
    moveSlider(currentSlidePosition);
    makeDefaultDot(sliderCounter);
    --sliderCounter;
    makeCurrentDot(sliderCounter);
  } else {
    evt.preventDefault();
  }
  console.log(sliderCounter);
});