import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CountrDropMenu } from '../../models/countr-drop-menu';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import {GenderRadioMenu} from '../../models/gender-radio-menu'

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule,NgFor,CommonModule,NgIf],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {
  loginForm: FormGroup;
  countryMenu:CountrDropMenu[]=[{text:"seciniz",value:0},{text:"Turkiye",value:1},{text:"Almanya",value:2},{text:"Fransa",value:3}]
  genderMenu:GenderRadioMenu[]=[{text:"Erkek",value:1},{text:"kadın",value:2}]
  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      userName: fb.control('',[Validators.required,Validators.minLength(4)]), /* FormControl() nesnesi */
      passWord: fb.control('',[Validators.required,Validators.minLength(5)]),
      rememberMe:false,
      countr:0,
      gender:[1]
    })
  }
  
  
  gris(){
    console.log(this.loginForm.value)
    
  }

}
