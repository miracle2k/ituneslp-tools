(function(window) {


function getVideoPlayer() {
    if (!document.chromeTunesPlayer) {
         var p = document.createElement("video");
         p.id = 'chromeTunesPlayer';
         p.controls = true;
         document.chromeTunesPlayer = p;
         document.body.appendChild(p);
    }
    return document.chromeTunesPlayer;
}


function debug(msg) {
    console.log(msg);
}


////////////////////////////////////////////////////////////////////////////
// Code below is adapted from the iTunesEmulator code in TuneKit/Booklet.js


function ChromeTunesTrack(track) {
    // If the file is DRM (m4v), try to use the free version
    // instead (mp4).
    // TODO: Better solution is to actually first see if the
    // given file plays, and switch to alternative if it
    // doesn't.
    var extension = track.split('.').pop();
    if (extension == 'm4v') {
        ar = track.split('.');
        ar.pop();
        track = ar.join('.') + '.mp4';
    }
    this.track = track;
}

ChromeTunesTrack.prototype.play = function (params) {
  debug("ChromeTunesTrack.play: " + this.track + ', ' + params);

  video = getVideoPlayer();
  video.style.display = 'block';
  video.src = this.track;
  video.addEventListener('ended', function(e) {
      video.style.display = 'none';

      // send stop event
      event = document.createEvent("HTMLEvents");
      event.initEvent("videoclosed", false, false);
      window.dispatchEvent(event);
  }, false);

  // play video
  video.play();

  // send play event
  var event = document.createEvent("HTMLEvents");
  event.initEvent("play", false, false);
  window.dispatchEvent(event);
};


var ChromeTunes = {
    volume : 1,
    platform : 'Chrome iTunesLP extension',
    version : '0.1'
};

ChromeTunes.play = function (mediaLocation) {
    debug("ChromeTunes.play: " + mediaLocation);
    new ChromeTunesTrack(mediaLocation).play();
};

ChromeTunes.stop = function () {
    debug("ChromeTunes.stop");
};

ChromeTunes.findTracksByStoreID = function (storeID) {
    // TODO: Untested/Unimplemented.
    debug("ChromeTunes.findTracksByStoreID: " + storeID);
};

ChromeTunes.findTracksByXID = function (xID) {
    // TODO: Untested/Unimplemented.
    debug("ChromeTunes.findTracksByXID: " + xID);
    return [];
};

ChromeTunes.createTempPlaylist = function () {
    // TODO: Untested/Unimplemented.
    debug("ChromeTunes.createTempPlaylist");
    return {
      tracks: [],
      addTracks: function () {}
    };
};

// Provide the iTunes object to the current page
window.iTunes = ChromeTunes;

})(window);
