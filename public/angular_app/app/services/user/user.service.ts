import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class UserService {
 
    constructor(private http: Http) {
    }
 
    public isUserExists(username: string): Observable<boolean> {
        return this.http.post('/api/user/isUserExists', { username: username }, this.getHeaders())
                        .map(res => {
                            var json = res.json();
                            return json["result"];
                        })
                        .catch((error: any)=> {  
                            return Observable.throw(error);
                        });
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