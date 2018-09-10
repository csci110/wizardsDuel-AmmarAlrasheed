import { game, Sprite } from "./sgc/sgc.js";

game.setBackground("floor.png");

class Playerwizard extends Sprite {
    constructor() {
        super();
        this.name = "Marcus the Wizard";
        this.width = 48;
        this.height = 48;
        this.setImage("marcusSheet.png");
        this.x = this.width;
        this.y = this;
        this.defineAnimation("down", 6, 8);
        this.defineAnimation("up", 0, 2);
        this.defineAnimation("left", 9, 11);
        this.defineAnimation("right", 3, 5);
        this.speedWhenWalking = 100;
        
    }
    
    handleDownArrowKey() {
        this.playAnimation("down");
        this.speed = this.speedWhenWalking;
        this.angle = 270;
    }
    
    handleUpArrowKey() {
        this.playAnimation("up");
        this.speed = this.speedWhenWalking;
        this.angle = 90;
    }
    handleRightArrowKey() {
        this.playAnimation("right");
        this.speed = this.speedWhenWalking;
        this.angle = 0;
    }
    
    handleLeftArrowKey() {
        this.playAnimation("left");
        this.speed = this.speedWhenWalking;
        this.angle = 180;
    }
    
    
    
    handleGameLoop() {
        this.y = Math.max(5, this.y);
        this.y = Math.min(552, this.y);
        this.speed = 0;
        
    }
    
    handleSpacebar() {
        let spell = new Spell();
        spell.x = this.width;  // this sets the position of the spell object equal to
        spell.y = this.y;  // the position of any object created from the PlayerWizard class 
        spell.name = "A spell cast by Marcus";
        spell.setImage("marcusSpellSheet.png");
        spell.angle = 0;
        this.playAnimation("right");
    }
    
}

class Spell extends Sprite {
    constructor() {
        super();
        this.speed = 200;
        this.width = 48;
        this.height = 48;
        this.defineAnimation("magic", 0, 7);
        this.playAnimation("magic", true);
        this.setImage("marcusSpellSheet");
    }
    
    handleBoundaryContact() {
    // Delete spell when it leaves display area
    game.removeSprite(this);
    }
    
    
    
    
}
 let marcus = new Playerwizard();
 
 
