const popup = document.querySelector(".popup");
const headerButtom = document.querySelector(".header__buttom");
const presentationButtom = document.querySelector(".presentation__buttom");
const departureButtom = document.querySelector(".departure__buttom");
const popupClose = document.querySelector(".popup__close");


function openPopup() {
  popup.classList.add("popup_opened");
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

headerButtom.addEventListener("click", openPopup);
presentationButtom.addEventListener("click", openPopup);
departureButtom.addEventListener("click", openPopup);
popupClose.addEventListener("click", closePopup);
