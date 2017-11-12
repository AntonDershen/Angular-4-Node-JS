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
const ng2_translate_1 = require("ng2-translate");
const auth_service_1 = require("./../../services/auth/auth.service");
const router_1 = require("@angular/router");
let HomeComponent = class HomeComponent {
    constructor(translate, authService, router) {
        this.authService = authService;
        this.router = router;
        translate.setDefaultLang('en');
        translate.use('en');
    }
    submit() {
        this.authService.signOut();
        this.router.navigate(['/Auth']);
    }
};
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: './angular_app/app/components/home.component/home.component.html'
    }),
    __metadata("design:paramtypes", [ng2_translate_1.TranslateService,
        auth_service_1.AuthenticationService,
        router_1.Router])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map