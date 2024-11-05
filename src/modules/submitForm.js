let isLoading = false

export const sendFormToServer = async () => {
  isLoading = true
  try {
    await fetch("/api/registration", {
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

    console.log("done")
    
  } catch (error) {
    console.log(error.message)
  } finally {
    isLoading = false
    inputName.value = ""
    inputEmail.value = ""
    textAreaMessage.value = ""
  }
}