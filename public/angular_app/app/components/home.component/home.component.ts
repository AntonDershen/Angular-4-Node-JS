import { Component, animate, state, style, transition, trigger } from '@angular/core';
import {TranslateService} from 'ng2-translate';
@Component({
    selector: 'home',
    templateUrl: './angular_app/app/components/home.component/home.component.html'
})
export class HomeComponent { 
    constructor(translate: TranslateService) {
        translate.setDefaultLang('en');
        translate.use('en');
    }
}

