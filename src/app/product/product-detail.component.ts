import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { IProduct } from './product';
import { ISizeNPrice } from './sizenprice';
import { ProductService } from './product.service';
import { environment } from 'environments/environment';

const _mainUrl = environment.mainUrl;

@Component({
    templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Product Details';
    product: IProduct;
    sizeprices: ISizeNPrice[];
    errorMessage: string;
    private sub: Subscription;
    mainUrl: string = _mainUrl;

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _productService: ProductService) {
    }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                console.log('detail: ' + +params['id']);
                this.getProduct(id);
                this.getAllSizeNPrice(id);
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getProduct(id: number) {
        this._productService.getProduct(id).subscribe(
            products => this.product = products,
            error => this.errorMessage = <any>error);
    }

    getAllSizeNPrice(productId: number) {
        this._productService.getAllSizeNPrice(productId)
            .subscribe(
            data => this.sizeprices = data);
    }

    onBack(): void {
        this._router.navigate(['/home/product']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product Detail: ' + message;
    }
}
