var WIDTH = 428; //window.innerWidth*0.8;
var HEIGHT = 428; //window.innerHeight*0.8;
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0x333333, 1);
document.body.appendChild(renderer.domElement);
var scene = new THREE.Scene();
//camera + controls
var camera = new THREE.PerspectiveCamera(100, WIDTH / HEIGHT);
camera.position.set(-35, 60, 0);
controls = new THREE.OrbitControls(camera, renderer.domElement);
//lights
var light = new THREE.PointLight(0xffffff);
var light2 = new THREE.PointLight(0xffffff);
var light3 = new THREE.PointLight(0xffffff);
var light4 = new THREE.PointLight(0xffffff);
var light5 = new THREE.PointLight(0xffffff);
var light6 = new THREE.PointLight(0xffffff);
var light7 = new THREE.PointLight(0xffffff);
light.position.set(0, 0, 0); //center
light2.position.set(0, 0, 80); //top
light3.position.set(0, 0, -80); //bottom
light4.position.set(80, 0, 0); //top
light5.position.set(0, 80, 0); //bottom
light6.position.set(-80, 0, 0); //top
light7.position.set(0, -80, 0); //bottom
scene.add(light);
scene.add(light2);
scene.add(light3);
scene.add(light4);
scene.add(light5);
scene.add(light6);
scene.add(light7);
//audio
var audioA = new Audio('audio/C.wav');
var audioB = new Audio('audio/D.wav');
var audioC = new Audio('audio/E.wav');
var audioD = new Audio('audio/F.wav');
var audioE = new Audio('audio/G.wav');
var audioF = new Audio('audio/A.wav');
var audioG = new Audio('audio/B.wav');
var audioH = new Audio('audio/Cb.wav');

//sphere
var sphereGeometry = new THREE.SphereGeometry(6, 100, 100);
//materials
var colorA = new THREE.MeshPhongMaterial({ color: 0xff084a });
var colorB = new THREE.MeshPhongMaterial({ color: 0x3399ff });
var colorC = new THREE.MeshPhongMaterial({ color: 0x9933ff });
var colorD = new THREE.MeshPhongMaterial({ color: 0xccff00 });
var colorE = new THREE.MeshPhongMaterial({ color: 0xff7f50 });
var colorF = new THREE.MeshPhongMaterial({ color: 0xff00ff });
var colorG = new THREE.MeshPhongMaterial({ color: 0x33ff33 });
var colorH = new THREE.MeshPhongMaterial({ color: 0xffff33 });
//sphere
var sphereA = new THREE.Mesh(sphereGeometry, colorA);
var sphereB = new THREE.Mesh(sphereGeometry, colorB);
var sphereC = new THREE.Mesh(sphereGeometry, colorC);
var sphereD = new THREE.Mesh(sphereGeometry, colorD);
var sphereE = new THREE.Mesh(sphereGeometry, colorE);
var sphereF = new THREE.Mesh(sphereGeometry, colorF);
var sphereG = new THREE.Mesh(sphereGeometry, colorG);
var sphereH = new THREE.Mesh(sphereGeometry, colorH);
//objects added to scene
scene.add(sphereA);
scene.add(sphereB);
scene.add(sphereC);
scene.add(sphereD);
scene.add(sphereE);
scene.add(sphereF);
scene.add(sphereG);
scene.add(sphereH);
//position spheres
sphereA.position.x = 0;
sphereA.position.y = 0;
sphereA.position.z = 60;

sphereB.position.x = 0;
sphereB.position.y = 40;
sphereB.position.z = 20;

sphereC.position.x = -34.641;
sphereC.position.y = -20;
sphereC.position.z = 20;

sphereD.position.x = 34.641;
sphereD.position.y = -20;
sphereD.position.z = 20;

sphereE.position.x = 0;
sphereE.position.y = -40;
sphereE.position.z = -20;

