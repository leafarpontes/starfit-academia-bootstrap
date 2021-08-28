const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const numeroInput = document.getElementById('numero');
const assuntoInput = document.getElementById('assunto');
const msgInput = document.getElementById('msg');
const botaoEnviar = document.getElementById('btn-enviar');
const correctDiv = document.getElementById('correct-div');
const incorrectDiv = document.getElementById('incorrect-div');

// variaveis de controle de validação
let nomeOk, emailOk, numeroOk, assuntoOk, msgOk;

nomeInput.addEventListener('keyup', validaNome);
emailInput.addEventListener('keyup', validaEmail);
numeroInput.addEventListener('keyup', validaNumero);
assuntoInput.addEventListener('keyup', validaAssunto);
msgInput.addEventListener('keyup', validaMsg);
botaoEnviar.addEventListener('click', validaFormulario);

function correctInput(x) {
    x.classList.add("correct");
    x.classList.remove("wrong");
}

function wrongInput(x) {
    x.classList.add("wrong");
    x.classList.remove("correct");
}

function validaNome() {
    let letras = /^[a-zA-Z\s]*$/;
    let nome = this.value;

    if (nome.match(letras) && nome != "") {
        correctInput(this);
        nomeOk = true;
    }
    else {
        wrongInput(this);
        nomeOk = false;
    }
}

function validaEmail() {
    usuario = this.value.substring(0, this.value.indexOf("@"));
    dominio = this.value.substring(this.value.indexOf("@")+ 1, this.value.length);
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
            correctInput(this);
            emailOk = true;
    }
    else{
        wrongInput(this);
        emailOk = false;
    }
}

function validaNumero() {
    numRegEx = /^[(][0-9]{2}[)]\s?[0-9]{4,5}[-][0-9]{4}$/;
    num = this.value;

    if (num.match(numRegEx) && num != "") {
        correctInput(this);
        numeroOk = true;
    }
    else {
        wrongInput(this);
        numeroOk = false;
    }
}

function validaAssunto() {
    if (this.value != "") {
        correctInput(this);
        assuntoOk = true;
    }
    else {
        wrongInput(this);
        assuntoOk = false;
    }
}

function validaMsg() {
    if (this.value != "") {
        correctInput(this);
        msgOk = true;
    }
    else {
        wrongInput(this);
        msgOk = false;
    }
}

function validaFormulario() {
    if (nomeOk && emailOk && numeroOk && assuntoOk && msgOk) {
        correctDiv.style.display = "block";
        incorrectDiv.style.display = "none";
    }
    else {
        incorrectDiv.style.display = "block";
        correctDiv.style.display = "none";
    }
}