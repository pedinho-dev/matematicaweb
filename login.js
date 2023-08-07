const containerLogin = document.querySelector('.login')
const inputLogin = document.querySelector('.login-name')
const avatarName = document.querySelector('.avatar-name')
const submitName = document.querySelector('.submit-name')
const recordWinTitle = document.querySelector('.recorder-win__title')

if(localStorage.name || localStorage.confirm){
    avatarName.textContent = localStorage.name
    containerLogin.style.display = "none"
    recordWinTitle.textContent = `Uau! ${localStorage.name} Você é um mago da multiplicação!!`
}

const enviarname = () => {
    if(inputLogin.value != 0){
        avatarName.textContent = inputLogin.value
        let nameUser = inputLogin.value
        localStorage.setItem("name", nameUser)
        localStorage.setItem("confirm", "confirmado")
        containerLogin.style.display = "none"
    }
    recordWinTitle.textContent = `Uau! ${inputLogin.value} Você é um mago da multiplicação!!`
}

submitName.addEventListener('click', enviarname)



