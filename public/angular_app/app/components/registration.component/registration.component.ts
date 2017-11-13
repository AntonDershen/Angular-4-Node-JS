import { Component} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from 'ng2-translate';
import { UserService } from './../../services/user/user.service';
import { AuthenticationService } from './../../services/auth/auth.service';
import { Observable } from "rxjs/Observable";
import { Router } from '@angular/router';

@Component({
    selector: 'registration',
    templateUrl: './angular_app/app/components/registration.component/registration.component.html'
})
export class RegistrationComponent { 
    registrationForm: FormGroup;
    userName: FormControl; 
    password: FormControl;
    cofirmPassword: FormControl;

    constructor(
            translate: TranslateService, 
            private userService: UserService, 
            private authService: AuthenticationService,
            private router: Router) {
        translate.setDefaultLang('en');
        translate.use('en');
    }
    ngOnInit() {
        this.createFormControls();
        this.createFormGroup();
    }
    createFormControls() { 
        this.userName = new FormControl('',  [
            Validators.required 
        ], 
        [  
            this.isUserNameExists.bind(this)
        ]);
        this.password = new FormControl('', [
            Validators.required,
            Validators.minLength(6)
        ]);
        this.cofirmPassword = new FormControl('', [
            Validators.required,
            Validators.minLength(6)
        ]);
    }
    createFormGroup() {
        this.registrationForm = new FormGroup({
            userName: this.userName,
            password: this.password,
            confirmPassword: this.cofirmPassword
        }, this.validatePasswordConfirmation);
    }
    isUserNameExists(control: FormControl) {
        var q = new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                var response = this.userService.isUserExists(control.value);
                response.subscribe(res => {
                    console.log(res);
                    if(res) {
                        resolve({'userNameTaken': true});
                    } 
                    else {
                        resolve(null);
                    }
                });
            }, 1000);
          });
          return q;
    }
    validatePasswordConfirmation(group: FormGroup): {[s:string]:boolean} {
        var password = group.controls['password'];
        var confirmPassword = group.controls['confirmPassword'];

        if (password.value !== confirmPassword.value) { // this is the trick
            confirmPassword.setErrors({validatePasswordConfirmation: true});
        }
        return null; 
    }
   submit() {
        var user = this.registrationForm.controls['userName'];
        var password = this.registrationForm.controls['password'];
        var response = this.authService.registration(user.value, password.value).subscribe(res=>{
            if(res){
                this.router.navigate(['']);
            }
        });
    }
}

