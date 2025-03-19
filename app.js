let amigos = [];

function adicionarAmigo() {
  const novoAmigo = document.getElementById("amigo");
  const nome = novoAmigo.value.trim();

  if (nome === "") {
    alert("Por favor, digite um nome válido.");
    return;
  }

  if (amigos.includes(nome)) {
    alert("Este nome já foi adicionado.");
    return;
  }

  amigos.push(nome);
  novoAmigo.value = "";
  atualizarListaAmigos();
}

function atualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  amigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = amigo;

    // Botão para excluir o amigo selecionado
    const botaoRemover = document.createElement("button");
    botaoRemover.innerHTML = '<i class="fa fa-trash"></i>'; // Ícone da lixeira do Font Awesome
    botaoRemover.classList.add("button-remove");
    botaoRemover.onclick = () => removerAmigo(index);

    li.appendChild(botaoRemover);
    listaAmigos.appendChild(li);
  });
}

function removerAmigo(index) {
  amigos.splice(index, 1); // Remove da lista
  atualizarListaAmigos();
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione pelo menos um amigo para sortear.");
    return;
  }

  const listaResultado = document.getElementById("resultado");
  listaResultado.innerHTML = "";

  const amigoSorteado = sortearUmAmigo();
  const mensagem = `Parabéns: ${amigoSorteado}`;

  const li = document.createElement("li");
  li.textContent = mensagem;
  listaResultado.appendChild(li);

  // Limpa a lista
  amigos = [];
  atualizarListaAmigos();
}

function sortearUmAmigo() {
  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  return amigos[indiceSorteado];
}
