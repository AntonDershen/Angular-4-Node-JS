import { Injectable } from '@angular/core';
import { GameScoreService } from './game.score.service'

@Injectable()
export class GameSumService {
    constructor(private gameScoreService: GameScoreService){}

    rightSum(list: number[]) {
        var outerArray = new Array<number>(3, 7, 11, 15);
        var innerArray = new Array<number>(0, 1, 2, 3);
        this.sum(list, outerArray, innerArray, -1);
    }

    leftSum(list: number[])
    {
        var outerArray = new Array<number>(0, 4, 8, 12);
        var innerArray = new Array<number>(0, 1, 2, 3);
        this.sum(list ,outerArray, innerArray, 1);
    }

    upSum(list: number[]) {
        var outerArray = new Array<number>(0, 1, 2, 3);
        var innerArray = new Array<number>(0, 4, 8, 12);
        this.sum(list, outerArray, innerArray, 1);
    }

    downSum(list: number[]) {
        var outerArray = new Array<number>(0,1,2,3);
        var innerArray = new Array<number>(12,8,4,0);
        this.sum(list, outerArray, innerArray, 1);
    }

    sum(list: number[], outerArray: Array<number>, innerArray: Array<number>, minus: number){
        outerArray.forEach(_i => {
            var preventValue = -1;
            var preventIndex = 0;

            innerArray.forEach(_g => {

                if(preventValue == 0){
                    if( list[_i + _g * minus] != 0){
                        preventValue = list[_i + _g * minus]
                        preventIndex = _i + _g * minus
                        return;
                    }
                }
                if(preventValue != 0){
                    if( list[_i + _g * minus] == preventValue){
                        list[preventIndex] = 2 * preventValue;
                        this.gameScoreService.updateGameScore(preventValue * 2);
                        list[_i + _g * minus] = 0;
                        preventIndex = 0;
                        preventValue = -1;
                        return;
                    }
                }
                if(preventValue != 0){
                    if( list[_i + _g * minus] != preventValue){
                        preventIndex = _i + _g * minus;
                        preventValue = list[_i + _g * minus];
                        return;
                    }
                }
            })
        })
    }
}