"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/http");
const ng2_translate_1 = require("ng2-translate");
const router_1 = require("@angular/router");
const auth_guards_1 = require("./../../guards/auth/auth.guards");
const user_service_1 = require("./../../services/user/user.service");
const auth_service_1 = require("./../../services/auth/auth.service");
const app_component_1 = require("./../../components/app.component/app.component");
const home_component_1 = require("./../../components/home.component/home.component");
const auth_component_1 = require("./../../components/auth.component/auth.component");
const registration_component_1 = require("./../../components/registration.component/registration.component");
const error_component_1 = require("./../../components/error.component/error.component");
const appRoutes = [
    { path: '', component: home_component_1.HomeComponent, canActivate: [auth_guards_1.AuthGuard] },
    { path: 'Auth', component: auth_component_1.AuthComponent },
    { path: 'Registration', component: registration_component_1.RegistrationComponent },
    { path: '**', component: error_component_1.ErrorComponent }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule.forRoot(appRoutes),
            ng2_translate_1.TranslateModule.forRoot({
                provide: ng2_translate_1.TranslateLoader,
                useFactory: (http) => new ng2_translate_1.TranslateStaticLoader(http, 'i18n', '.json'),
                deps: [http_1.Http]
            })
        ],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, auth_component_1.AuthComponent, error_component_1.ErrorComponent, registration_component_1.RegistrationComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [auth_guards_1.AuthGuard, user_service_1.UserService, auth_service_1.AuthenticationService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map