var KEYCODE_ESC = 27;

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEYCODE_ESC) {
    if (openCatalogBuyForm.classList.contains('modal-show')) {
      evt.preventDefault();
      openCatalogBuyForm.classList.remove('modal-show');
    }
  }
});

// Modal add to cart

var openCatalogBuyForm = document.querySelector('.cart-item-add');
var closeCatalogBuyForm = document.querySelector('.cart-close-btn');
var catalogBuyButtons = document.querySelectorAll('.image-hover-btn');
var continueShoppingBtn = document.querySelector('.cart-item-back__btn');

catalogBuyButtons.forEach(function (button) {
  button.addEventListener('click', function (evt) {
    evt.preventDefault();
    openCatalogBuyForm.classList.add('modal-show');
  });
});

openCatalogBuyForm.addEventListener('click', function (evt) {
  evt.preventDefault();
  openCatalogBuyForm.classList.remove('modal-show');
});

closeCatalogBuyForm.addEventListener('click', function (evt) {
  evt.preventDefault();
  openCatalogBuyForm.classList.remove('modal-show');
});

continueShoppingBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  openCatalogBuyForm.classList.remove('modal-show');
});
