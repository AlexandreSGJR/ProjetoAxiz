function changeVideo(iframe, url) {
    var video = document.getElementById(iframe);
    video.src = `https://www.youtube.com/embed/${url}/?&autoplay=1`;
}