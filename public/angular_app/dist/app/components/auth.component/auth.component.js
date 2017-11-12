"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const ng2_translate_1 = require("ng2-translate");
const auth_service_1 = require("./../../services/auth/auth.service");
const router_1 = require("@angular/router");
let AuthComponent = class AuthComponent {
    constructor(translate, fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        translate.setDefaultLang('en');
        translate.use('en');
    }
    ngOnInit() {
        this.createFormGroup();
    }
    createFormGroup() {
        this.authForm = this.fb.group({
            userName: this.fb.control('', [
                forms_1.Validators.required
            ]),
            password: this.fb.control('', [
                forms_1.Validators.required,
                forms_1.Validators.minLength(6)
            ])
        });
    }
    submit() {
        console.log("submit");
        var user = this.authForm.controls['userName'];
        var password = this.authForm.controls['password'];
        var response = this.authService.authenticate(user.value, password.value).subscribe(res => {
            if (res) {
                this.router.navigate(['']);
            }
        });
    }
};
AuthComponent = __decorate([
    core_1.Component({
        selector: 'auth',
        templateUrl: './angular_app/app/components/auth.component/auth.component.html'
    }),
    __metadata("design:paramtypes", [ng2_translate_1.TranslateService,
        forms_1.FormBuilder,
        auth_service_1.AuthenticationService,
        router_1.Router])
], AuthComponent);
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=auth.component.js.map