import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, NgForm, NgModel } from '@angular/forms';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [FormsModule,NgFor,CommonModule,NgClass,NgIf],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {
  
  loginMode:loginModel;
  genderMenu:genderRadioMenu[]=[{text:"Erkek",value:1},{text:"kadın",value:2}]
  countryMenu:countryDropMenu[]=[{text:"seciniz",value:0},{text:"Turkiye",value:1},{text:"Almanya",value:2},{text:"Fransa",value:3}]
  /* loginmodel2:loginModeC; */
  constructor(){
    this.loginMode= {userName:"",passworld:"",rememberME:false,country:0,gender:1}
    /* class ilee örnek */
    /* this.loginmodel2=new  lo[ginModeC(); */
  }
  

  save(form:NgForm){
    console.log(form.value);
    /* console.log(this.loginMode)  */                             
  }
  countryChange(value:any){
    console.log("Contrchange",value)
  }
  gender(value2:any){
    console.log("gender value",value2)

  }
  selectManuel(value:any){
    console.log(value)

  }

}

interface countryDropMenu{
  text:string
  value:number
}

interface genderRadioMenu{
  text:string
  value:number
}


interface loginModel{
  userName:string
  passworld:string
  rememberME:boolean
  country:number
  gender:number

}
/* class ilee örnek */
class loginModeC{
  userName?:string
  passworld?:string
  rememberME?:boolean
 /*  constructor(userName:string,pasword:string,rememberME:boolean){
    this.userName=userName;
    this.passworld=pasword;
    this.rememberME=rememberME

  } */
}

