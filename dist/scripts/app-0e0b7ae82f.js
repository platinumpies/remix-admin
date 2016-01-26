!function(){"use strict";angular.module("remixAdmin",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ngRoute","toastr","angular-circular-progress","angular-svg-round-progress"])}(),function(){"use strict";function e(){function e(){return n}var n=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=e}angular.module("remixAdmin").service("webDevTec",e)}(),function(){"use strict";function e(){function e(e){var n=this;n.relativeDate=e(n.creationDate).fromNow()}var n={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return e.$inject=["moment"],n}angular.module("remixAdmin").directive("acmeNavbar",e)}(),function(){"use strict";function e(e){function n(n,t,o,s){var a,i=e(t[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});t.addClass("acme-malarkey"),angular.forEach(n.extraValues,function(e){i.type(e).pause()["delete"]()}),a=n.$watch("vm.contributors",function(){angular.forEach(s.contributors,function(e){i.type(e.login).pause()["delete"]()})}),n.$on("$destroy",function(){a()})}function t(e,n){function t(){return o().then(function(){e.info("Activated Contributors View")})}function o(){return n.getContributors(10).then(function(e){return s.contributors=e,s.contributors})}var s=this;s.contributors=[],t()}var o={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:n,controller:t,controllerAs:"vm"};return t.$inject=["$log","githubContributor"],o}angular.module("remixAdmin").directive("acmeMalarkey",e),e.$inject=["malarkey"]}(),function(){"use strict";function e(e,n){function t(t){function s(e){return e.data}function a(n){e.error("XHR Failed for getContributors.\n"+angular.toJson(n.data,!0))}return t||(t=30),n.get(o+"/contributors?per_page="+t).then(s)["catch"](a)}var o="https://api.github.com/repos/Swiip/generator-gulp-angular",s={apiHost:o,getContributors:t};return s}angular.module("remixAdmin").factory("githubContributor",e),e.$inject=["$log","$http"]}(),function(){"use strict";function e(e,n,t){function o(){a(),e(function(){i.classAnimation="rubberBand"},4e3)}function s(){t.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),i.classAnimation=""}function a(){i.awesomeThings=n.getTec(),angular.forEach(i.awesomeThings,function(e){e.rank=Math.random()})}var i=this;i.toggle=!0,i.awesomeThings=[],i.classAnimation="",i.creationDate=1447798239285,i.showToastr=s,o()}angular.module("remixAdmin").controller("MainController",e),e.$inject=["$timeout","webDevTec","toastr"]}(),function(){"use strict";function e(e){e.debug("runBlock end")}angular.module("remixAdmin").run(e),e.$inject=["$log"]}(),function(){"use strict";function e(e){e.when("/",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).otherwise({redirectTo:"/"})}angular.module("remixAdmin").config(e),e.$inject=["$routeProvider"]}(),function(){"use strict";angular.module("remixAdmin").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function e(e,n){e.debugEnabled(!0),n.allowHtml=!0,n.timeOut=3e3,n.positionClass="toast-top-right",n.preventDuplicates=!0,n.progressBar=!0}angular.module("remixAdmin").config(e),e.$inject=["$logProvider","toastrConfig"]}(),angular.module("remixAdmin").run(["$templateCache",function(e){e.put("app/main/finalScreen.html",'<div class="container grey-fill stop-scale"></div>'),e.put("app/main/main.html",'<html ng-app"remixadmin"=""><div class="container grey-fill stop-scale"><div><acme-navbar creation-date="main.creationDate"></acme-navbar></div><div class="fixer-margin"><div class="main-wrap"><div class="wrap"><div class="nba-circular-crop"><div class="videoWrapper"><video id="Video5" loop="" muted="" preload="auto"><source src="/assets/videos/remix-vid-5_converted.mp4" type="video/mp4"></video><video id="Video4" loop="" muted="" preload="auto"><source src="/assets/videos/remix-vid-4_converted.mp4" type="video/mp4"></video><video id="Video3" loop="" muted="" preload="auto"><source src="/assets/videos/remix-vid-3_converted.mp4" type="video/mp4"></video><video id="Video2" loop="" muted="" preload="auto"><source src="/assets/videos/remix-vid-2_converted.mp4" type="video/mp4"></video><video id="Video1" loop="" muted="" preload="auto"><source src="/assets/videos/remix-vid-1_converted.mp4" type="video/mp4"></video><div round-progress="" max="50" current="50" color="#ff3e3e" bgcolor="#ffffff" radius="400" stroke="25" semi="false" rounded="false" clockwise="true" responsive="true" duration="60000" animation="linearEase"></div></div></div><div class="buttons-buttom" ng-click"toggle=\'!toggle"\'><a class="deg0 track" href="/assets/sounds/arp.wav"><div class="round-button" onclick="vidplay()"><div class="round-button-random"><span class="random-icon btn-hover"><span class="btn-text-pos">Random</span></span></div></div></a> <a class="deg45 track" href="/assets/sounds/vox.wav"><div class="round-button" onclick="vidplay()"><div class="round-button-vocal"><span class="vocal-icon btn-hover"><span class="btn-text-pos">Vocal</span></span></div></div></a> <a class="deg135 track" href="/assets/sounds/bass.wav"><div class="round-button" onclick="vidplay()"><div class="round-button-bass"><span class="bass-icon btn-hover"><span class="btn-text-pos">Bass</span></span></div></div></a> <a class="deg180 track" href="/assets/sounds/drums.wav"><div class="round-button" onclick="vidplay()"><div class="round-button-effects"><span class="effects-icon btn-hover"><span class="btn-text-pos">Effects</span></span></div></div></a> <a class="deg225 track" href="/assets/sounds/synth.wav"><div class="round-button" onclick="vidplay()"><div class="round-button-melody"><span class="melody-icon btn-hover"><span class="btn-text-pos">Melody</span></span></div></div></a> <a class="deg315 track" href="/assets/sounds/perc.wav"><div class="round-button" onclick="vidplay()"><div class="round-button-eq"><span class="eq-icon btn-hover"><span class="btn-text-pos">EQ</span></span></div></div></a></div></div></div><div class="user-position"><div class="user"><div class="left-side-wrap"><p class="dj">DJ</p><span class="name">@TomLA232</span></div></div></div><div class="branding-position"><div class="branding"><div class="right-side-wrap"><span class="nike-text">Nike</span><span class="nba-text">NBA</span><span class="remix-text">Remix</span></div></div></div></div></div><script>\n  /*--------------------FIND BETTER APPROACH--------------------*/\n$(\'.round-button-melody, .round-button-effects, .round-button-random, .round-button-eq, .round-button-bass, .round-button-vocal\').on(\'click\', function(e){\n  e.preventDefault();\n  $(this).css(\'border-color\', \'#ff3e3e\');\n});\n\n/*\n$(\'.round-button-effects\').on(\'click\', function(e){\n      e.preventDefault();\n      $(this).toggleClass(\'myClickState\');\n    }); */\n\n  </script><script>\n\n/*------------------------------------------------MOVE INTO SEPERATE FILE---------------------------------------------------*/\n\n/*var audio = {\n        buffer: {},\n        compatibility: {},\n        files: [\n            \'sounds/drums.wav\',\n            \'sounds/bass.wav\',\n            \'sounds/arp.wav\',\n            \'sounds/perc.wav\',\n            \'sounds/synth.wav\',\n            \'sounds/vox.wav\'\n        ],\n        proceed: true,\n        source_loop: {},\n        source_once: {}\n    };*/\n\n\nwindow.AudioContext = window.AudioContext || window.webkitAudioContext;\n\nvar offset = 0;\nvar context = new AudioContext();\nvar source;  \n\nvar tempo = 2.0;\n\nfunction playTrack(url) {\n  var request = new XMLHttpRequest();\n  request.open(\'GET\', url, true);\n  request.responseType = \'arraybuffer\';\n\n  var audiobuffer;\n\n  // Decode asynchronously\n  request.onload = function() {\n    \n    if (request.status == 200) {\n      \n      context.decodeAudioData(request.response, function(buffer) {\n        source = context.createBufferSource();\n        source.buffer = buffer;\n        source.connect(context.destination);\n        source.loop = true;\n        console.log(\'context.currentTime \'+context.currentTime);\n\n        if (offset == 0) {\n          source.start();\n          offset = context.currentTime;\n        } else {\n          var relativeTime = context.currentTime - offset;\n          var beats = relativeTime / tempo;\n          var remainder = beats - Math.floor(beats);\n          var delay = tempo - (remainder*tempo);\n          source.start(context.currentTime+delay,relativeTime+delay);\n        }\n\n\n      }, function(e) {\n        console.log(\'Error decoding audio data:\' + e);\n      });\n    } else {\n      console.log(\'Audio didn\\\'t load successfully; error code:\' + request.statusText);\n    }\n  }\n  request.send();\n}\n\nvar tracks = document.getElementsByClassName(\'track\');\n\nfor (var i = 0, len = tracks.length; i < len; i++) {\n  tracks[i].addEventListener(\'click\', function(e){\n    console.log(this.href);\n    playTrack(this.href);\n    e.preventDefault();\n\n\n  });\n}\n\n</script><script>\nvar buttonsClicked = 0;\n  function vidplay() {\n      var video1 = document.getElementById("Video1");\n      var video2 = document.getElementById("Video2");\n      var video3 = document.getElementById("Video3");\n      var video4 = document.getElementById("Video4");\n      var video5 = document.getElementById("Video5");\n\n      var button = document.getElementsByClassName("round-button").value = ++buttonsClicked;\n\n      /*if (video.paused) {\n           video.play();\n           button.textContent = "||";\n       } else {\n           video.pause();\n           button.textContent = ">";\n  */\n    if (buttonsClicked === 1 ){\n    video1.play();\n    console.log("video 1 is playing");\n    } else if(buttonsClicked === 2) {\n    video2.play();\n    video1.pause();\n    video1.remove();\n    console.log("video 2 is playing")\n    } else if(buttonsClicked === 3) {\n    video3.play();\n    video2.pause();\n    video2.remove();\n    console.log("video 3 is playing")\n    }  else if(buttonsClicked === 4) {\n    video4.play();\n    video3.pause();\n    video3.remove();\n    console.log("video 4 is playing")\n    }  else if(buttonsClicked === 5) {\n    video5.play();\n    video4.pause();\n    video4.remove();\n    console.log("video 5 is playing")\n    } \n  }\n\n  function restart() {\n      var video = document.getElementById("Video1");\n      video.currentTime = 0;\n     }\n\n  function skip(value) {\n      var video = document.getElementById("Video1");\n      video.currentTime += value;\n     }      \n\n   </script></html>'),e.put("app/components/navbar/navbar.html",'<ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul>')}]);
//# sourceMappingURL=../maps/scripts/app-0e0b7ae82f.js.map
