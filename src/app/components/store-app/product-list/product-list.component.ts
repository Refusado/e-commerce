import { Component, OnInit } from '@angular/core';
import { DummyJSON } from './model/DummyJSON';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any;
  productService: ProductListService;

  constructor( productService: ProductListService ) {
    this.productService = productService;
  }

  ngOnInit(): void {

    this.products = this.productService.getProduct().subscribe((data: any): void => {
      
      this.products = data.products;
      console.log(this.products);

    })

  }

}
