import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountrDropMenu } from '../../models/countr-drop-menu';
import { CommonModule, NgFor } from '@angular/common';
import {GenderRadioMenu} from '../../models/gender-radio-menu'

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule,NgFor,CommonModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {
  loginForm: FormGroup;
  countryMenu:CountrDropMenu[]=[{text:"seciniz",value:0},{text:"Turkiye",value:1},{text:"Almanya",value:2},{text:"Fransa",value:3}]
  genderMenu:GenderRadioMenu[]=[{text:"Erkek",value:1},{text:"kadın",value:2}]
  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      userName: '', /* FormControl() nesnesi */
      passWord: '',
      rememberMe:false,
      countr:0,
      gender:[1]
    })
  }
  
  
  gris(){
    console.log(this.loginForm.value)
    
  }

}
