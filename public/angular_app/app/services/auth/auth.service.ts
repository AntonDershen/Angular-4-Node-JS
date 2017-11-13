import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class AuthenticationService {
    public token: string;
 
    constructor(
                private http: Http,
                private router: Router 
               ) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    
    registration(username: string, password: string): Observable<boolean> {
        return this.http.post('/api/registration', JSON.stringify({ username: username, password: password }), this.getHeaders())
                        .map(res => {
                            var json = res.json();
                            return json["result"];
                        })
                        .catch((error: any)=> {  
                            return Observable.throw(error);
                        });
    }

    authenticate(username: string, password: string): Observable<boolean> {
        return this.http.post('/api/authentificate', JSON.stringify({ username: username, password: password }), this.getHeaders())
            .map((response: Response) => {
                let token = response.json() && response.json().token;
                if (token) {
                    this.token = token;
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                    return true;
                } else {
                    return false;
                }
            })
            .catch((error: any)=> {  
                return Observable.throw(error);
            });;
    }
 
    signOut(): void {
        this.token = null;
        localStorage.removeItem('currentUser');
    }

    private getHeaders()
    {
        var options = new RequestOptions({
            headers: new Headers({
              'Content-Type': 'application/json'
            })
        });

        return options;
    }
}