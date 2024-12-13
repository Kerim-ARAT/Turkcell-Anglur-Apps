import { Component, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateDrivenComponent } from "./Forms/template-driven/template-driven.component";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TemplateDrivenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
  
})



export class AppComponent {
  save(input:string){
    console.log(input);
  }
  title = 'angularapp'; 
}




