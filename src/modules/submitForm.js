const inputName = document.getElementById("contacts__form-input-name")
const inputEmail = document.getElementById("contacts__form-input-email")
const inputPhone = document.getElementById("contacts__form-input-phone")
const textAreaMessage = document.getElementById("contacts__form-message")
const sendBtn = document.querySelector(".send-btn")
const fetchMessage = document.querySelector(".fetch-message")

export const sendFormToServer = async () => {
  sendBtn.innerText = "Отправляется..."
  try {
    await fetch("http://localhost:9090/api/submit", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: inputName.value, 
        email: inputEmail.value,
        phone: inputPhone.value,
        message: textAreaMessage.value,
      })
    })
    .then((response) => response.json())  
    .then((response) => {
      fetchMessage.innerText = response.status === "error" ? response.fields.inputName : response.msg
      fetchMessage.style = response.status === "error" ? "color: red;" : "color: green;"
    })
  } catch (error) {
    console.log(error.message)
  } finally {
    sendBtn.innerText = "Отправить сообщение"
    inputName.value = ""
    inputPhone.value = ""
    inputEmail.value = ""
    textAreaMessage.value = ""
    setTimeout(() => {
      fetchMessage.innerText = ""
    }, 3000)
  }
}