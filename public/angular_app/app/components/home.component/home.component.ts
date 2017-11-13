import { Component } from '@angular/core';
import { AuthenticationService } from './../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './angular_app/app/components/home.component/home.component.html'
})
export class HomeComponent { 

    constructor(
            private authService: AuthenticationService,
            private router: Router
            ) {
    }

    submit() {
        this.authService.signOut();
        this.router.navigate(['/Auth']);
    }
}

