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

    setGameResult(list: number[])
    {
        list.forEach(element => {
            if(element == 2048){
                this.Win()
            }
        });
        
        if(list.filter(x=>x > 0).length == 16){
            if(this.checkLose(list)){
                this.Lose();
            }
        }
    }

    checkLose(list: number[])
    {
        for( var i = 0; i < 4; i++){
            for( var g = 0; g < 4; g++){
                if ( (i * 4 + g - 1) >= 0 && (i * 4 + g - 1) < 16){ 
                    if(list[ i * 4 + g - 1] == list[ i * 4 + g])
                    {
                        return false;
                    }
                }
                if ( (i * 4 + g + 1) >= 0 && (i * 4 + g + 1) < 16){ 
                    if(list[ i * 4 + g + 1] == list[ i * 4 + g])
                    {
                        return false;
                    }
                }
                if ( ((i - 1) * 4 + g) >= 0 && ((i - 1) * 4 + g) < 16){ 
                    if(list[ (i - 1) * 4 + g] == list[ i * 4 + g])
                    {
                        return false;
                    }
                }
                if ( ((i + 1) * 4 + g) >= 0 &&  ((i + 1) * 4 + g) < 16){ 
                    if(list[(i + 1) * 4 + g] == list[ i * 4 + g])
                    {
                        return false;
                    }
                }
            }
        }
        return true;
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
