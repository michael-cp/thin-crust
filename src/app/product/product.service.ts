import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { IProduct } from './product';
import { ISizeNPrice } from './sizenprice';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

const _apiUrl = environment.apiUrl;

@Injectable()
export class ProductService {

    constructor(private _http: Http) { }

    getAllProducts(): Observable<IProduct[]> {
        // console.log('url >> ' + _apiUrl + '/products');
        return this._http.get(_apiUrl + '/products')
            .map((response: Response) => <IProduct[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getProduct(id: number): Observable<IProduct> {
        return this.getAllProducts()
            .map((products: IProduct[]) => products.find(p => p.productId === id));
    }


    // deleteProduct(id:number): Observable<IProduct[]> {
    //     // console.log('url >> ' + _apiUrl + '/products');
    //     return this._http.delete(_apiUrl + '/products/' + id)
    //         .map((response: Response) => <IProduct[]>response.json())
    //         .do(data => console.log('All: ' + JSON.stringify(data)))
    //         .catch(this.handleError);
    // }


    // deleteProduct(id: number): Observable<IProduct> {
    //     let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    //     let cpParams = new URLSearchParams();
    //     cpParams.set('id', id.toString());
    //     let options = new RequestOptions({ headers: cpHeaders, params: cpParams });
    //     return this._http.delete(_apiUrl + '/products/', options)
    //         .map(success => success.status)
    //         .catch(this.handleError);
    // }

    //Delete article	
    deleteArticleById(articleId: string): Observable<number> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let cpParams = new URLSearchParams();
        cpParams.set('id', articleId);
        let options = new RequestOptions({ headers: cpHeaders, params: cpParams });

        console.log('URL> ' + _apiUrl + '/product');
        console.log('options ' + options);

        return this._http.delete(_apiUrl + '/product', options)
            .map(success => success.status)
            .catch(this.handleError);
    }


    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


    getAllSizeNPrice(productId: number): Observable<ISizeNPrice[]> {
        return this._http.get(_apiUrl + '/sizenprices/' + productId)
            .map((response: Response) => <ISizeNPrice[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }


}
