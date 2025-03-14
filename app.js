//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Declara uma variável do tipo array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
  
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value; 

    // Valida a entrada
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.'); 
        return; 
    }

    // Verifica se o nome já está na lista
    if (amigos.includes(nomeAmigo)) {
        alert('Esse nome já foi adicionado.'); 
        return; 
    }

    // Atualiza o array de amigos
    amigos.push(nomeAmigo); 
    atualizarListaAmigos(); 

    // Limpa o campo de entrada
    inputAmigo.value = ''; 
}

// Função para atualizar a lista de amigos na interface
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 

    // Percorre o array amigos e adiciona cada nome como um elemento <li>
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li'); 
        li.textContent = amigos[i]; 
        listaAmigos.appendChild(li); 
    }
}

// Função para sortear um amigo secreto
function sortearAmigo() {
 
    if (amigos.length === 0 || amigos.length < 2) {
        alert('Não há amigos para sortear.'); 
        return; 
    }

    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio]; 

    // Mostra o resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo secreto sorteado: <strong>${amigoSorteado}</strong>`; 

    // Limpa a lista de amigos
    amigos = []; 
    atualizarListaAmigos();

}