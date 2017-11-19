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
                this.gameLogicService.gameShiftService.upShift(this.gameLogicService.list);
                this.gameLogicService.gameSumService.upSum(this.gameLogicService.list);
                break;
            } 
            case "ArrowRight": { 
                this.gameLogicService.gameShiftService.rightShift(this.gameLogicService.list);
                this.gameLogicService.gameSumService.rightSum(this.gameLogicService.list);
                break; 
            } 
            case "ArrowLeft": { 
                this.gameLogicService.gameShiftService.leftShift(this.gameLogicService.list);
                this.gameLogicService.gameSumService.leftSum(this.gameLogicService.list);
                break; 
            } 
            case "ArrowDown": { 
                this.gameLogicService.gameShiftService.downShift(this.gameLogicService.list);
                this.gameLogicService.gameSumService.downSum(this.gameLogicService.list);
                break; 
            } 
        } 
        this.gameLogicService.initRandomValue();
        this.gameLogicService.gameResultService.setGameResult(this.gameLogicService.list);
    }
}