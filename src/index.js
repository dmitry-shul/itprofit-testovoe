const phoneInput = document.getElementById('contacts__form-input-phone');

const mask = IMask(phoneInput, {
  mask: '+{375} (00) 000-00-00'
});

//console.log("ff43ff5")

const modalBackground = document.querySelector(".background-blur")
const openModalBtn = document.querySelector(".open-modal-btn")
const closeModalBtn = document.querySelector(".close-modal-btn")

openModalBtn.addEventListener("click", () => {
  modalBackground.classList.add("background-blur_active")
})

closeModalBtn.addEventListener("click", () => {
  modalBackground.classList.remove("background-blur_active")
})