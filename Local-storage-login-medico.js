//entradas de cadastros
let inputNameMedico = document.getElementById("input-name-medico");
let inputCpfMedico = document.getElementById("input-cpf-medico");
let inputCrmMedico = document.getElementById("input-crm-medico");
let inputEmailMedico = document.getElementById("input-email-medico");
let inputPasswordMedico = document.getElementById("input-password-medico");

//entradas de login
let inputEmailLogin = document.getElementById("email-login-medico");
let inputSenhaLogin = document.getElementById("password-login-medico");



// BOTÕES ENTRAR
let btnCadastrarMedico = document.getElementById("cadastra-medico");
let btnEntrarMedico = document.getElementById("btn-entrar-medico");

// let btnBtnSecond = document.getElementById("btn-cadastra-aluno");

//lança o objeto cadastro para o array de objetos chamado cadastraMedico
function cadastraMedico() {

    let nomeMedico = inputNameMedico.value;
    let cpfMedico = inputCpfMedico.value;
    let crmMedico = inputCrmMedico.value;
    let emailMedico = inputEmailMedico.value;
    let passwordMedico = inputPasswordMedico.value;

    if (!nomeMedico || !cpfMedico || !crmMedico || !emailMedico) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    let cadastrosMedicos = JSON.parse(localStorage.getItem('usuariosMedico')) || [];
    cadastrosMedicos.push({ nomeMedico, cpfMedico, crmMedico, emailMedico, passwordMedico });
    localStorage.setItem('usuariosMedico', JSON.stringify(cadastrosMedicos));
}

//pega array de alunos do localstorage e o retornaf em formato objeto.
function pegaCadastroUsuarioMedico() {
    let arrayUsuariosMedico = JSON.parse(localStorage.getItem('usuariosMedico'));
    return arrayUsuariosMedico;
}


function autenticaUsuarioMedico() {
    //não deixa a tela recarregar depois do login
    event.preventDefault();


    let emailLogin = inputEmailLogin.value;
    let passwordLogin = inputSenhaLogin.value;
    let usuarioValidado, senhaValidada;
    let arrayUsuariosMedico = pegaCadastroUsuarioMedico();

    if (!emailLogin || !passwordLogin) {
        alert('Preencha as informações antes de continuar!');
        emailloginmedico.focus()

    }

    for (let i = 0; i < arrayUsuariosMedico.length; i++) {
        let usuarioAtual = arrayUsuariosMedico[i];

        if (emailLogin == usuarioAtual.emailMedico && passwordLogin == usuarioAtual.passwordMedico) {
            usuarioValidado = usuarioAtual.emailMedico;
            senhaValidada = usuarioAtual.passwordMedico;

            nomeMedico = usuarioAtual.nomeMedico;
            crmMedico = usuarioAtual.crmMedico;

            localStorage.removeItem('medicoLogado');
            localStorage.removeItem('crmMedicoLogado');

            localStorage.setItem('medicoLogado', nomeMedico);
            localStorage.setItem('crmMedicoLogado', crmMedico);
            
            break
        }
    }


    if (emailLogin == usuarioValidado && passwordLogin == senhaValidada) {
        // alert('Autenticado!')
        // emailloginmedico.focus()
        window.location.href = 'painel-medico.html'


    } else {
        alert('Usuário ou senha incorretos!')
        emailloginmedico.focus()

    }
}



btnCadastrarMedico.addEventListener('click', cadastraMedico);
btnEntrarMedico.addEventListener('click', autenticaUsuarioMedico);

