import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: string = 'Product Detail: ';
  product: IProduct | undefined;
  sub!: Subscription;

  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `${id}`

    this.sub = this.productService.getProducts().subscribe({
      next: products => {
          this.product = products.find(x => x.productId === id)
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onBack() {
    this.router.navigate(['/products']);
  }
}
