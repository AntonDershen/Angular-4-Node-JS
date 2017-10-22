import { Component, animate, state, style, transition, trigger } from '@angular/core';
import {TranslateService} from 'ng2-translate';
@Component({
    selector: 'app',
    templateUrl: './angular_app/app/components/app.component/app.component.html'
})
export class AppComponent { 
    constructor(translate: TranslateService) {
        translate.setDefaultLang('en');
        translate.use('en');
    }
}

