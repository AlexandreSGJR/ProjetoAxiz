document.getElementById('bt_zbrush').onclick = function () {
    changeCourse(videos.zbrush);
    desativarBts();
    document.getElementById('bt_zbrush').classList.add('bt_ativado');
};

document.getElementById('bt_maya').onclick = function () {
    changeCourse(videos.maya);
    desativarBts();
    document.getElementById('bt_maya').classList.add('bt_ativado');
};

document.getElementById('bt_texture').onclick = function () {
    changeCourse(videos.texture);
    desativarBts();
    document.getElementById('bt_texture').classList.add('bt_ativado');
};

document.getElementById('bt_mtr').onclick = function () {
    changeCourse(videos.modelagem_textura_render);
    desativarBts();
    document.getElementById('bt_mtr').classList.add('bt_ativado');
};

document.getElementById('bt_desenho').onclick = function () {
    changeCourse(videos.desenho);
    desativarBts();
    document.getElementById('bt_desenho').classList.add('bt_ativado');
};

document.getElementById('bt_personagem').onclick = function () {
    changeCourse(videos.personagem);
    desativarBts();
    document.getElementById('bt_personagem').classList.add('bt_ativado');
};

document.getElementById('bt_cenario').onclick = function () {
    changeCourse(videos.cenario);
    desativarBts();
    document.getElementById('bt_pintura').classList.remove('bt_ativado');
};

document.getElementById('bt_pintura').onclick = function () {
    changeCourse(videos.pintura);
    desativarBts();
    document.getElementById('bt_pintura').classList.add('bt_ativado');
};

function changeTheme() {
    let theme = document.getElementById('id_tema').value;
    let menu_3d = document.getElementById('3d_menu');
    let menu_2d = document.getElementById('2d_menu');

    theme == 1 ? menu_3d.style.display = 'flex' : menu_3d.style.display = 'none';
    theme == 2 ? menu_2d.style.display = 'flex' : menu_2d.style.display = 'none';

    desativarBts();

    document.getElementById('id_iframe').src = `https://www.youtube.com/embed/none/`;
    document.getElementById('id_sec_course').style.display = 'none';
}

function desativarBts () {
    bts = ['bt_zbrush', 'bt_maya', 'bt_texture', 'bt_mtr','bt_desenho', 'bt_personagem','bt_cenario','bt_pintura']
    
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

        darFuncao(ids[j],array_video[i].url);

        // document.getElementById(`${array_video[0].name}${i}`).onclick = function () {
            
        //     document.getElementById('id_iframe').src = `https://www.youtube.com/embed/${array_video[i].url}/?&autoplay=1`;
        //     console.log(i);
        //     console.log(`${array_video[0].name}${i}`);
        //     console.log(`${array_video[i].url}`);
        //     console.log(document.getElementById(`${array_video[0].name}${i}`));
    
        // }
    }

    function darFuncao(id,video) {
        document.getElementById(id).onclick = function () {
            document.getElementById('id_iframe').src = `https://www.youtube.com/embed/${video}/?&autoplay=1`;
        }
    }

}

// dados que deveriam ser utilizados do arquivo separado 

