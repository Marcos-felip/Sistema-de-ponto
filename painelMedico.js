let nomeMedicoLogado = localStorage.getItem('medicoLogado');
let crmMedicoLogado = localStorage.getItem('crmMedicoLogado');

let saudacao = document.getElementsByClassName('saudacoes')[0]

if (saudacao) {
    saudacao.innerText = `Olá, ${nomeMedicoLogado}`;
}
// 
let nomeMedico = document.getElementsByClassName('navbar-nome-medico')[0];
nomeMedico.innerText = `Médico: ${nomeMedicoLogado}`;
//
let crmMedico = document.getElementsByClassName('navbar-crm-medico')[0];
crmMedicoLogado.innerText = `CRM: ${crmMedicoLogado}`;



function renderizaLista() {

    //ENVIAR CONTEUDO DA LISTA DE INSCRIÇÕES PARA A LISTA DO MEDICO.
    var listaDeInscricoes = localStorage.getItem('listaDeInscricoes');


    if (listaDeInscricoes) {
        var alunos = JSON.parse(listaDeInscricoes);

        // Obtenha a referência da lista UL
        var lista = document.getElementById('lista-de-atividades');

        // Limpa o conteúdo atual da lista
        lista.innerHTML = ''



        // Percorra o array de objetos e crie elementos <li> para cada aluno (renderiza a lista)
        alunos.forEach(function (aluno, index) {
            // Crie um novo elemento <li>
            var novoItem = document.createElement('li');

            //criando atributo para guardar o index do elemento
            novoItem.setAttribute('data-index', index);

            // Crie elementos <p> para cada propriedade do aluno e atribua os valores
            var pNomeAluno = document.createElement('p');
            pNomeAluno.textContent = aluno.usuarioLogado;
            pNomeAluno.className = 'ul-li-nomealuno';

            var pData = document.createElement('p');
            pData.textContent = aluno.diaMes;
            pData.className = 'data';

            var pAtividade = document.createElement('p');
            pAtividade.textContent = aluno.valorSelecionado;
            pAtividade.className = 'ul-li-p';


            novoItem.appendChild(pNomeAluno);
            novoItem.appendChild(pData);
            novoItem.appendChild(pAtividade);
            novoItem.classList.add('selecionado')

            //adicionando a classe 'selecionado para altera a cor do elemento escolhido'
            novoItem.addEventListener('click', function () {
                novoItem.classList.toggle('selecionado');
            })

            lista.appendChild(novoItem);

        })
    }

}


function autorizaSelecionados() {
    var listaDeInscricoes = JSON.parse(localStorage.getItem('listaDeInscricoes')) || [];
    var itensSelecionados = document.querySelectorAll('li.selecionado');

    if (itensSelecionados.length === 0) {
        alert("Por gentileza, selecione ao menos uma atividade para autorizar.");
        return;
    }

    itensSelecionados.forEach(item => {
        let index = item.getAttribute('data-index');
        if (listaDeInscricoes[index]) {
            listaDeInscricoes[index].autorizado = true;
        }
    });

    localStorage.setItem('listaDeInscricoes', JSON.stringify(listaDeInscricoes));
    alert('Inscrições selecionadas foram autorizadas!');
    // renderizaLista();

    var lista = document.getElementById('lista-de-atividades');

    lista.innerHTML = '';
    window.location.href = 'index.html';


}

//renderiza a lista na carga da pagina.
document.addEventListener('DOMContentLoaded', renderizaLista);

document.getElementById('autorizar-selecionados').addEventListener('click', autorizaSelecionados);

document.getElementById('btn-sair').addEventListener('click', function () {
    window.location.href = 'index.html';
});