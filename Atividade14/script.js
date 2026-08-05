function validar() {


    let nome = document.nomeform.elements["nome"].value;
    let email = document.nomeform.elements["email"].value;
    let comentario = document.nomeform.elements["comentario"].value;
    let pesquisa = document.nomeform.elements["pesquisa"];


    if (nome.length < 10) {
        alert("O nome deve ter pelo menos 10 caracteres.");
        return false;
    }


    if (comentario.length < 20) {
        alert("O comentário deve ter no mínimo 20 caracteres.");
        return false;
    }


    let respondeu = false;
    let primeiraVez = false;

    for (let i = 0; i < pesquisa.length; i++) {
        if (pesquisa[i].checked) {
            respondeu = true;

            if (pesquisa[i].value == "sim") {
                primeiraVez = true;
            }
        }
    }

    if (!respondeu) {
        alert("Responda a pesquisa.");
        return false;
    }

    if (primeiraVez) {
        alert("Que bom que você voltou a visitar esta página!");
    } else {
        alert("Volte sempre à esta página!");
    }

    return true;
}
