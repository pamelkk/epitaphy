const buttonTabOpen = document.querySelector('.header__tab')
const buttonTabClose = document.querySelector('.header__nav-tab button')
const popupMenu = document.querySelector('.header__nav')
const ESC_KEYCODE = 27


buttonTabOpen.addEventListener('click', function () {
    if (!popupMenu.classList.contains('header__nav--opened')) {
        popupMenu.classList.add('header__nav--opened')
    }
})

buttonTabClose.addEventListener('click', function () {
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