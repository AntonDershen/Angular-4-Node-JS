import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { AuthenticationService } from './../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './angular_app/app/components/home.component/home.component.html'
})
export class HomeComponent { 

    constructor(
            translate: TranslateService,
            private authService: AuthenticationService,
            private router: Router
            ) {
        translate.setDefaultLang('en');
        translate.use('en');
    }

    submit() {
        this.authService.signOut();
        this.router.navigate(['/Auth']);
    }
}

