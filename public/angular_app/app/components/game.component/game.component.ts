import { Component, HostListener } from '@angular/core';
import { GameLogicService } from './../../services/game/game.logic.service';

@Component({
    selector: 'game',
    templateUrl: './angular_app/app/components/game.component/game.component.html'
})
export class GameComponent { 
    gameLogicService: GameLogicService
    
    constructor()
    {
        this.gameLogicService = new GameLogicService();
        this.gameLogicService.startGame();
    }

    restart()
    {
        this.gameLogicService.startGame();
    }

    @HostListener('window:keydown', ['$event'])
    keyboardInput(event: KeyboardEvent) {
        switch(event.code) { 
            case "ArrowUp": { 
                this.gameLogicService.upShift();
                this.gameLogicService.upSum();
                this.gameLogicService.initRandomValue();
                break;
            } 
            case "ArrowRight": { 
                this.gameLogicService.rightShift();
                this.gameLogicService.rightSum();
                this.gameLogicService.initRandomValue();
                break; 
            } 
            case "ArrowLeft": { 
                this.gameLogicService.leftShift();
                this.gameLogicService.leftSum();
                this.gameLogicService.initRandomValue();
                break; 
            } 
            case "ArrowDown": { 
                this.gameLogicService.downShift();
                this.gameLogicService.downSum();
                this.gameLogicService.initRandomValue();
                break; 
            } 
        } 
    }
}