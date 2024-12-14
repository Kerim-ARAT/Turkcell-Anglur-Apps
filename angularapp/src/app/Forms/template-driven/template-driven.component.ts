import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {
  loginMode:loginModel;
  /* loginmodel2:loginModeC; */
  constructor(){
    this.loginMode= {userName:"",passworld:"",rememberME:false,country:0}
    /* class ilee örnek */
    /* this.loginmodel2=new loginModeC(); */
  }
  save(form:NgForm){
    console.log(form.value);
    console.log(this.loginMode)                              
  }

}
interface loginModel{
  userName:string
  passworld:string
  rememberME:boolean
  country:number

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

