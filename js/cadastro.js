function signin() {
    event.preventDefault();

    if (id_signin_nome.value == '' || id_signin_email.value == '' || id_signin_senha.value == '') {
        alert('Cadastro inválido');
        id_signin_nome.value = '';
        id_signin_email.value = '';
        id_signin_senha.value = '';
    } else {

        signin_nome = id_signin_nome.value;
        signin_email = id_signin_email.value;
        signin_senha = id_signin_senha.value;

        id_signin_nome.value = '';
        id_signin_email.value = '';
        id_signin_senha.value = '';

        irlog();
    }
}

document.getElementById('cadastro').onclick = ircad;

function ircad() {
    sec_login.style.display = 'none';
    sec_signin.style.display = 'block';
}

document.getElementById('voltar').onclick = irlog;

function irlog() {
    id_signin_nome.value = '';
    id_signin_email.value = '';
    id_signin_senha.value = '';

    sec_login.style.display = 'block';
    sec_signin.style.display = 'none';
}