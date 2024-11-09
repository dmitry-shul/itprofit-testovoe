const phoneInput = document.getElementById('contacts__form-input-phone');

const mask = IMask(phoneInput, {
  mask: '+{375} (00) 000-00-00'
});

const modalBackground = document.querySelector(".background-blur")
const openModalBtn = document.querySelector(".open-modal-btn")
const closeModalBtn = document.querySelector(".close-modal-btn")
const body = document.body;

openModalBtn.addEventListener("click", () => {
  modalBackground.classList.add("background-blur_active")
  let scrollWidth = window.innerWidth - document.documentElement.clientWidth;
  body.style.setProperty('--scrollWidth', scrollWidth + "px");
  body.classList.add('noscroll');
})

closeModalBtn.addEventListener("click", () => {
  modalBackground.classList.remove("background-blur_active")
  body.classList.remove('noscroll');
})


//form
import { validationForm } from "./modules/validation";
import { sendFormToServer } from "./modules/submitForm";

const form = document.querySelector(".contacts__form")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const validation = validationForm()
  validation && sendFormToServer()
})