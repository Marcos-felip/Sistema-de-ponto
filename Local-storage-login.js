//entradas de cadastros
let inputNameAluno = document.getElementById("input-name-aluno");
let inputCpfAluno = document.getElementById("input-cpf-aluno");
let inputMatriculaAluno = document.getElementById("input-matricula-aluno");
let inputEmailAluno = document.getElementById("input-email-aluno");
let inputPasswordAluno = document.getElementById("input-senha-aluno");

//entradas de login
let email = document.getElementById("email");
let password = document.getElementById("password");

// let btnEntrar = document.getElementById("signin");
let btnEntrar = document.getElementById("entrar");

let btnBtnSecond = document.getElementById("btn-cadastra-aluno");



//lança o objeto cadastro para o array de objetos chamado cadastraAlunos
function cadastraAluno() {

    let nomeAluno = inputNameAluno.value;
    let cpfAluno = inputCpfAluno.value;
    let matriculaAluno = inputMatriculaAluno.value;
    let emailAluno = inputEmailAluno.value;
    let passwordAluno = inputPasswordAluno.value;

    if (!nomeAluno || !cpfAluno || !matriculaAluno || !emailAluno) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    let cadastrosAlunos = JSON.parse(localStorage.getItem('usuarios')) || [];
    cadastrosAlunos.push({ nomeAluno, cpfAluno, matriculaAluno, emailAluno, passwordAluno });
    localStorage.setItem('usuarios', JSON.stringify(cadastrosAlunos));
}

//pega array de alunos do localstorage e o retornaf em formato objeto.
function pegaCadastroUsuario() {
    let arrayUsuarios = JSON.parse(localStorage.getItem('usuarios'));
    return arrayUsuarios;
}


function autenticaUsuario() {
    //não deixa a tela recarregar depois do login
    event.preventDefault();

    let emailLogin = email.value;
    let passwordLogin = password.value;

    let usuarioValidado, senhaValidada, nomeAluno;

    let arrayUsuarios = pegaCadastroUsuario();

    for (let i = 0; i < arrayUsuarios.length; i++) {
        let usuarioAtual = arrayUsuarios[i];

        if (emailLogin == usuarioAtual.emailAluno && passwordLogin == usuarioAtual.passwordAluno) {
            usuarioValidado = usuarioAtual.emailAluno;
            senhaValidada = usuarioAtual.passwordAluno;

            nomeAluno = usuarioAtual.nomeAluno;
            matricula = usuarioAtual.matriculaAluno;

            localStorage.removeItem('alunoLogado');
            localStorage.removeItem('matriculaAlunoLogado');

            localStorage.setItem('alunoLogado', nomeAluno);
            localStorage.setItem('matriculaAlunoLogado', matricula);

            break
        }
    }

    if (!emailLogin || !passwordLogin) {
        alert('Preencha as informações antes de continuar!');
        email.focus()

    }
    else if (emailLogin == usuarioValidado && passwordLogin == senhaValidada) {
        // alert('Autenticado!')
        // email.focus()
        window.location.href = 'painel-aluno.html'



    } else {
        alert('Usuário ou senha incorretos!')
        email.focus()

    }
}



btnBtnSecond.addEventListener('click', cadastraAluno);
btnEntrar.addEventListener('click', autenticaUsuario);

