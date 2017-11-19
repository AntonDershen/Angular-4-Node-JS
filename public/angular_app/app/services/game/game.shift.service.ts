import { Injectable } from '@angular/core';

@Injectable()
export class GameShiftService {

    rightShift(list: number[]) {
        var outerArray = new Array<number>(3, 7, 11, 15);
        var innerArray = new Array<number>(0, 1, 2, 3);
        this.shift(list, outerArray, innerArray, -1, -1);
    }

    leftShift(list: number[]) {
        var outerArray = new Array<number>(0, 4, 8, 12);
        var innerArray = new Array<number>(0, 1, 2, 3);
        this.shift(list, outerArray, innerArray, 1, 1);
    }

    upShift(list: number[]) {
        var outerArray = new Array<number>(0, 1, 2, 3);
        var innerArray = new Array<number>(0, 4, 8, 12);
        this.shift(list, outerArray, innerArray, 4, 1);
    }

    downShift(list: number[]) {
        var outerArray = new Array<number>(0,1,2,3);
        var innerArray = new Array<number>(12,8,4,0);
        this.shift(list, outerArray, innerArray, -4, 1);
    }

    shift(list: number[], outerArray: Array<number>, innerArray: Array<number>, preventIndexCounter: number, minus: number) {
        outerArray.forEach( _i => {
            var preventValue = -1;
            var preventIndex = 0;
            innerArray.forEach( _g => {
                if(preventValue == 0){
                    if( list[_i + _g * minus] != 0){
                        list[preventIndex] = list[_i + _g * minus]
                        list[_i + _g * minus] = 0;
                        preventIndex  += preventIndexCounter;
                        _g = minus * (preventIndex - _i);
                        preventValue = 0;
                        return;
                    }
                }
                if(preventValue != 0){
                    if( list[_i + _g * minus] == 0){
                        preventValue = 0;
                        preventIndex = _i + _g * minus;
                        return;
                    }
                }
            })
        })
    }

}