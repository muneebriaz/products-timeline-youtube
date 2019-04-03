
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var wrapper;
var player;

function onPlayerWrapperReady(playerWrapper) {
    wrapper = playerWrapper;
}


function onYouTubePlayerAPIReady() {

    player = new YT.Player('player-iframe', {
        events: {
            'onReady': wrapper.onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });


    wrapper.playerInstance.play = function () {
        player.playVideo();
    }

    wrapper.playerInstance.getPlayerCurrentTime = function () {
        return player.getCurrentTime();
    }

    wrapper.playerInstance.getPlayerDuration = function () {
        return player.getDuration();
    }
}


function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        wrapper.onPlayerPlay();
    }

    if (event.data == YT.PlayerState.PAUSED) {
        wrapper.onPlayerPause();
    }
}
