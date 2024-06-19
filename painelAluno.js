let nomeAlunoLogado = localStorage.getItem('alunoLogado');
let matriculaAlunoLogado = localStorage.getItem('matriculaAlunoLogado');
let botaoRegistrarPonto = document.getElementById('btn-registrar');
// let botaoSair = document.getElementById('sair');

let saudacao = document.getElementsByClassName('saudacoes')[0]

if (saudacao) {
    saudacao.innerText = `Olá, ${nomeAlunoLogado}`;
}
// 
let nomeAluno = document.getElementsByClassName('navbar-nome-aluno')[0];
nomeAluno.innerText = `aluno: ${nomeAlunoLogado}`;
//
let matriculaAluno = document.getElementsByClassName('navbar-matricula-aluno')[0];
matriculaAluno.innerText = `matricula: ${matriculaAlunoLogado}`;

//=================================================================

//PEGA NOME E ATIVIDADE e lança na lista de inscritos
var listaAtividades = document.querySelectorAll('#lista-de-atividades li');
var botaoRegistrar = document.getElementById('btn-registrar');

//FUNCAO PARA PEGAR DATA DIA E MES
function pegaData(mesParam) {

    
    function getNomeDoMes(mes) {
        const meses = [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ];
        return meses[mes];
    }

    let dataAtual = new Date();

    var ano = dataAtual.getFullYear();
    var mes = dataAtual.getMonth(); // Os meses começam do zero, então adicionamos 1
    var dia = dataAtual.getDate();

    const nomeDoMesAtual = getNomeDoMes(mes);

    let mesAtual = mes;
    let data = { ano: ano, mes: nomeDoMesAtual, dia: dia }
    // let data = { ano: ano, mes: mes, dia: dia }
    return data;
}

//variavel para armazenar lista de inscricoes
var listaDeInscricoes;
var atividadeEscolhida;

listaAtividades.forEach(function (item, index) {
    item.addEventListener('click', function () {

        //removendo classe selecionado de todos os outros itens
        listaAtividades.forEach(function (el) {
            el.classList.remove('selecionado');
        });

        item.classList.toggle('selecionado');

        // Quando um elemento é clicado, pega o texto desse elemento
        var atividadeSelecionada = item.textContent;

        // Armazena o valor do elemento em outra variável (por exemplo, uma variável chamada "valorSelecionado")
        var valorSelecionado = atividadeSelecionada;
        atividadeEscolhida = atividadeSelecionada;

        //pega nome usuario logado
        var usuarioLogado = localStorage.getItem('alunoLogado');

        //variavel para para armazenar dia e mes
        var data = pegaData();
        var diaMes = `${data.dia}/${data.mes}`

        botaoRegistrarPonto.disabled = false;

        //pega lista de inscricoes e armazena no arrai 'listaDeInscricoes'
        listaDeInscricoes = JSON.parse(localStorage.getItem('listaDeInscricoes')) || [];
        listaDeInscricoes.push({ valorSelecionado, diaMes, usuarioLogado, autorizado: false });
        // localStorage.setItem('listaDeInscricoes', JSON.stringify(listaDeInscricoes));


    });
});

function lancaInscricaoLocalStorage() {
    localStorage.setItem('listaDeInscricoes', JSON.stringify(listaDeInscricoes));
    alert(`Inscrição realizada com sucesso! Atividade: ${atividadeEscolhida}`)
    window.location.href = 'index.html';

}

//envia inscricao ao clicar no botão de registrar
botaoRegistrarPonto.addEventListener('click', lancaInscricaoLocalStorage);



// botaoSair.addEventListener('click', mudarPagina);

document.getElementById('btn-sair').addEventListener('click', function () {
    window.location.href = 'index.html';
});

