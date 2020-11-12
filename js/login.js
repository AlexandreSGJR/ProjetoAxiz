var signin_nome;
var signin_email;
var signin_senha;

function login() {
    event.preventDefault();
    let email = id_login_email.value == signin_email;
    let senha = id_login_senha.value == signin_senha;

    if(email && senha) {
        id_login_email.value = '';
        id_login_senha.value = '';
        sessionStorage.setItem('acesso', 1);
        window.location.href = 'index.html';
    }else {
        id_login_email.value = '';
        id_login_senha.value = '';
        alert('Login inválido');
    }
}
