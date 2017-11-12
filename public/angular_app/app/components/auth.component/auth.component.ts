import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import {TranslateService} from 'ng2-translate';
import {Http} from '@angular/http';
import { AuthenticationService } from './../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'auth',
    templateUrl: './angular_app/app/components/auth.component/auth.component.html'
})
export class AuthComponent { 
    
    authForm: FormGroup;

    constructor(
            translate: TranslateService, 
            private fb: FormBuilder,
            private authService: AuthenticationService,
            private router: Router
        ) {
        translate.setDefaultLang('en');
        translate.use('en');
    }

    ngOnInit() {
        this.createFormGroup();
    }

    createFormGroup()
    {
        this.authForm = this.fb.group({
            userName: this.fb.control('',  [
                Validators.required
            ]),
            
            password: this.fb.control('', [
                Validators.required,
                Validators.minLength(6)
            ])
         });
    }

    submit(){
        console.log("submit");
        var user = this.authForm.controls['userName'];
        var password = this.authForm.controls['password'];
        var response = this.authService.authenticate(user.value, password.value).subscribe(res=>{
            if(res){
                this.router.navigate(['']);
            }
        });
    }
}

