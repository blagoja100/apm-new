import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { Title } from '@angular/platform-browser';
import { ProductService } from '../product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   
    constructor(private productService: ProductService) {
    }

    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    filteredProducts: IProduct[] = [];
    products: IProduct[] = [];
    errorMessage: string = '';
    sub!: Subscription;

    private _listFilter = '';
    get listFilter(): string {
      return this._listFilter;
    }

    set listFilter(value: string) {
      this._listFilter = value;
      this.filteredProducts = this.filterProducts(this._listFilter);
    }

    ngOnInit(): void {
      this.sub = this.productService.getProducts().subscribe({
        next: products => {
          this.products = products;
          this.filteredProducts = this.products;
        },
        error: error => this.errorMessage = error
      })   
    }

    ngOnDestroy(): void {
      this.sub.unsubscribe();
    }

    toggleImage(): void {
      this.showImage = !this.showImage;
    }

    filterProducts(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => {
          return product.productName.toLocaleLowerCase().includes(filterBy)});
    }

    onRatingClicked(message: string) {
      this.pageTitle = `Product list: ${message}`
    }
}