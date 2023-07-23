const containerLogin = document.querySelector('.login')
const inputLogin = document.querySelector('.login-name')
const avatarName = document.querySelector('.avatar-name')
const submitName = document.querySelector('.submit-name')

if(localStorage.name || localStorage.confirm){
    avatarName.textContent = localStorage.name
    containerLogin.style.display = "none"
}

const enviarname = () => {
    if(inputLogin.value != 0){
        avatarName.textContent = inputLogin.value
        let nameUser = inputLogin.value
        localStorage.setItem("name", nameUser)
        localStorage.setItem("confirm", "confirmado")
        containerLogin.style.display = "none"
    }
}

submitName.addEventListener('click', enviarname)



