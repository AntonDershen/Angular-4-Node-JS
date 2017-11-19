import { Injectable } from '@angular/core';

@Injectable()
export class GameScoreService {
    gameScore: number;

    resetGameScore(){
        this.gameScore = 0;
    }

    updateGameScore(value: number)
    {
        this.gameScore += value;
    }
}