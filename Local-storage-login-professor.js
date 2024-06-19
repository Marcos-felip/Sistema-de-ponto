//entradas de cadastros
let inputNameProfessor = document.getElementById("input-name-professor");
let inputCpfProfessor = document.getElementById("input-cpf-professor");
let inputMatriculaProfessor = document.getElementById("input-matricula-professor");
let inputEmailProfessor = document.getElementById("input-email-professor");
let inputPasswordProfessor = document.getElementById("input-senha-professor");

//entradas de login
let emailloginprofessor = document.getElementById("email-login-professor");
let passwordLoginProfessor = document.getElementById("password-login-professor");


// BOTÕES ENTRAR
let btnCadastrarProfessor = document.getElementById("cadastra-professor");
let btnEntrarprofessor = document.getElementById("btn-entrar-professor");

let btnBtnSecond = document.getElementById("btn-cadastra-aluno");

//lança o objeto cadastro para o array de objetos chamado cadastraProfessor
function cadastraProfessor() {

    let nomeProfessor = inputNameProfessor.value;
    let cpfProfessor = inputCpfProfessor.value;
    let matriculaProfessor = inputMatriculaProfessor.value;
    let emailProfessor = inputEmailProfessor.value;
    let passwordProfessor = inputPasswordProfessor.value;

    if (!nomeProfessor || !cpfProfessor || !matriculaProfessor || !emailProfessor) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    let cadastrosProfessores = JSON.parse(localStorage.getItem('usuariosProfessor')) || [];
    cadastrosProfessores.push({ nomeProfessor, cpfProfessor, matriculaProfessor, emailProfessor, passwordProfessor });
    localStorage.setItem('usuariosProfessor', JSON.stringify(cadastrosProfessores));
}

//pega array de alunos do localstorage e o retornaf em formato objeto.
function pegaCadastroUsuarioProfessor() {
    let arrayUsuariosProfessor = JSON.parse(localStorage.getItem('usuariosProfessor'));
    return arrayUsuariosProfessor;
}


function autenticaUsuarioProfessor() {
    //não deixa a tela recarregar depois do login
    event.preventDefault();

    let emailLogin = emailloginprofessor.value;
    let passwordLogin = passwordLoginProfessor.value;
    let usuarioValidado, senhaValidada;
    let arrayUsuariosProfessor = pegaCadastroUsuarioProfessor();

    if (!emailLogin || !passwordLogin) {
        alert('Preencha as informações antes de continuar!');
        emailloginprofessor.focus()

    }

    for (let i = 0; i < arrayUsuariosProfessor.length; i++) {
        let usuarioAtual = arrayUsuariosProfessor[i];

        if (emailLogin == usuarioAtual.emailProfessor && passwordLogin == usuarioAtual.passwordProfessor) {
            usuarioValidado = usuarioAtual.emailProfessor;
            senhaValidada = usuarioAtual.passwordProfessor;

            nomeProfessor = usuarioAtual.nomeProfessor;
            matriculaProfessor = usuarioAtual.matriculaProfessor;

            localStorage.removeItem('professorLogado', nomeProfessor);
            localStorage.removeItem('matriculaProfLogado', matriculaProfessor);

            localStorage.setItem('professorLogado', nomeProfessor);
            localStorage.setItem('matriculaProfLogado', matriculaProfessor);
            
            break
        }
    }


    if (emailLogin == usuarioValidado && passwordLogin == senhaValidada) {
        // alert('Autenticado!')
        window.location.href = 'painel-professor.html'
        emailloginprofessor.focus()


    } else {
        alert('Usuário ou senha incorretos!')
        emailloginprofessor.focus()

    }
}



btnCadastrarProfessor.addEventListener('click', cadastraProfessor);
btnEntrarprofessor.addEventListener('click', autenticaUsuarioProfessor);

