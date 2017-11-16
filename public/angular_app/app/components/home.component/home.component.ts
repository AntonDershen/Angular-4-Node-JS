import { Component } from '@angular/core';
import { AuthenticationService } from './../../services/auth/auth.service';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './angular_app/app/components/home.component/home.component.html'
})
export class HomeComponent { 
    list: number[];
    constructor(
            private authService: AuthenticationService,
            private router: Router
            ) {

                this.initList();
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

    @HostListener('window:keydown', ['$event'])
    keyboardInput(event: KeyboardEvent) {
        switch(event.code) { 
            case "ArrowUp": { 
               //statements; 
               this.up();
               this.initRandomValue();
               break;
            } 
            case "ArrowRight": { 
               this.right();
               this.initRandomValue();
               break; 
            } 
            case "ArrowLeft": { 
                // this.left();
                // this.initRandomValue();
                break; 
            } 
            case "ArrowDown": { 
               //statements; 
               break; 
            } 
         } 
    }

    right() {
        for (var _i = 0; _i < 4; _i+=4) {
            var preventValue = 0;
            for(var _g = 0; _g < 4; _g++){
                if(this.list[_i + _g]!=0){
                    if(preventValue == 0){
                        preventValue = this.list[_i + _g];
                        continue;
                    }
                    if(preventValue == this.list[_i + _g]){
                        this.list[_i + _g] = preventValue * 2;
                        preventValue = 0;
                        continue;
                    }
                    if(preventValue != this.list[_i + _g]){
                        preventValue = this.list[_i + _g];
                        continue;
                    }
                }
            }
        }
    }

    up() {
        for (var _i = 0; _i < 4; _i++) {
            var preventValue = -1;
            var preventIndex = 0;
            for(var _g = 0; _g < 16; _g+=4){
                    if(preventValue == 0){
                        if(this.list[_i + _g] != 0){
                            this.list[preventIndex] = this.list[_i + _g]
                            this.list[_i + _g] = 0;
                            preventIndex +=4;
                            _g = preventIndex - _i;
                            preventValue = 0;
                            continue;
                        }
                    }
                    if(preventValue != 0){
                        if(this.list[_i + _g] == 0){
                            preventValue = 0;
                            preventIndex = _i + _g;
                            continue;
                        }
                    }
                }
        }
    }

    submit() {
        this.authService.signOut();
        this.router.navigate(['/Auth']);
    }
}

