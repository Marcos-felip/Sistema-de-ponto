let nomeProfessorLogado = localStorage.getItem('professorLogado');
let matriculaProfessorLogado = localStorage.getItem('matriculaProfLogado');

let saudacao = document.getElementsByClassName('saudacoes')[0]

if (saudacao) {
    saudacao.innerText = `Olá, ${nomeProfessorLogado}`;
}
// 
let nomeProfessor = document.getElementsByClassName('navbar-nome-Professor')[0];
nomeProfessor.innerText = `Professor: ${nomeProfessorLogado}`;
//
let matriculaProfessor = document.getElementsByClassName('navbar-matricula-Professor')[0];
matriculaProfessor.innerText = `matricula: ${matriculaProfessorLogado}`;



function renderizaLista() {
    var listaDeInscricoes = JSON.parse(localStorage.getItem('listaDeInscricoes'));

    console.log(listaDeInscricoes);

    if (listaDeInscricoes) {
        var alunos = listaDeInscricoes;

        var lista = document.getElementById('lista-de-atividades');

        lista.innerHTML = '';



        // Percorra o array de objetos e crie elementos <li> para cada aluno (renderiza a lista)
        alunos.forEach(function (aluno, index) {

            // if (aluno.autorizado == true) {

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

                //adicionando a classe 'selecionado para altera a cor do elemento escolhido'
                novoItem.addEventListener('click', function () {
                    novoItem.classList.toggle('selecionado');
                })

                lista.appendChild(novoItem);
            // }
        })
    }

}

function autorizaAlunos() {
    alert("Alunos autorizados")
}


document.addEventListener('DOMContentLoaded', renderizaLista);
document.getElementById('btn-registrar').addEventListener('click', autorizaAlunos);

document.getElementById('btn-sair').addEventListener('click', function () {
    window.location.href = 'index.html';
});