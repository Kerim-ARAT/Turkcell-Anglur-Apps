import { Component, Type } from '@angular/core';
import { Product, Type1 } from '../../model/product';
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-ng-swich',
  standalone: true,
  imports: [NgSwitchCase,NgSwitch,NgIf],
  templateUrl: './ng-swich.component.html',
  styleUrl: './ng-swich.component.css'
})
export class NgSwichComponent {
  product:Product;
 
  
  kucukSohow(){
    this.product = new Product(1,"Kalem 1",Type1.Small);
  }
  buyukSohow(){
    this.product = new Product(1,"Kalem 1",Type1.Big);
  }
  ortaSohow(){
    this.product = new Product(1,"Kalem 1",Type1.Middle);
  }
  goster =true;
  gizle(){
    this.goster=!this.goster;
  }
  constructor(){
    this.product = new Product(1,"Kalem 1",Type1.Small);
  }
  
}
