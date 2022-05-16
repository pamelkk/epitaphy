const buttonTabOpenMenu = document.querySelector('.header__tab')
const buttonTabCloseMenu = document.querySelector('.header__nav-tab button')
const popupMenu = document.querySelector('.header__nav')
const buttonTabOpenResult = document.querySelector('.header__result')
const buttonTabCloseResult = document.querySelector('.main__header-result-wrapper-tab')
const popupResult = document.querySelector('.main__header-result')
const ESC_KEYCODE = 27
const inputSecondName = document.getElementById("second-name");
const inputName = document.getElementById("name");
const inputSurName = document.getElementById("surname");
const inputInscription = document.getElementById("inscription");

function changeValueInput (field, input) {
    document.getElementById(field).innerHTML = input.value;
}

inputSecondName.oninput = function() {
    changeValueInput('new-second-name', inputSecondName);
};

inputName.oninput = function() {
    changeValueInput('new-name', inputName);
};

inputSurName.oninput = function() {
    changeValueInput('new-surname', inputSurName);
};

inputInscription.oninput = function() {
    changeValueInput('new-inscription', inputInscription);
};

function changeClassPopup (popup, openedClassOfPopup) {
    if (!popup.classList.contains(openedClassOfPopup)) {
        popup.classList.add(openedClassOfPopup)
    } else {
        popup.classList.remove(openedClassOfPopup)
    }
}

buttonTabOpenMenu.addEventListener('click', function () {
    changeClassPopup(popupMenu, 'header__nav--opened');
})

buttonTabCloseMenu.addEventListener('click', function () {
    changeClassPopup(popupMenu, 'header__nav--opened');
})

window.addEventListener('click', function (e) {
    if (e.target === popupMenu) {
        changeClassPopup(popupMenu, 'header__nav--opened');
    }
})

document.addEventListener('keydown', function (e) {
    if (e.keyCode === ESC_KEYCODE) {
        changeClassPopup(popupMenu, 'header__nav--opened');
    }
})

buttonTabOpenResult.addEventListener('click', function () {
    changeClassPopup(popupResult, 'main__header-result--opened');
})

buttonTabCloseResult.addEventListener('click', function () {
    changeClassPopup(popupResult, 'main__header-result--opened');
})

window.addEventListener('click', function (e) {
    if (e.target === popupResult) {
        changeClassPopup(popupResult, 'main__header-result--opened');
    }
})

document.addEventListener('keydown', function (e) {
    if (e.keyCode === ESC_KEYCODE) {
        changeClassPopup(popupResult, 'main__header-result--opened');
    }
})