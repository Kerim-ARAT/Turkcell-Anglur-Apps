import { Component, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
  
})



export class AppComponent {
  save(input:string){
    console.log(input);
  }
  title = 'angularapp'; 
}




