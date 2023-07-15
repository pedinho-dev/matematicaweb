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

let sorteioNumero = Math.random() * 10
let sorteioNumero2 = Math.random() * 10
let sorteioNumeroInt = Math.floor(sorteioNumero)
let sorteioNumeroInt2 = Math.floor(sorteioNumero2)

let count  = 0
let countError  = 0

const contadorAcertos = () => {
	count++
	acertos.textContent = `Acertos: ${count}`
}
const contadorErros = () => {
	countError++
	erros.textContent = `Erros: ${countError}`
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
	 }else if (inputResposta.value != 0) {
	 	respostaErrada.classList.add('visible')
	 	contadorErros()
	 	
	 }else {
	 	console.log('resposta errada')
	 } 


	console.log(arr1[sorteioNumeroInt] + "" + "X" + "" + arr2[sorteioNumeroInt2])
}

const inserirItem = (evento) => {
    const tecla = evento.key
    if (tecla === 'Enter') {
        enviarResposta()
    }

}


btnResposta.addEventListener('click', enviarResposta)
document.addEventListener('keypress', inserirItem)


const mostrarNumeros = () => {
	textNumber.textContent = sorteioNumeroInt + 1
	textNumber2.textContent = sorteioNumeroInt2 + 1
}

mostrarNumeros()
console.log(arr1[sorteioNumeroInt] + "" + "X" + "" + arr2[sorteioNumeroInt2])
