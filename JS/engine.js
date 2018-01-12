var scene;
var fly;
var frog;
var ribbitSound;
var NUMFLIES = 3;
var flies;
var scoreBoard;
var hits;
var curTime;
var ourTime;
var lastTime;
var MAXTIME = 30;
var timer;
var resetBtn;

function init(){
    scoreBoard = document.getElementById("scoreBoard");
    resetBtn = document.getElementById("resetBtn");
    resetBtn.style.visibility = "hidden";
    hits = 0;
    lastTime = 0;
    curTime = Date.now();
    ourTime = 0;
    scene = new Scene();
    scene.setBG("green");
    setUpFlies();
    frog = new Frog(scene);
    ribbitSound = new Sound("./Sounds/ribbit.mp3");
    scene.start();
}

function update(){
    scene.clear();
    findTime();
    checkTimer();
    for(i = 0; i < NUMFLIES; i++){
        flies[i].move();
        flies[i].update();
        checkCollisions(i);
    }
    scoreBoard.innerHTML = "Flies Ate: " + hits + " Time: " + ourTime.toFixed(2);
    frog.checkKeys();
    frog.update();
}

function checkCollisions(flyNum){
    if(frog.collidesWith(flies[flyNum])){
        ribbitSound.play();
        flies[flyNum].reset();
        hits++;
        scoreBoard.innerHTML = "Flies Ate: " + hits + " Time: " + ourTime.toFixed(2);
        
    }
}

function setUpFlies(){
    flies = new Array(NUMFLIES);
    for(i = 0; i < NUMFLIES; i++){
        flies[i] = new Fly(scene);
    }
}

function checkTimer(){
    if(ourTime >= MAXTIME){
        scene.stop();
        resetBtn.style.visibility = "visible";
    }
}

function findTime(){
    lastTime = curTime;
    ourTime += (Date.now() - lastTime) / 1000;
    curTime = Date.now();
}

function reset(){
    document.location.href = "";
}
