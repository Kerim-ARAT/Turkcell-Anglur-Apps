import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {
  loginForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      userName: '', /* FormControl() nesnesi */
      passWord: '',
      rememberMe:false
    })
  }
  gris(){
    console.log(this.loginForm.value)
    
  }

}
