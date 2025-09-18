let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    input.value = "";
    input.focus();

    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Todos os amigos já foram sorteados!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceSorteado];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado é: ${nomeSorteado}`;

    amigos.splice(indiceSorteado, 1);

    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
}