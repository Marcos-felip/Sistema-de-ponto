// Exemplo de estrutura dos dados no localStorage
const atividades = [
  { valorSelecionado: "ginecologia/obstetrícia", diaMes: "27/5", usuarioLogado: "stefani", nome: "Bruna Gonçalves", atividade: "Atividade1" },
  // Adicione mais objetos conforme necessário
];

// Salvando a lista de atividades no localStorage (apenas para este exemplo, normalmente isso seria feito em outro lugar no seu código)
localStorage.setItem('atividades', JSON.stringify(atividades));

// Função para renderizar a lista de atividades
function renderizarLista() {
  const listaElement = document.getElementById('lista-de-atividades');
  listaElement.innerHTML = '';

  const atividades = JSON.parse(localStorage.getItem('atividades')) || [];

  atividades.forEach((atividade, index) => {
    const li = document.createElement('li');
    li.setAttribute('data-index', index);

    const nomeAluno = document.createElement('p');
    nomeAluno.classList.add('ul-li-nomealuno');
    nomeAluno.textContent = atividade.nome;

    const data = document.createElement('p');
    data.classList.add('data');
    data.textContent = atividade.diaMes;

    const descricaoAtividade = document.createElement('p');
    descricaoAtividade.id = 'ul-li-p';
    descricaoAtividade.textContent = atividade.atividade;

    li.appendChild(nomeAluno);
    li.appendChild(data);
    li.appendChild(descricaoAtividade);

    // Adicionando o event listener ao <li> para seleção
    li.addEventListener('click', function() {
      li.classList.toggle('selecionado');
    });

    listaElement.appendChild(li);
  });
}

// Função para atualizar as atividades selecionadas no localStorage
function autorizarSelecionados() {
  const atividades = JSON.parse(localStorage.getItem('atividades')) || [];
  const itensSelecionados = document.querySelectorAll('li.selecionado');

  itensSelecionados.forEach(item => {
    const index = item.getAttribute('data-index');
    if (atividades[index]) {
      atividades[index].autorizado = true;
    }
  });

  localStorage.setItem('atividades', JSON.stringify(atividades));
  alert('Atividades selecionadas foram autorizadas!');
  renderizarLista(); // Opcional: atualizar a lista para refletir as mudanças
}

// Renderiza a lista na carga da página
document.addEventListener('DOMContentLoaded', renderizarLista);

// Adiciona event listener ao botão "Autorizar Selecionados"
document.getElementById('autorizar-selecionados').addEventListener('click', autorizarSelecionados);
