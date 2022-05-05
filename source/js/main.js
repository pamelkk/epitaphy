const buttonTabOpenMenu = document.querySelector('.header__tab')
const buttonTabCloseMenu = document.querySelector('.header__nav-tab button')
const popupMenu = document.querySelector('.header__nav')
const buttonTabOpenResult = document.querySelector('.header__result')
const buttonTabCloseResult = document.querySelector('.main__header-result-wrapper-tab')
const popupResult = document.querySelector('.main__header-result')
const ESC_KEYCODE = 27


buttonTabOpenMenu.addEventListener('click', function () {
    if (!popupMenu.classList.contains('header__nav--opened')) {
        popupMenu.classList.add('header__nav--opened')
    }
})

buttonTabCloseMenu.addEventListener('click', function () {
    if (popupMenu.classList.contains('header__nav--opened')) {
        popupMenu.classList.remove('header__nav--opened')
    }
})

window.addEventListener('click', function (e) {
    if (e.target === popupMenu) {
        popupMenu.classList.remove('header__nav--opened')
    }
})

document.addEventListener('keydown', function (e) {
    if (e.keyCode === ESC_KEYCODE & popupMenu.classList.contains('header__nav--opened')) {
        popupMenu.classList.remove('header__nav--opened')
    }
})

buttonTabOpenResult.addEventListener('click', function () {
    if (!popupResult.classList.contains('main__header-result--opened')) {
        popupResult.classList.add('main__header-result--opened')
    }
})

buttonTabCloseResult.addEventListener('click', function () {
    if (popupResult.classList.contains('main__header-result--opened')) {
        popupResult.classList.remove('main__header-result--opened')
    }
})

window.addEventListener('click', function (e) {
    if (e.target === popupResult) {
        popupResult.classList.remove('main__header-result--opened')
    }
})

document.addEventListener('keydown', function (e) {
    if (e.keyCode === ESC_KEYCODE & popupResult.classList.contains('main__header-result--opened')) {
        popupResult.classList.remove('main__header-result--opened')
    }
})