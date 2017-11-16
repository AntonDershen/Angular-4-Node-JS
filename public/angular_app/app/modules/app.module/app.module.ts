import { NgModule }      from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard} from './../../guards/auth/auth.guards'
import { UserService } from './../../services/user/user.service';
import { AuthenticationService } from './../../services/auth/auth.service';
import { LanguageService } from './../../services/language/language.service';
import { MessageService } from './../../services/message/message.service';

import { AppComponent }   from './../../components/app.component/app.component';
import { HomeComponent }  from './../../components/home.component/home.component'
import { AuthComponent }  from './../../components/auth.component/auth.component';
import { RegistrationComponent } from './../../components/registration.component/registration.component';
import { ErrorComponent } from './../../components/error.component/error.component';
import { MessageComponent } from './../../components/message.component/message.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'Auth', component: AuthComponent},
    { path: 'Registration', component: RegistrationComponent},
    { path: '**', component: ErrorComponent}
]

@NgModule({
    imports:      [ 
                    BrowserModule, 
                    FormsModule,
                    ReactiveFormsModule,
                    RouterModule.forRoot(appRoutes),
                    TranslateModule.forRoot({
                        provide: TranslateLoader,
                        useFactory: (http: Http) => new TranslateStaticLoader(http, 'i18n', '.json'),
                        deps: [Http]
                    })
                  ],
    declarations: [ AppComponent, HomeComponent, AuthComponent, ErrorComponent, RegistrationComponent, MessageComponent ],
    bootstrap:    [ AppComponent ],
    providers:    [ AuthGuard, UserService, AuthenticationService, LanguageService, MessageService, Title ]
})
export class AppModule { }