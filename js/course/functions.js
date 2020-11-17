function changeTheme() {
    let theme = document.getElementById('id_tema').value;
    let menu_3d = document.getElementById('3d_menu');
    let menu_2d = document.getElementById('2d_menu');

    theme == 1 ? menu_3d.style.display = 'flex' : menu_3d.style.display = 'none';
    theme == 2 ? menu_2d.style.display = 'flex' : menu_2d.style.display = 'none';
}

