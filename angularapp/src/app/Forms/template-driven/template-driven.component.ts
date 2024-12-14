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
  constructor(){
    this.loginMode= {userName:"İsim",passworld:"1234"}
  }
  save(form:NgForm){
    console.log(form.value);
    console.log(this.loginMode)
  }

}
interface loginModel{
  userName:string;
  passworld:string
}