sphereF.position.x = -34.641;
sphereF.position.y = 20;
sphereF.position.z = -20;

sphereG.position.x = 34.641;
sphereG.position.y = 20;
sphereG.position.z = -20;

sphereH.position.x = 0;
sphereH.position.y = 0;
sphereH.position.z = -60;

//game scripts
function cameraPosition() {
  //shows the camera coordinates every two seconds
  setInterval(function() {
    console.log(
      camera.position.x + ', ' + camera.position.y + ', ' + camera.position.z
    );
  }, 5000);
}
cameraPosition();

//animation functions
function sphereAnimation(target) {
  var t = 0;
  var int = setInterval(function() {
    if (t === 200) {
      clearInterval(int);
    }
    target.scale.x += 0.02;
    target.scale.y += 0.02;
    target.scale.z += 0.02;
    t++;
  }, 2);
  setTimeout(function() {
    console.log('Timeout');
    var t2 = 0;
    var int2 = setInterval(function() {
      if (t2 === 200) {
        clearInterval(int2);
      }
      target.scale.x -= 0.02;
      target.scale.y -= 0.02;
      target.scale.z -= 0.02;
      t2++;
    }, 2);
  }, 800);
}

function spherePop() {
  setTimeout;
  var t = 0;
  var xx = 1;
  var yy = 1;
  var zz = 1;
  var int = setInterval(function() {
    if (t === 300) {
      clearInterval(int);
      explode();
    }
    xx += 0.02;
    yy += 0.02;
    zz += 0.02;
    sphereA.scale.set(xx, yy, zz);
    sphereB.scale.set(xx, yy, zz);
    sphereC.scale.set(xx, yy, zz);
    sphereD.scale.set(xx, yy, zz);
    sphereE.scale.set(xx, yy, zz);
    sphereF.scale.set(xx, yy, zz);
    sphereG.scale.set(xx, yy, zz);
    sphereH.scale.set(xx, yy, zz);
    t++;
  }, 0.1);
  function explode() {
    audioH.play();
    xx = 0;
    yy = 0;
    zz = 0;
    renderer.setClearColor(0xff5555, 1);
    sphereA.scale.set(0.01, 0.01, 0.01);
    sphereB.scale.set(0.01, 0.01, 0.01);
    sphereC.scale.set(0.01, 0.01, 0.01);
    sphereD.scale.set(0.01, 0.01, 0.01);
    sphereE.scale.set(0.01, 0.01, 0.01);
    sphereF.scale.set(0.01, 0.01, 0.01);
    sphereG.scale.set(0.01, 0.01, 0.01);
    sphereH.scale.set(0.01, 0.01, 0.01);

    setTimeout(function() {
      renderer.setClearColor(0x333333, 1);
      sphereA.scale.set(1, 1, 1);
      sphereB.scale.set(1, 1, 1);
      sphereC.scale.set(1, 1, 1);
      sphereD.scale.set(1, 1, 1);
      sphereE.scale.set(1, 1, 1);
      sphereF.scale.set(1, 1, 1);
      sphereG.scale.set(1, 1, 1);
      sphereH.scale.set(1, 1, 1);
    }, 2500);
  }
}
//Simon Game
//Settings Functions
function show() {
  $('#settingsmenu').css('display', 'block');
  $('#settings').attr('onclick', 'hide()');
  function computerMoveGen() {
    var randomMove = Math.floor(Math.random() * 7 + 1);
    console.log(randomMove);
    simonGame['simon'].push(randomMove);
    computerMovePlay();
  }
}
function hide() {
  $('#settingsmenu').css('display', 'none');
  $('#settings').attr('onclick', 'show()');
}
var gameMode = 'lenient';
function changeGameMode() {
  if (gameMode === 'lenient') {
    gameMode = 'strict';
    $('#game-mode').html('Strict');
    $('#game-mode').css('color', 'red');
  } else {
    gameMode = 'lenient';
    $('#game-mode').html('Lenient');
    $('#game-mode').css('color', 'blue');
  }
}
//Game Functions
var game = {
  computer: [],
  player: [],
  moves: 0
};
var currentHighScore = 0;
var turn = 'computer';
function newGame() {
  $('winner').css('display', 'none');
  $('#instructions').css('display', 'none');
  $('#game-info').css('display', 'block');
  game = {
    computer: [],
    player: [],
    moves: 0
  };
  computerMove();
}

