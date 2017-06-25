import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { IProduct } from './product';
import { environment } from 'environments/environment';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})

export class ProductListComponent implements OnInit {

  products: IProduct[];
  errorMessage: string;
  mainUrl: string = environment.mainUrl;
  pageTitle: string = 'Product Management';
  statusCode: number;
  requestProcessing = false;

  constructor(private _productService: ProductService) {

  }

  ngOnInit(): void {
    this._productService.getAllProducts()
      .subscribe(
      data => this.products = data,
      errorCode => this.statusCode = errorCode);
  }


  getAllProducts() {
    this._productService.getAllProducts()
      .subscribe(
      data => this.products = data,
      errorCode => this.statusCode = errorCode);
  }

  // deleteProduct(productId: number) {

  //   if (confirm("Are you sure?")) {
  //     console.log('inside delete ' + productId);

  //   this._productService.deleteProduct(productId)
  //     .subscribe();      
  //   }
  // }

  //Delete article
  deleteProduct(productId: string) {
    if (confirm("Are you sure?")) {
      console.log('inside delete ' + productId);
      this.preProcessConfigurations();
      this._productService.deleteArticleById(productId)
        .subscribe(successCode => {
          this.statusCode = successCode;
          this.getAllProducts();
        },
        errorCode => this.statusCode = errorCode);

    }


  }

  preProcessConfigurations() {
    this.statusCode = null;
    this.requestProcessing = true;
  }
}
