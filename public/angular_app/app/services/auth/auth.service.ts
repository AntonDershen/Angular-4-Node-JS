import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthenticationService {
    public token: string;
 
    constructor(private http: Http) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    
    registration(username: string, password: string): Observable<boolean> {
        return this.http.post('/api/registration', JSON.stringify({ username: username, password: password }), this.getHeaders())
                        .map(res => {
                            var json = res.json();
                            return json["result"];
                        })
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
            });
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