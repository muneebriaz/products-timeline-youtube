var products = []
var videoId = ''
var srcType = ''
var playerWrapper = {};
var productsAvailable = false;

playerWrapper.onPlayerReady = function () {
    startPlayingVideo();
};

playerWrapper.onPlayerPlay = function () {
    startInterval();
    //uncomment the invocation below if you want to show products listing (if products available) on PLAY
    //showAllProducts();
};

playerWrapper.onPlayerPause = function () {
    //uncomment the invocation below if you want to hide products listing on PAUSE
    //hideAllProducts();
};

playerWrapper.playerInstance = {};

jQuery.getJSON('./stream-data.json').done((data) => {
    products = data.products
    videoId = data.videoId

    // update src attribute of iframe with current video 
    jQuery('#player-iframe').attr('src', data.link + '?enablejsapi=1')

    // load script of respective source e.g youtube.js
    jQuery.getScript("./" + data.source + ".js", (data) => {
        onPlayerWrapperReady(playerWrapper);
    });
})

//start player 
function startPlayingVideo() {
    wrapper.playerInstance.play();
}

//starts the interval
function startInterval() {
    getCurrentTime();
    var time_update_interval
    clearInterval(time_update_interval);
    time_update_interval = setInterval(() => {
        getCurrentTime();
    }, 1000)
}

// This function is called by startPlayer() Updates current time text display.
function getCurrentTime() {
    formatTime(wrapper.playerInstance.getPlayerCurrentTime());
    formatTime(wrapper.playerInstance.getPlayerDuration());
}

//formats time in minutes/seconds to apply checks 
function formatTime(time) {
    time = Math.round(time);
    var minutes = Math.floor(time / 60),
        seconds = time - minutes * 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    productDisplay(minutes, seconds);
}

function hideAllProducts(){
    document.getElementById('products-wrapper').style.display = 'none'
}

function showAllProducts(){
    productsAvailable ? document.getElementById('products-wrapper').style.display = 'block' : document.getElementById('products-wrapper').style.display = 'none';
}