 /*var audio = {
        buffer: {},
        compatibility: {},
        files: [
            'sounds/drums.wav',
            'sounds/bass.wav',
            'sounds/arp.wav',
            'sounds/perc.wav',
            'sounds/synth.wav',
            'sounds/vox.wav'
        ],
        proceed: true,
        source_loop: {},
        source_once: {}
    };*/


window.AudioContext = window.AudioContext || window.webkitAudioContext;

var offset = 0;
var context = new AudioContext();

var tempo = 3.0;

function playTrack(url) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';

  var audiobuffer;

  // Decode asynchronously
  request.onload = function() {
    
    if (request.status == 200) {
      
      context.decodeAudioData(request.response, function(buffer) {
        var source = context.createBufferSource();
        source.buffer = buffer;
        source.connect(context.destination);
        source.loop = true;
        console.log('context.currentTime '+context.currentTime);

        if (offset == 0) {
          source.start();
          offset = context.currentTime;
        } else {
          var relativeTime = context.currentTime - offset;
          var beats = relativeTime / tempo;
          var remainder = beats - Math.floor(beats);
          var delay = tempo - (remainder*tempo);
          source.start(context.currentTime+delay,relativeTime+delay);
        }

      }, function(e) {
        console.log('Error decoding audio data:' + e);
      });
    } else {
      console.log('Audio didn\'t load successfully; error code:' + request.statusText);
    }
  }
  request.send();
}

var tracks = document.getElementsByClassName('track');

for (var i = 0, len = tracks.length; i < len; i++) {
  tracks[i].addEventListener('click', function(e){
    console.log(this.href);
    playTrack(this.href);
    e.preventDefault();
  });
}