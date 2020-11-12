window.onload = session();

function session() {
    var acesso = sessionStorage.getItem('acesso');
    if (acesso != 1) {
        window.location.href = 'login.html';
    }
}