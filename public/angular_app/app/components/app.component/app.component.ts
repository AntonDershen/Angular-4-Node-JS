import { Component } from '@angular/core';
import { LanguageService } from './../../services/language/language.service'

@Component({
    selector: 'app',
    templateUrl: './angular_app/app/components/app.component/app.component.html'
})
export class AppComponent { 
    constructor(private languageService: LanguageService) {
        
    }
}

