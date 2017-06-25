import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { IUserAccount } from './user-account';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';

const _apiUrl = environment.apiUrl;

@Injectable()
export class UserAccountService {

    constructor(private _http: Http) { }

    getAllUserAccounts(): Observable<IUserAccount[]> {
        return this._http.get(_apiUrl + '/useraccounts')
            .map((response: Response) => <IUserAccount[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getUserAccount(id: number): Observable<IUserAccount> {
        return this.getAllUserAccounts()
            .map((products: IUserAccount[]) => products.find(p => p.userAccountId === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
