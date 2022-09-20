const nome = document.getElementById('nomeInput');
const email = document.getElementById('emailInput');
const data = document.getElementById('dataInput');
const turma = document.getElementById('turmaInput');
let exibirNoHtml = document.getElementById('resultado');
let armazenaCadastros = [];

class Cadastra {
    constructor(nomeP, emailP, dataP, turmaP) {
        this.nome = nomeP;
        this.email = emailP;
        this.data = dataP;
        this.turma = turmaP;
    }

    card = function () {
        return '<div class="card">' +
            '<p><i>Nome: </i> ' + this.nome + '</p>' +
            '<p><i>E-mail: </i> ' + this.email + '</p>' +
            '<p><i>Data de Nascimento: </i> ' + this.data + '</p>' +
            '<p><i>Turma: </i> ' + this.turma + '</p>' +
            '</div>';
    }
}

function cadastrar() {
    armazenaCadastros.push(new Cadastra(nome.value, email.value, data.value, turma.value));
    console.log(armazenaCadastros);
    document.getElementById('formulario').reset();
    exibir();
}


exibir = function () {
    let card = "";
    for (let i = 0; i < armazenaCadastros.length; i++) {
        card += armazenaCadastros[i].card();
    }

 exibirNoHtml.innerHTML = card;   
}
