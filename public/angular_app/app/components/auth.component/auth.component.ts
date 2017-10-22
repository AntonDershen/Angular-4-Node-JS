import { Component, animate, state, style, transition, trigger } from '@angular/core';
import {TranslateService} from 'ng2-translate';
@Component({
    selector: 'auth',
    templateUrl: './angular_app/app/components/auth.component/auth.component.html'
})
export class AuthComponent { 
    constructor(translate: TranslateService) {
        translate.setDefaultLang('en');
        translate.use('en');
    }
}

