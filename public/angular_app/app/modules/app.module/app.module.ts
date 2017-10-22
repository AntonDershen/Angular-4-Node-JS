import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }   from './../../components/app.component/app.component';
import { HomeComponent }  from './../../components/home.component/home.component'
import { AuthComponent }  from './../../components/auth.component/auth.component';
import { ErrorComponent } from './../../components/error.component/error.component'

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'Auth', component: AuthComponent},
    { path: '**', component: ErrorComponent}
]

@NgModule({
    imports:      [ 
                    BrowserModule, 
                    FormsModule,
                    RouterModule.forRoot(appRoutes),
                    TranslateModule.forRoot({
                        provide: TranslateLoader,
                        useFactory: (http: Http) => new TranslateStaticLoader(http, 'i18n', '.json'),
                        deps: [Http]
                    })
                  ],
    declarations: [ AppComponent, HomeComponent, AuthComponent, ErrorComponent ],
    bootstrap:    [ AppComponent ],
    providers:    [ ]
})
export class AppModule { }