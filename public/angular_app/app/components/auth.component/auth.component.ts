import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from './../../services/auth/auth.service';
import { Router } from '@angular/router';
import { MessageService } from './../../services/message/message.service';
import { TranslateService } from 'ng2-translate';

@Component({
    selector: 'auth',
    templateUrl: './angular_app/app/components/auth.component/auth.component.html'
})
export class AuthComponent { 
    
    authForm: FormGroup;

    constructor(
            private fb: FormBuilder,
            private authService: AuthenticationService,
            private router: Router,
            private messageService: MessageService,
            private translateService: TranslateService
        ) {
    }
    ngOnInit() {
        this.createFormGroup();
    }
    createFormGroup() {
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
    submit() {
        console.log("submit");
        var user = this.authForm.controls['userName'];
        var password = this.authForm.controls['password'];
        var response = this.authService.authenticate(user.value, password.value)
            .subscribe(
                data =>{
                    if(data ){
                        this.router.navigate(['']);
                    }
                    else{
                        this.translateService.get("AuthError").subscribe(
                            data => {
                                this.messageService.error(data);
                            }
                        );
                    }
                },
                err => {this.router.navigate(['Error']);}
            );
    }
}

