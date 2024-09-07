import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-bestseller',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './bestseller.component.html',
  styleUrl: './bestseller.component.scss'
})
export class BestsellerComponent implements OnInit {
  constructor(private _productservice:ProductsService){}
  subscription: any;
  imgDomain: string = '';
  search: string = '';
  products: any[] = []
  ngOnInit(): void {
    this._productservice.getProducts().subscribe((res)=>{
      this.imgDomain = this._productservice.imgDomain;
      this.products =res.data;
      console.log(res.data)
    })
  }
}
