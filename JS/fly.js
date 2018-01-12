function Fly(scene){
    tempFly = new Sprite(scene, "./Images/Fly.png", 20, 20);
    tempFly.setSpeed(10);
    tempFly.move = function(){
        //random num between -45 and 45
        newDirection = (Math.random() * 90) - 45;
        this.changeAngleBy(newDirection);
    }
    tempFly.reset = function(){
        newX = Math.random() * this.cWidth;
        newY = Math.random() * this.cHeight;

        this.setPosition(newX, newY);
    }
    return tempFly;
}