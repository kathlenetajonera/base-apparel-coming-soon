const emailField = document.querySelector("#email")
const submitBtn = document.querySelector("#submit-button")
const resultText = document.querySelector("#resultText")

emailField.addEventListener("keypress", e => {
    if (e.key === "Enter") {
        e.preventDefault()

        validateEmail(emailField.value)
    }
})

submitBtn.addEventListener("click", () => validateEmail(emailField.value))

function validateEmail(userEmail) {
    const emailPattern = /^([a-z\d\._-]+)@([a-z]{4,6})(\.[a-z]{2,3})(\.[a-z]{2,3})?$/i

    if (userEmail.match(emailPattern)) {
        showSuccess()
    } else {
        showError()
    }
}

function showSuccess() {
    addValidClass(emailField)
    addValidClass(resultText)

    resultText.textContent = "Valid email address"
}

function showError() {
    addErrorClass(emailField)
    addErrorClass(resultText)

    resultText.textContent = "Please provide a valid email"
}

const addValidClass = (elem) => {
    elem.classList.remove("error")
    elem.classList.add("valid")
}
 
const addErrorClass = (elem) => {
    elem.classList.remove("valid")
    elem.classList.add("error")
}
