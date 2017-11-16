import { Component } from '@angular/core';
import { LanguageService } from './../../services/language/language.service'
import { Title }     from '@angular/platform-browser';
import { TranslateService } from 'ng2-translate';

@Component({
    selector: 'app',
    templateUrl: './angular_app/app/components/app.component/app.component.html'
})
export class AppComponent { 
    constructor(
            private languageService: LanguageService,
            private titleService: Title,
            private translateService: TranslateService
            ) {}
    ngOnInit() {
        this.translateService.get("AppName").subscribe(
            data => {
                this.titleService.setTitle(data);
            }
        );
    }
}

