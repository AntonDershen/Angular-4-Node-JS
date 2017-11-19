import { Injectable } from '@angular/core';

@Injectable()
export class GameResultService {
    isWin: boolean;
    isLose: boolean;

    resetGameResult()
    {
        this.isWin = false;
        this.isLose = false;
    }

    Win()
    {
        if(!this.isLose)
        {
            this.isWin = true;
        }
    }

    Lose()
    {
        if(!this.isWin)
        {
            this.isLose = true;
        }
    }

}
