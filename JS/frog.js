function Frog(scene){
    tempFrog = new Sprite(scene, "./Images/Frog.png", 30, 30);
    tempFrog.setSpeed(0);
    tempFrog.setAngle(0);
    tempFrog.maxSpeed = 10;
    tempFrog.minSpeed = -3;
    tempFrog.setPosition(100, 100);
    
    tempFrog.checkKeys = function(){
        if(keysDown[K_LEFT]){
            this.changeAngleBy(-5);
        }
        if(keysDown[K_RIGHT]){
            this.changeAngleBy(5);
        }
        if(keysDown[K_UP]){
            this.changeSpeedBy(1);
            if(this.speed >= this.maxSpeed){
                this.setSpeed(this.maxSpeed);
            }
        }
        if(keysDown[K_DOWN]){
            this.changeSpeedBy(-1);
            if(this.speed <= this.minSpeed){
                this.setSpeed(this.minSpeed);
            }
        }
    }
    return tempFrog;
}