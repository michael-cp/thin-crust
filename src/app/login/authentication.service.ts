import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { UserAccount } from './user-account.model';
import { environment } from 'environments/environment';

const _apiUrl = environment.apiUrl;

@Injectable()
export class AuthenticationService {

    constructor(private http: Http) { }

    login(user: UserAccount) {
        return this.http.post(_apiUrl + '/auth', user)
            .map(
            (response: Response) => {
                console.log('auth response' + response);
                return response.json();
            }
            );

    }

}