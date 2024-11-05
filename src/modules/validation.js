const inputName = document.getElementById("contacts__form-input-name")
const inputNameError = document.querySelector(".contacts__form-input-name-error")
const inputEmail = document.getElementById("contacts__form-input-email")
const inputEmailError = document.querySelector(".contacts__form-input-email-error")
const inputPhone = document.getElementById("contacts__form-input-phone")
const inputPhoneError = document.querySelector(".contacts__form-input-phone-error")
const textAreaMessage = document.getElementById("contacts__form-message")
const textAreaMessageError = document.querySelector(".contacts__form-message-error")

const validationName = (name) => {
  const regEx = /^[A-Za-zА-Яа-яЁё]{1,30}$/;
  const splitName = name.split(" ");
  const result = splitName.every((item) => regEx.test(item))
  if(!result) {
    inputName.classList.add("form_invalid")
    if(name === "") {
      inputNameError.innerHTML = "Поле имени не должно быть пустым"
      return false
    } else if(name.length < 2 || name.length > 30) {
      inputNameError.innerHTML = "Имя должно содержать от 1 до 30 букв"
    }
  } else {
    inputNameError.innerHTML = ""
    inputName.classList.remove("form_invalid")
  }
  return result
}

const validationEmail = (email) => {
  const regEx = /(\w\.?)+@[\w\.-]+\.\w{2,}/;
  const result = regEx.test(email)
  if(!result) {
    inputEmail.classList.add("form_invalid")
    if(email === "") {
      inputEmailError.innerHTML = "Поле почты не должно быть пустым"
      return false
    } else {
      inputEmailError.innerHTML = "Почта должна иметь следующий формат: example@mail.com"
    }
  } else {
    inputEmailError.innerHTML = ""
    inputEmail.classList.remove("form_invalid")
  }
  return result
}

const validationPhone = (phone) => {
  const result = phone.length === 19 ? false : true
  if(result) {
    inputPhone.classList.add("form_invalid")
    inputPhoneError.innerHTML = "Телефон должен иметь следующий формат: +375 (00) 000-00-00"
  } else {
    inputPhoneError.innerHTML = ""
    inputPhone.classList.remove("form_invalid")
  }
  return result
}

const validationMessage = (message) => {
  const result = message === "" ? false : true
  if(!result) {
    textAreaMessage.classList.add("form_invalid")
    textAreaMessageError.innerHTML = "Поле сообщения не должно быть пустым"
  } else {
    textAreaMessageError.innerHTML = ""
    textAreaMessage.classList.remove("form_invalid")
  }
  return result
}

export const validationForm = () => {
  const validName = validationName(inputName.value)
  const validEmail = validationEmail(inputEmail.value)
  const validPhone = validationPhone(inputPhone.value)
  const validMessage = validationMessage(textAreaMessage.value)

  console.log("valid")
  
  return validName && validEmail && validPhone && validMessage
}