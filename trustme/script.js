let video;

function setup() {
    video = document.getElementById('video');
    video.playbackRate = 4.0;

    document.getElementById('play').addEventListener('click', function () {
        hidePage();
        video.play();
        document.title = 'HAHA GET DREAMROLLED!';
    });

    video.addEventListener('ended', function () {
        video.currentTime = 0;
        showPage('main');
    });
}

appendLoadEvent(setup);