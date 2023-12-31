console.log("pegou")
const arr1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
const arr2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

const inputResposta = document.querySelector('.input-resposta-value')
const btnResposta = document.querySelector('.btn-resposta')
const textNumber = document.querySelector('.number-text')
const textNumber2 = document.querySelector('.number-text2')
const containerResult = document.querySelector('.resultados-container')
const respostaErrada = document.querySelector('.respost-err')
const acertos = document.querySelector('.acertos')
const erros = document.querySelector('.erros')
const score = document.querySelector('.main-container__score')
const containerElements = document.querySelector('.main-container__elements')
const avatarUser = document.querySelector('.avatar-user')
const recordWinClose = document.querySelector('.close-record-win')
const recordWinContainer = document.querySelector('.recorder-win')
const respondeHelpContainer = document.querySelector('.response-help-container')
const dinamicRankingUser = document.querySelector('.ranking-score-user')

let sorteioNumero = Math.random() * 10
let sorteioNumero2 = Math.random() * 10
let sorteioNumeroInt = Math.floor(sorteioNumero)
let sorteioNumeroInt2 = Math.floor(sorteioNumero2)

let count  = 0
let countError  = 0
let consecutiveWrongAnswers = 0

if(localStorage.scoreSave){
	score.textContent = `Maior pontuação: ${localStorage.scoreSave}`
	avatarUser.textContent = `+${localStorage.scoreSave}`
}

const vibrateAnimation = () => {
	if (containerElements.classList.contains("vibrate")) {
		containerElements.classList.toggle('vibrate')
	}else{
		containerElements.classList.toggle('vibrate')
	}
}

const contadorAcertos = () => {
	count++
	acertos.textContent = `Acertos: ${count}`
	if(count === 10) {
		recordWinContainer.classList.toggle('win')
	}
	if (count === 5) {
		let dinamicCount = count * 2
		let dinamicRankingUserNumber = parseInt(dinamicRankingUser.textContent)
 		dinamicRankingUser.textContent = dinamicRankingUserNumber + dinamicCount
	}
}
const contadorErros = () => {
	countError++
	erros.textContent = `Erros: ${countError}`
}

const scoreCount = () => {
	if(localStorage.scoreSave >= count) {
		score.textContent = `Maior pontuação: ${localStorage.scoreSave}`
		avatarUser.textContent = `+${localStorage.scoreSave}`
	}else if(count != 0){
		avatarUser.textContent = `+${count}`
		score.textContent = `Maior pontuação ${count}`
		let scoreCountSave = count
		localStorage.setItem("scoreSave", scoreCountSave)
	}else{
		console.log('massa')
	}
}


const armazenarResposta = () => {

	const criarP = document.createElement("p")
	criarP.textContent = `${sorteioNumeroInt + 1} X ${sorteioNumeroInt2 + 1} = ${inputResposta.value}`
	containerResult.appendChild(criarP)
}


const enviarResposta = () => {

	let result = arr1[sorteioNumeroInt] * arr2[sorteioNumeroInt2]
	if (result == inputResposta.value) {
		respostaErrada.classList.remove('visible')
		contadorAcertos()

	 	console.log(`Sua respota está correta, o resultado de ${arr1[sorteioNumeroInt]} X ${arr2[sorteioNumeroInt2]}
	 	 é = ${inputResposta.value}`)

	 	armazenarResposta()

	 	sorteioNumero = Math.random() * 10
		sorteioNumero2 = Math.random() * 10
		sorteioNumeroInt = Math.floor(sorteioNumero)
		sorteioNumeroInt2 = Math.floor(sorteioNumero2)

		mostrarNumeros()
		inputResposta.value = ""
		respondeHelpContainer.innerHTML = ""
	 }else if (inputResposta.value != 0) {
	 	respostaErrada.classList.add('visible')
	 	contadorErros()
		scoreCount()
		vibrateAnimation()
		consecutiveWrongAnswers++
	 	
	 }else {
	 	console.log('resposta errada')
	 }

	const motrarResposta = () => {
		respondeHelpContainer.innerHTML = `<div class="response-help">
				<p class="response-text">Uma ajudinha, a respsta é: ${result}</p>
			</div>`
	}
	console.log(arr1[sorteioNumeroInt] + "" + "X" + "" + arr2[sorteioNumeroInt2])

	console.log(consecutiveWrongAnswers)
	 if (consecutiveWrongAnswers === 5) {
	 	motrarResposta()
	 	console.log(`Uma ajudinha, a resposta é: ${result}`)
	 	consecutiveWrongAnswers = 0
	 }
}

const inserirItem = (evento) => {
    const tecla = evento.key
    if (tecla === 'Enter') {
        enviarResposta()
    }

}

recordWinClose.addEventListener('click', () => {
	recordWinContainer.classList.toggle('win')
})

btnResposta.addEventListener('click', enviarResposta)
document.addEventListener('keypress', inserirItem)


const mostrarNumeros = () => {
	textNumber.textContent = sorteioNumeroInt + 1
	textNumber2.textContent = sorteioNumeroInt2 + 1
}

mostrarNumeros()
console.log(arr1[sorteioNumeroInt] + "" + "X" + "" + arr2[sorteioNumeroInt2])
