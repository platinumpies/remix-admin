!function(){"use strict";angular.module("remixAdmin",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ngRoute","toastr","angular-circular-progress","angular-svg-round-progress","angular-loading-bar","chieffancypants.loadingBar"])}(),function(){"use strict";function e(){function e(){return n}var n=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=e}angular.module("remixAdmin").service("webDevTec",e)}(),function(){"use strict";function e(){function e(e){var n=this;n.relativeDate=e(n.creationDate).fromNow()}var n={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return e.$inject=["moment"],n}angular.module("remixAdmin").directive("acmeNavbar",e)}(),function(){"use strict";function e(e){function n(n,t,o,s){var a,i=e(t[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});t.addClass("acme-malarkey"),angular.forEach(n.extraValues,function(e){i.type(e).pause()["delete"]()}),a=n.$watch("vm.contributors",function(){angular.forEach(s.contributors,function(e){i.type(e.login).pause()["delete"]()})}),n.$on("$destroy",function(){a()})}function t(e,n){function t(){return o().then(function(){e.info("Activated Contributors View")})}function o(){return n.getContributors(10).then(function(e){return s.contributors=e,s.contributors})}var s=this;s.contributors=[],t()}var o={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:n,controller:t,controllerAs:"vm"};return t.$inject=["$log","githubContributor"],o}angular.module("remixAdmin").directive("acmeMalarkey",e),e.$inject=["malarkey"]}(),function(){"use strict";function e(e,n){function t(t){function s(e){return e.data}function a(n){e.error("XHR Failed for getContributors.\n"+angular.toJson(n.data,!0))}return t||(t=30),n.get(o+"/contributors?per_page="+t).then(s)["catch"](a)}var o="https://api.github.com/repos/Swiip/generator-gulp-angular",s={apiHost:o,getContributors:t};return s}angular.module("remixAdmin").factory("githubContributor",e),e.$inject=["$log","$http"]}(),angular.module("remixAdmin").factory("preloader",["$q","$rootScope",function(e,n){function t(n){this.imageLocations=n,this.imageCount=this.imageLocations.length,this.loadCount=0,this.errorCount=0,this.states={PENDING:1,LOADING:2,RESOLVED:3,REJECTED:4},this.state=this.states.PENDING,this.deferred=e.defer(),this.promise=this.deferred.promise}return t.preloadImages=function(e){var n=new t(e);return n.load()},t.prototype={constructor:t,isInitiated:function(){return this.state!==this.states.PENDING},isRejected:function(){return this.state===this.states.REJECTED},isResolved:function(){return this.state===this.states.RESOLVED},load:function(){if(this.isInitiated())return this.promise;this.state=this.states.LOADING;for(var e=0;e<this.imageCount;e++)this.loadImageLocation(this.imageLocations[e]);return this.promise},handleImageError:function(e){this.errorCount++,this.isRejected()||(this.state=this.states.REJECTED,this.deferred.reject(e))},handleImageLoad:function(e){this.loadCount++,this.isRejected()||(this.deferred.notify({percent:Math.ceil(this.loadCount/this.imageCount*100),imageLocation:e}),this.loadCount===this.imageCount&&(this.state=this.states.RESOLVED,this.deferred.resolve(this.imageLocations)))},loadImageLocation:function(e){var t=this,o=$(new Image).load(function(e){n.$apply(function(){t.handleImageLoad(e.target.src),t=o=e=null})}).error(function(e){n.$apply(function(){t.handleImageError(e.target.src),t=o=e=null})}).prop("src",e)}},t}]),function(){"use strict";function e(e,n,t,o,s,a,i,r){function c(){u(),e(function(){l.classAnimation="rubberBand"},4e3)}function d(){t.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),l.classAnimation=""}function u(){l.awesomeThings=n.getTec(),angular.forEach(l.awesomeThings,function(e){e.rank=Math.random()})}var l=this;l.toggle=!0,l.awesomeThings=[],l.classAnimation="",l.creationDate=1447798239285,l.showToastr=d,l.imageLocations=["/assets/images/effects-background-faded.png","/assets/images/vocal-background-faded.png","/assets/images/eq-background-faded.png","/assets/images/bass-background-faded.png","/assets/images/random-background-faded.png","/assets/images/melody-background-faded.png","/assets/images/random-icon.png","/assets/images/bass-icon.png","/assets/images/vocal-icon.png","/assets/images/eq-icon.png","/assets/images/effects-icon.png","/assets/images/melody-icon.png","/assets/images/user.png","/assets/images/smirnoff-logo.png"],o.preloadImages(l.imageLocations),c()}angular.module("remixAdmin").controller("MainController",e),e.$inject=["$timeout","webDevTec","toastr","preloader","cfpLoadingBar","$q","$log","$rootScope"]}(),function(){"use strict";function e(e){e.debug("runBlock end")}angular.module("remixAdmin").run(e),e.$inject=["$log"]}(),function(){"use strict";function e(e){e.when("/",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).otherwise({redirectTo:"/"})}angular.module("remixAdmin").config(e),e.$inject=["$routeProvider"]}(),function(){"use strict";angular.module("remixAdmin").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function e(e,n){e.debugEnabled(!0),n.allowHtml=!0,n.timeOut=3e3,n.positionClass="toast-top-right",n.preventDuplicates=!0,n.progressBar=!0}angular.module("remixAdmin").config(e),e.$inject=["$logProvider","toastrConfig"]}(),angular.module("remixAdmin").run(["$templateCache",function(e){e.put("app/main/finalScreen.html",'<div class="container grey-fill stop-scale"></div>'),e.put("app/main/main.html",'<html ng-app"remixadmin"=""><div class="container grey-fill stop-scale"><div><acme-navbar creation-date="main.creationDate"></acme-navbar></div><div class="fixer-margin"><div class="main-wrap"><div class="wrap"><div class="nba-circular-crop"><div class="videoWrapper"><video id="Video5" loop="" muted="" preload="auto"><source src="/assets/videos/remix-vid-5_converted.mp4" type="video/mp4"></video><video id="Video4" loop="" muted="" preload="auto"><source src="/assets/videos/remix-vid-4_converted.mp4" type="video/mp4"></video><video id="Video3" loop="" muted="" preload="auto"><source src="/assets/videos/remix-vid-3_converted.mp4" type="video/mp4"></video><video id="Video2" loop="" muted="" preload="auto"><source src="/assets/videos/remix-vid-2_converted.mp4" type="video/mp4"></video><video id="Video1" loop="" muted="" preload="auto"><source src="/assets/videos/remix-vid-1_converted.mp4" type="video/mp4"></video><div round-progress="" max="50" current="50" color="#ff3e3e" bgcolor="#ffffff" radius="400" stroke="25" semi="false" rounded="false" clockwise="true" responsive="true" duration="60000" animation="linearEase"></div></div></div><div class="buttons-buttom" ng-click"toggle=\'!toggle"\'><a class="deg0 track" href="/assets/sounds/arp.wav" preload="auto"><div class="round-button" onclick="vidplay()"><div class="round-button-random"><span class="random-icon btn-hover"><span class="btn-text-pos">Random</span></span></div></div></a> <a class="deg45 track" href="/assets/sounds/vox.wav" preload="auto"><div class="round-button" onclick="vidplay()"><div class="round-button-vocal"><span class="vocal-icon btn-hover"><span class="btn-text-pos">Vocal</span></span></div></div></a> <a class="deg135 track" href="/assets/sounds/bass.wav" preload="auto"><div class="round-button" onclick="vidplay()"><div class="round-button-bass"><span class="bass-icon btn-hover"><span class="btn-text-pos">Bass</span></span></div></div></a> <a class="deg180 track" href="/assets/sounds/drums.wav" preload="auto"><div class="round-button" onclick="vidplay()"><div class="round-button-effects"><span class="effects-icon btn-hover"><span class="btn-text-pos">Beat</span></span></div></div></a> <a class="deg225 track" href="/assets/sounds/synth.wav" preload="auto"><div class="round-button" onclick="vidplay()"><div class="round-button-melody"><span class="melody-icon btn-hover"><span class="btn-text-pos">Melody</span></span></div></div></a> <a class="deg315 track" href="/assets/sounds/perc.wav" preload="auto"><div class="round-button" onclick="vidplay()"><div class="round-button-eq"><span class="eq-icon btn-hover"><span class="btn-text-pos">Perc</span></span></div></div></a></div></div></div><div class="user-position"><div class="user"><div class="left-side-wrap"><p class="dj">DJ</p><span class="name">@TomLA232</span></div></div></div><div class="branding-position"><div class="branding"><div class="right-side-wrap"><span class="nike-text"></span><span class="nba-text">Smirnoff</span><span class="remix-text">Remix</span></div></div></div></div></div><script>\n  /*--------------------FIND BETTER APPROACH--------------------*/\n$(\'.round-button-melody, .round-button-effects, .round-button-random, .round-button-eq, .round-button-bass, .round-button-vocal\').on(\'click\', function(e){\n  e.preventDefault();\n  $(this).css(\'border-color\', \'#ff3e3e\');\n});\n\n/*\n$(\'.round-button-effects\').on(\'click\', function(e){\n      e.preventDefault();\n      $(this).toggleClass(\'myClickState\');\n    }); */\n\n  </script><script>\n\n/*------------------------------------------------MOVE INTO SEPERATE FILE---------------------------------------------------*/\n\n/*var audio = {\n        buffer: {},\n        compatibility: {},\n        files: [\n            \'sounds/drums.wav\',\n            \'sounds/bass.wav\',\n            \'sounds/arp.wav\',\n            \'sounds/perc.wav\',\n            \'sounds/synth.wav\',\n            \'sounds/vox.wav\'\n        ],\n        proceed: true,\n        source_loop: {},\n        source_once: {}\n    };*/\n\n\nwindow.AudioContext = window.AudioContext || window.webkitAudioContext;\n\nvar offset = 0;\nvar context = new AudioContext();\nvar source;  \nvar tempo = 2.0;\nvar tracksPlayed = [];\n\nfunction findAndStopSourceIfPlaying (url) {\n  if(tracksPlayed.length === 0) {return;}\n\n  var index;\n  var playingTrack = tracksPlayed.filter(function(track, i) {\n    if(track.responseURL === url) {\n      index = i;\n      return track;\n    }\n  });\n\n  if (playingTrack.length === 1) {\n    playingTrack[0].source.stop();\n    tracksPlayed.splice(index,1);\n    return true;\n  }\n\n  return false;\n}\n\nfunction playTrack(url) {\n  var request = new XMLHttpRequest();\n  request.open(\'GET\', url, true);\n  request.responseType = \'arraybuffer\';\n\n  var audiobuffer;\n\n  // Decode asynchronously\n  request.onload = function() {\n    \n    if (request.status == 200) {\n      \n      context.decodeAudioData(request.response, function(buffer) {\n        // if the track is playing stop it and exit from function\n        if(findAndStopSourceIfPlaying(request.responseURL)) {return;}\n\n        source = context.createBufferSource();\n        tracksPlayed.push({\n          source: source,\n          responseURL: request.responseURL\n        });\n        source.buffer = buffer;\n        source.connect(context.destination);\n        source.loop = true;\n\n        if (offset == 0) {\n          source.start();\n          offset = context.currentTime;\n        } else {\n          var relativeTime = context.currentTime - offset;\n          var beats = relativeTime / tempo;\n          var remainder = beats - Math.floor(beats);\n          var delay = tempo - (remainder*tempo);\n          source.start(context.currentTime+delay,relativeTime+delay);\n        }\n\n\n      }, function(e) {\n        console.log(\'Error decoding audio data:\' + e);\n      });\n    } else {\n      console.log(\'Audio didn\\\'t load successfully; error code:\' + request.statusText);\n    }\n  }\n  request.send();\n}\n\nvar tracks = document.getElementsByClassName(\'track\');\n\nfor (var i = 0, len = tracks.length; i < len; i++) {\n  tracks[i].addEventListener(\'click\', function(e){\n    playTrack(this.href);\n    e.preventDefault();\n  });\n}\n\n</script><script>\nvar buttonsClicked = 0;\n  function vidplay() {\n      var video1 = document.getElementById("Video1");\n      var video2 = document.getElementById("Video2");\n      var video3 = document.getElementById("Video3");\n      var video4 = document.getElementById("Video4");\n      var video5 = document.getElementById("Video5");\n\n      var button = document.getElementsByClassName("round-button").value = ++buttonsClicked;\n\n      /*if (video.paused) {\n           video.play();\n           button.textContent = "||";\n       } else {\n           video.pause();\n           button.textContent = ">";\n  */\n    if (buttonsClicked === 1 ){\n    video1.play();\n    } else if(buttonsClicked === 2) {\n    video2.play();\n    video1.pause();\n    video1.remove();\n    } else if(buttonsClicked === 3) {\n    video3.play();\n    video2.pause();\n    video2.remove();\n    }  else if(buttonsClicked === 4) {\n    video4.play();\n    video3.pause();\n    video3.remove();\n    }  else if(buttonsClicked === 5) {\n    video5.play();\n    video4.pause();\n    video4.remove();\n    } \n  }\n\n  function restart() {\n      var video = document.getElementById("Video1");\n      video.currentTime = 0;\n     }\n\n  function skip(value) {\n      var video = document.getElementById("Video1");\n      video.currentTime += value;\n     }      \n\n   </script><script type="text/javascript">\n\n       var loading_screen = pleaseWait({\n       logo: "assets/images/smirnoff-logo.png",\n       backgroundColor: \'#fff5c3\',\n       loadingHtml: "<div class=\'spinner\'><div class=\'double-bounce1\'><div class=\'double-bounce2\'></div></div>"\n });\n\n   jQuery(document).ready(function (){\n       setTimeout(function(){\n         loading_screen.finish();\n         }, 5000);\n         \n      //   });\n     // loading_screen.finish(); \n       });\n      //loading_screen.finish(); \n      // })   \n//setTimeout(function () {\n//loading_screen.finish();\n//}, 10000);\n\n\n </script></html>'),e.put("app/components/navbar/navbar.html",'<ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul>')}]);
//# sourceMappingURL=../maps/scripts/app-583392eceb.js.map