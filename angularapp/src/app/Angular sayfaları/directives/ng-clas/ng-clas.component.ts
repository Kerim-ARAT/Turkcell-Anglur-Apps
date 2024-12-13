import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-ng-clas',
  standalone: true,
  imports: [NgClass,FormsModule],
  templateUrl: './ng-clas.component.html',
  styleUrl: './ng-clas.component.css'
})
export class NgClasComponent {
  name:string="ahmed";
  isLarge=true;
  isRedBox=true;
  isBorder=true;
  css:any={large:true,redBox:true,blueBorder:true}
  appleCss(){
    this.isLarge=!this.isLarge;
    this.isBorder=!this.isBorder;
    this.isRedBox=!this.isRedBox;
  }
  
  

}
