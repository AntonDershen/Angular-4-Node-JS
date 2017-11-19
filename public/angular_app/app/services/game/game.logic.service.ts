import { Injectable } from '@angular/core';
import { GameScoreService } from './game.score.service'
import { GameResultService } from './game.result.service'
import { GameSumService } from './game.sum.service'
import { GameShiftService } from './game.shift.service'

@Injectable()
export class GameLogicService {
    list: number[];
    gameScoreService: GameScoreService;
    gameResultService: GameResultService;
    gameSumService: GameSumService;
    gameShiftService: GameShiftService;

    constructor()
    {
        this.gameScoreService = new GameScoreService();
        this.gameResultService = new GameResultService();
        this.gameSumService = new GameSumService(this.gameScoreService);
        this.gameShiftService = new GameShiftService();
    }

    startGame()
    {
        this.initList();
        this.gameScoreService.resetGameScore();
        this.gameResultService.resetGameResult();
    }

    initList()
    {
        this.list = new Array()
        for (var _i = 0; _i < 16; _i++) {
            this.list.push(0);
        }
        var initNumber = this.getRandomInt(2,3);
        for (var _i = 0; _i < initNumber; _i++) {
            this.initRandomValue();
        }
    }

    initRandomValue()
    {
        var nullablePositions = this.list.filter(number=> number == 0).length;
        if (nullablePositions == 0){
            return; 
        }
        var randomPosition = this.getRandomInt(1, nullablePositions);
        var randomPower = this.getRandomInt(1,2);
        console.log(randomPosition);
        for (var _i = 0; _i < this.list.length; _i++) {
            if ( this.list[_i] == 0){
                randomPosition--;
            }
            if(randomPosition == 0) {
                this.list[_i] = Math.pow(2, randomPower);
                break;
            }
        }
    }

    getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}