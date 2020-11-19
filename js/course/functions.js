let cursos = [videos.zbrush, videos.maya, videos.texture,videos.modelagem_textura_render, videos.desenho, videos.personagem, videos.cenario, videos.pintura];
let bts = ['bt_zbrush', 'bt_maya', 'bt_texture', 'bt_mtr','bt_desenho', 'bt_personagem','bt_cenario','bt_pintura']

for(let i = 0; i<cursos.length; i++){
    document.getElementById(`${bts[i]}`).onclick = function () {
        changeCourse(cursos[i]);
        desativarBts();
        document.getElementById(`${bts[i]}`).classList.add('bt_ativado');    
    }
}

// document.getElementById('bt_zbrush').onclick = function () {
//     changeCourse(videos.zbrush);
//     desativarBts();
//     document.getElementById('bt_zbrush').classList.add('bt_ativado');
// };

// document.getElementById('bt_maya').onclick = function () {
//     changeCourse(videos.maya);
//     desativarBts();
//     document.getElementById('bt_maya').classList.add('bt_ativado');
// };

// document.getElementById('bt_texture').onclick = function () {
//     changeCourse(videos.texture);
//     desativarBts();
//     document.getElementById('bt_texture').classList.add('bt_ativado');
// };

// document.getElementById('bt_mtr').onclick = function () {
//     changeCourse(videos.modelagem_textura_render);
//     desativarBts();
//     document.getElementById('bt_mtr').classList.add('bt_ativado');
// };

// document.getElementById('bt_desenho').onclick = function () {
//     changeCourse(videos.desenho);
//     desativarBts();
//     document.getElementById('bt_desenho').classList.add('bt_ativado');
// };

// document.getElementById('bt_personagem').onclick = function () {
//     changeCourse(videos.personagem);
//     desativarBts();
//     document.getElementById('bt_personagem').classList.add('bt_ativado');
// };

// document.getElementById('bt_cenario').onclick = function () {
//     changeCourse(videos.cenario);
//     desativarBts();
//     document.getElementById('bt_pintura').classList.remove('bt_ativado');
// };

// document.getElementById('bt_pintura').onclick = function () {
//     changeCourse(videos.pintura);
//     desativarBts();
//     document.getElementById('bt_pintura').classList.add('bt_ativado');
// };

function changeTheme() {
    let theme = document.getElementById('id_tema').value;
    let menu_3d = document.getElementById('3d_menu');
    let menu_2d = document.getElementById('2d_menu');

    theme == 1 ? menu_3d.style.display = 'flex' : menu_3d.style.display = 'none';
    theme == 2 ? menu_2d.style.display = 'flex' : menu_2d.style.display = 'none';

    desativarBts();

    document.getElementById('id_iframe').src = `https://www.youtube.com/embed/`;
    document.getElementById('id_sec_course').style.display = 'none';
}

function desativarBts () {
    
    var i = 0;

    while(i < bts.length) {
        document.getElementById(`${bts[i]}`).classList.remove('bt_ativado');
        i++;
    }
}

function changeCourse(array_video) {
    document.getElementById('id_sec_course').style.display = 'flex';
    document.getElementById('title_creditos').innerHTML = `<h2>${array_video[0].title_curso}</h2> <p>${array_video[0].creditos_curso}</p>`

    document.getElementById('id_videos').innerHTML = '';
    document.getElementById('id_videos').innerHTML =
        `
    <iframe id="id_iframe" src="https://www.youtube.com/embed/xpCM3Y7vuX4" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
    `;

    document.getElementById('id_iframe').src = `https://www.youtube.com/embed/${array_video[1].url}/`;

    ids = []

    for (var i = 1; i < array_video.length; i++) {
        ids.push(`${array_video[0].name}${i}`);
        document.getElementById('id_videos').innerHTML +=
            `<div class="video" id="${array_video[0].name}${i}">
            <img src="https://img.youtube.com/vi/${array_video[i].url}/mqdefault.jpg">
            <div class="details-video">
                <h2>${array_video[i].title}</h2>
                <a href="${array_video[i].creditos}" target="blank">Créditos:
                <u>${array_video[i].creditos}</u></a>
            </div>
        </div>
        `;
    }

    for (var i = 1, j = 0; i <= ids.length; i++, j++) {
        // console.log(i);
        // console.log(`${array_video[0].name}${i}`);
        // console.log(`${array_video[i].url}`);
        // console.log(document.getElementById(`${array_video[0].name}${i}`));

        darFuncaoClick(ids[j],array_video[i].url);

        // document.getElementById(`${array_video[0].name}${i}`).onclick = function () {
            
        //     document.getElementById('id_iframe').src = `https://www.youtube.com/embed/${array_video[i].url}/?&autoplay=1`;
        //     console.log(i);
        //     console.log(`${array_video[0].name}${i}`);
        //     console.log(`${array_video[i].url}`);
        //     console.log(document.getElementById(`${array_video[0].name}${i}`));
    
        // }
    }

    function limparSelecao(id) {
        for(var i = 0; i < id.length; i++) {
            document.getElementById(`${id[i]}`).style.backgroundColor = '#202024';
        }
    }

    function darFuncaoClick(id,video) {
        document.getElementById(id).onclick = function () {
            document.getElementById('id_iframe').src = `https://www.youtube.com/embed/${video}/?&autoplay=1`;
            limparSelecao(ids);
            document.getElementById(`${id}`).style.backgroundColor = '#2d2d33';
            window.location.href = '#id_iframe';
        }
    }

}