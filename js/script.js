const telefone = document.getElementById("telefone");

telefone.addEventListener("input", filtraNumero);

function filtraNumero(event) {
    event.target.value = event.target.value.replace(/[^0-9]/g, "");
}

const botao = document.getElementById("botaoEnviar");

botao.addEventListener("click", validaFormulario);

function validaFormulario() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;

    if (nome !== "" && email !== "" && telefone !== "") {
        alert("Prontinho! Você receberá as novidades por e-mail.")
    } else {
        alert("Por favor, preencha todos os campos.")
    }
}