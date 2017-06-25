import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ProductComponent, ProductListComponent, ProductService, ProductDetailComponent, ProductDetailGuard } from './index';
import { EllipsisPipe } from '../pipe/custom.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule
    ],
    declarations: [
        ProductListComponent,
        ProductComponent,
        EllipsisPipe,
        ProductDetailComponent
    ],
    providers: [
        ProductService,
        ProductDetailGuard
    ]
})
export class ProductModule { }
