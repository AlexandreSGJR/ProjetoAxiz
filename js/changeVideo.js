ids = ['video1','video2','video3','video4','video5','video6'];

function changeVideo(iframe, url,id) {
    var video = document.getElementById(iframe);
    video.src = `https://www.youtube.com/embed/${url}/?&autoplay=1`;
    
    limparSelecao();
    document.getElementById(`${id}`).style.backgroundColor = '#2d2d33';
    window.location.href = '#id_iframe';
}

function limparSelecao() {
    for(var i = 0; i < ids.length; i++) {
        document.getElementById(`${ids[i]}`).style.backgroundColor = '#202024';
    }
}