var videos = {
    zbrush: [
        {   
            name: 'zbrush',
            title_curso: 'Curso RÁPIDO de Zbrush | Workbox',
            creditos_curso: 'Escola revolution'
        },
        {
            title: 'Curso Básico de Zbrush - Conhecendo a Interface | Workbox',
            url: 'xpCM3Y7vuX4',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY8nItX2B2FXWkJoGGxFSBle'
        },
        {
            title: 'Curso Básico de Zbrush - Atalhos e Navegação | Workbox',
            url: 'szMLvipxdoU',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY8nItX2B2FXWkJoGGxFSBle'
        },
        {
            title: 'Curso de Zbrush - Iniciando a blocagem do seu modelo | Workbox',
            url: 'IajGck07KaE',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY8nItX2B2FXWkJoGGxFSBle'
        },
        {
            title: 'Curso Básico de Zbrush - Detalhando o Modelo | Workbox',
            url: 'i0pW9bFzJek',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY8nItX2B2FXWkJoGGxFSBle'
        },
        {
            title: 'Curso Básico de Zbrush - Timelapse - Finalizando os Detalhes | Workbox',
            url: 'JsgVziMNz2Q',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY8nItX2B2FXWkJoGGxFSBle'
        },
        {
            title: 'Curso Básico de Zbrush - Pintando o seu Modelo - Polypaint | Workbox',
            url: 'ZPRMWmpU-qk',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY8nItX2B2FXWkJoGGxFSBle'
        },
        {
            title: 'Curso Básico de Zbrush - Iluminação, Render e Pós-produção | Workbox',
            url: 'hbFR3QeLSdk',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY8nItX2B2FXWkJoGGxFSBle'
        }
        // fim basico
    ],

    maya: [
        {
            name: 'maya',
            title_curso: 'Tutoriais Maya | Workbox 3D',
            creditos_curso: 'Escola revolution'
        },
        {
            title: 'Curso de Introdução ao Maya • Aula 1/6 | WorkBox',
            url: '-8atQtUGoFU',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY_lheNMD1ADa5_tFZHyH3b6'
        },
        {
            title: 'Curso de Introdução ao Maya • Aula 2/6 | WorkBox',
            url: '6Uw_xKwGTZ0',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY_lheNMD1ADa5_tFZHyH3b6'
        },
        {
            title: 'Curso de Introdução ao Maya • Aula 3/6 | WorkBox',
            url: 'kkQSfBTJxuA',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY_lheNMD1ADa5_tFZHyH3b6'
        },
        {
            title: 'Curso de Introdução ao Maya • Aula 4/6 | WorkBox',
            url: 'pexQ-CZjbHA',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY_lheNMD1ADa5_tFZHyH3b6'
        },
        {
            title: 'Curso de Introdução ao Maya • Aula 5/6 | WorkBox',
            url: 'FYD1x9_fHJ8',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY_lheNMD1ADa5_tFZHyH3b6'
        },
        {
            title: 'Curso de Introdução ao Maya • Aula 6/6 | WorkBox',
            url: '1Ja-QGqDOcM',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY_lheNMD1ADa5_tFZHyH3b6'
        },
        // fim basico
        {
            title: 'Curso de Modelagem de Prop • Aula 1/7 | WorkBox',
            url: 'efcxVBUgh1o',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY_lheNMD1ADa5_tFZHyH3b6'
        },
        {
            title: 'Curso de Modelagem de Prop • Aula 2/7 | WorkBox',
            url: '1fABCh5O3Ng',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY_lheNMD1ADa5_tFZHyH3b6'
        },
        {
            title: 'Curso de Modelagem de Prop • Aula 3/7 | WorkBox',
            url: 'FLI1r2UaE4s',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY_lheNMD1ADa5_tFZHyH3b6'
        },
        {
            title: 'Curso de Modelagem de Prop • Aula 4/7 | WorkBox',
            url: 'OSKViB58cXA',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY_lheNMD1ADa5_tFZHyH3b6'
        },
        {
            title: 'Curso de Modelagem de Prop • Aula 5/7 | WorkBox',
            url: 'H7UvD3Whk1k',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY_lheNMD1ADa5_tFZHyH3b6'
        },
        {
            title: 'Curso de Modelagem de Prop • Aula 6/7 | WorkBox',
            url: '7rwe7BYmlDQ',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY_lheNMD1ADa5_tFZHyH3b6'
        },
        {
            title: 'Curso de Modelagem de Prop • Aula 7/7 | WorkBox',
            url: 'rNzQSCcfJAo',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY_lheNMD1ADa5_tFZHyH3b6'
        },
        // fim props
        {
            title: 'Curso de Modelagem 3D • Sustentação e Redirecionamento de Malha | WorkBox',
            url: 'vw9-cJpIQqg',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY_lheNMD1ADa5_tFZHyH3b6'
        },
        {
            title: 'COMO SALVAR UM OBJ NO MAYA? | WorkBox',
            url: 'VIbaudF3kIQ',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY_lheNMD1ADa5_tFZHyH3b6'
        },
        {
            title: 'MODELE MAIS RÁPIDO NO MAYA COM MANIPULADORES CORRETOS, com Gustavo Ribeiro | WorkBox',
            url: 'kAX3PtsciCo',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY_lheNMD1ADa5_tFZHyH3b6'
        },
        {
            title: 'DUPLICATE WITH TRANSFORM NO MAYA, com Gustavo Ribeiro | WorkBox',
            url: 'Jiej-ao5U0E',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY_lheNMD1ADa5_tFZHyH3b6'
        },
        {
            title: 'COMO ALTERAR PIVOTS DE ORIENTAÇÃO NO MAYA, com Gustavo Ribeiro | WorkBox',
            url: 'cgV_Kb74HqU',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY_lheNMD1ADa5_tFZHyH3b6'
        },
        {
            title: 'INSERT EDGE LOOP E MULTICUT NO MAYA, com Gustavo Ribeiro | WorkBox',
            url: '7XK7HS0usWQ',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY_lheNMD1ADa5_tFZHyH3b6'
        },
        // extras
    ],

    texture: [
        {
            name: 'texture',
            title_curso: 'Retopologia e Textura | Workbox 3D',
            creditos_curso: 'Escola revolution'
        },
        {
            title: 'O que é Retopologia? | Workbox',
            url: 'CPlZ7fMdBmc',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY_PWDPgyZg03_JlH3zuJus_'
        },
        {
            title: 'Como fazer Retopologia | Workbox',
            url: 'rdGtyWUPbq4',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY_PWDPgyZg03_JlH3zuJus_'
        },
        // fim retopo
        {
            title: 'Curso básico de textura 3D - Softwares de Textura | Workbox',
            url: '1_Zmjgt7kyw',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY8SevABTEIq97XBGDxEbgdp'
        },
        {
            title: 'Curso básico de textura 3D - Abrindo UVs | Workbox',
            url: 'Goglc4Z_7E0',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY8SevABTEIq97XBGDxEbgdp'
        },
        {
            title: 'Curso básico de textura 3D - Pintando e Aplicando Texturas | Workbox',
            url: 'nRzJGKh4RiQ',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY8SevABTEIq97XBGDxEbgdp'
        },
    ],

    modelagem_textura_render: [
        {
            name: 'mtr',
            title_curso: 'Modelagem, Textura e Render | Workbox 3D',
            creditos_curso: 'Escola revolution'
        },
        {
            title: 'Modelagem, Textura e Render • Parte 1 | Workbox',
            url: 'IJwefOCnowc',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY_5ZejrQzcCCcQxcBgh_LIF'
        },
        {
            title: 'Modelagem, Textura e Render • Parte 2 | Workbox',
            url: 'niyrvQ6m6Qw',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY_5ZejrQzcCCcQxcBgh_LIF'
        },
    ],

    desenho: [
        {
            name: 'desenho',
            title_curso: 'Desenho Básico | Workbox 2D',
            creditos_curso: 'Escola revolution'
        },
        {
            title: 'Curso de Desenho Básico - Perspectiva | Workbox',
            url: 'e2pvVRL-Ehw',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY-8_56lKzfoTgrO7PzFV1Bs'
        },
        {
            title: 'Curso de Desenho Básico - Utilizando as Formas Básicas | Workbox',
            url: '5Lo9n3Us8U0',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY-8_56lKzfoTgrO7PzFV1Bs'
        },
        {
            title: 'Curso de Desenho Básico - Entendendo Luz e Sombra | Workbox',
            url: 'iadFcSz5y8w',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY-8_56lKzfoTgrO7PzFV1Bs'
        },
        {
            title: 'Curso de Desenho Básico - Tema e Layout | Workbox',
            url: 'YN7eyUJ-ADU',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY-8_56lKzfoTgrO7PzFV1Bs'
        },
    ],

    personagem: [
        {
            name: 'personagem',
            title_curso: 'Como Criar Personagens | Workbox',
            creditos_curso: 'Escola revolution'
        },
        {
            title: 'Como Criar Personagens - Usando Formas Básicas | Workbox',
            url: 'lylQpxkIywQ',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY-dx5sI2uA34VbYpCMFtok0'
        },
        {
            title: 'Como Criar Personagens - Thumbnails e Lineart | Workbox',
            url: '5q779fqPJZo',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY-dx5sI2uA34VbYpCMFtok0'
        },
        {
            title: 'Como Criar Personagens - Usando Formas Básicas | Workbox',
            url: '12Jjl6v93JA',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY-dx5sI2uA34VbYpCMFtok0'
        },
    ],

    cenario: [
        {
            name: 'cenario',
            title_curso: 'Curso Criando Cenários | Workbox',
            creditos_curso: 'Escola revolution'
        },
        {
            title: 'Criando Cenários - Thumbnails | Workbox',
            url: 'DkAyS2p9MlY',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY9ZeT5K66h4Xmt8Qa8E3Z5i'
        },
        {
            title: 'Criando Cenários - Composição | Workbox',
            url: 'zbmI_dtEJn0',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY9ZeT5K66h4Xmt8Qa8E3Z5i'
        },
        {
            title: 'Criando Cenários - Perspectiva | Workbox',
            url: '17XHC91WHu8',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY9ZeT5K66h4Xmt8Qa8E3Z5i'
        },
        {
            title: 'Criando Cenários - Luz e Sombra | Workbox',
            url: 'uRqgC0mRXew',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY9ZeT5K66h4Xmt8Qa8E3Z5i'
        },
        {
            title: 'Criando Cenários - Cor e Storytelling | Workbox',
            url: 'aJGxt_OdL7c',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY9ZeT5K66h4Xmt8Qa8E3Z5i'
        },
    ],

    pintura: [
        {
            name: 'pintura',
            title_curso: 'Cursos de Pintura Digital Completo | Workbox',
            creditos_curso: 'Escola revolution'
        },
        {
            title: 'Curso de Pintura Digital - Interface e Blocagem da Pintura | Workbox',
            url: 'RQEuy6Qb0MQ',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY8h4b6PH2vSNua_X8rKwZ0K'
        },
        {
            title: 'Curso de Pintura Digital - Pintando os Volumes | Workbox',
            url: 'D7SH4DmZ0PI',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY8h4b6PH2vSNua_X8rKwZ0K'
        },
        {
            title: 'Curso de Pintura Digital - Colorizando o Retrato | Workbox',
            url: 'tWKnKq2Gz9s',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY8h4b6PH2vSNua_X8rKwZ0K'
        },
        {
            title: 'Curso de Pintura Digital - Detalhes e Finalização | Workbox',
            url: 'gD_kxSYnuhU',
            creditos: 'https://www.youtube.com/playlist?list=PLJASh3gCRKY8h4b6PH2vSNua_X8rKwZ0K'
        },
    ]
};