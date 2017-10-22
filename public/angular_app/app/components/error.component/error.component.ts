import { Component, animate, state, style, transition, trigger } from '@angular/core';
import {TranslateService} from 'ng2-translate';
@Component({
    selector: 'error',
    templateUrl: './angular_app/app/components/error.component/error.component.html'
})
export class ErrorComponent { 
    constructor(translate: TranslateService) {
        translate.setDefaultLang('en');
        translate.use('en');
    }
}

