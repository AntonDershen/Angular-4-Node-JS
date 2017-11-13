import { Injectable } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Injectable()
export class LanguageService {

    constructor(private translateService: TranslateService) {
        this.setBrowserLanguage();
    }

    private setBrowserLanguage()
    {
        var userLang = navigator.language;
        this.translateService.setDefaultLang('ru');
        if(userLang == "ru") {
            this.translateService.use(userLang);
        }
        else {
            this.translateService.use("en");
        }
    }

}