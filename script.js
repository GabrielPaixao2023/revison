//Criar variáveis

//let nome = "Gabriel"
let idade = 16
let idadeIrmao = "16"
const anoNascimento = 2006

// decisão 

if (idade === idadeIrmao) {
    alert("Igual...")
}else {
    alert("Cada um no seu quadrado!")
}

// lendo informações do HTML

const titilo = document.getElementById("titulo")
const nome = document.getElementById("nome")
const email = document.getElementById("email")
const resultado = document.getElementById("resultado")


console.log("titulo")

titilo.textContent = "Mudei o titulo!! Eu posso..."

titulo.style.color = "orange"

function mostrarResultado() {

    resultado.textContent = nome.value + " " + email.value

}