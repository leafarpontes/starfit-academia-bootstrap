function validaNome(field) {
    let letras = /^[a-zA-Z\s]*$/;
    let nome = field.value;

    if (nome.match(letras) && nome != "") {
        return true;
    }
    else {
        return false;
    }
}

function validaEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
            return true;
    }
    else{
        return false;
    }
}

function validaNumero(field) {
    num = field.value;

    if (!isNaN(num) && num != "" && num.length == 11) {
        return true;
    }
    else {
        return false;
    }
}

function validaVazio(field) {

    if (field.value != "") {
        return true;
    }
    else {
        return false;
    }
}

$(function() {
    $("#nome").focusout(function() {
        if (validaNome(this)) {
            $(this).addClass("right");
            $(this).removeClass("wrong");
        }
        else {
            $(this).addClass("wrong");
            $(this).removeClass("right");
        }
    })
})

$(function() {
    $("#email").focusout(function() {
        if (validaEmail(this)) {
            $(this).addClass("right");
            $(this).removeClass("wrong");
        }
        else {
            $(this).addClass("wrong");
            $(this).removeClass("right");
        }
    })
})

$(function() {
    $("#numero").focusout(function() {
        if (validaNumero(this)) {
            $(this).addClass("right");
            $(this).removeClass("wrong");
        }
        else {
            $(this).addClass("wrong");
            $(this).removeClass("right");
        }
    })
})

$(function() {
    $("#assunto, #msg").focusout(function() {
        if (validaVazio(this)) {
            $(this).addClass("right");
            $(this).removeClass("wrong");
        }
        else {
            $(this).addClass("wrong");
            $(this).removeClass("right");
        }
    })
})

$(function() {
    $("#btn-enviar").click(function() {
        let nomeInput = document.getElementById('nome');
        let emailInput = document.getElementById('email');
        let numeroInput = document.getElementById('numero');
        let assuntoInput = document.getElementById('assunto');
        let msgInput = document.getElementById('msg');

        let correctDiv = $("#correct-div");
        let incorrectDiv = $("#incorrect-div");
        if (validaNome(nomeInput) && validaEmail(emailInput) && validaNumero(numeroInput)
            && validaVazio(assuntoInput) && validaVazio(msgInput)) {
            correctDiv.css({"display": "block"});
            incorrectDiv.css({"display": "none"});
        }
        else {
            incorrectDiv.css({"display": "block"});
            correctDiv.css({"display": "none"});
        }
    })
})