function computerMove() {
  var randomMove = Math.floor(Math.random() * 8);
  game['computer'].push(randomMove);
  computerPlay();
}

function computerPlay() {
  var totalMoves = game['computer'].length;
  var move = 0;
  var moveTimer = setInterval(function() {
    if (move == totalMoves - 1) {
      clearInterval(moveTimer);
      turn = 'player';
    }
    var target = game['computer'][move];
    moveAnimation(target);
    move++;
  }, 1800);
}

function moveAnimation(target) {
  switch (target) {
    case 0:
      sphereAnimation(sphereA);
      audioA.play();
      break;
    case 1:
      sphereAnimation(sphereB);
      audioB.play();
      break;
    case 2:
      sphereAnimation(sphereC);
      audioC.play();
      break;
    case 3:
      sphereAnimation(sphereD);
      audioD.play();
      break;
    case 4:
      sphereAnimation(sphereE);
      audioE.play();
      break;
    case 5:
      sphereAnimation(sphereF);
      audioF.play();
      break;
    case 6:
      sphereAnimation(sphereG);
      audioG.play();
      break;
    case 7:
      sphereAnimation(sphereH);
      audioA.play();
      break;
  }
}

function playerMove(entry) {
  if (turn === 'player') {
    game['player'].push(entry);
    var move = game['player'].length;
    if (entry === game['computer'][move - 1]) {
      moveAnimation(entry);
      console.log('Correct');
      $('#score').html(move);
      $('#level').html(move + 1);
      if (move == game['computer'].length) {
        console.log('You win this round...');
        if (game['player'].length > currentHighScore) {
          currentHighScore++;
          $('#high-score').html(currentHighScore);
        }
        if (currentHighScore === 5) {
          renderer.setClearColor(0x00009a, 1);
        }
        if (currentHighScore === 10) {
          renderer.setClearColor(0xca8a2a, 1);
        }
        if (currentHighScore === 20) {
          $('#winner').css('display', 'block');
          renderer.setClearColor(0x009a00, 1);
        }
        game['player'] = [];
        turn = 'computer';
        setTimeout(function() {
          computerMove();
        }, 2000);
      }
    } else {
      console.log('Wrong answer. Try Again!');
      spherePop();
      if (gameMode === 'strict') {
        newGame();
      } else {
        game['player'] = [];
        setTimeout(function() {
          computerPlay();
        }, 3000);
      }
    }
  }
}

//just for fun
var lastRandom = 8;
var onOff = 0;
function stopPlaying() {
  onOff = 1;
  $('#song-play').html('Play me a song!');
  $('#song-play').attr('onclick', 'play()');
}

function play() {
  onOff = 0;
  $('#song-play').html('Stop Playing');
  $('#song-play').attr('onclick', 'stopPlaying()');
  var int3 = setInterval(function() {
    if (onOff === 1) {
      clearInterval(int3);
    }
    var rando = Math.floor(Math.random() * 7);
    if (rando === lastRandom) {
      rando += 1;
    }
    if (rando === 8) {
      rando = 0;
    }
    lastRandom = rando;
    switch (rando) {
      case 0:
        audioA.play();
        break;
      case 1:
        audioB.play();
        break;
      case 2:
        audioC.play();
        break;
      case 3:
        audioD.play();
        break;
      case 4:
        audioE.play();
        break;
      case 5:
        audioF.play();
        break;
      case 6:
        audioG.play();
        break;
    }
  }, 400);
}

//renderer
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();
