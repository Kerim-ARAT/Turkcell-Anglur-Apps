import { Component, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipeComponent } from "./pipes/pipe/pipe.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PipeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
  
})




export class AppComponent {
  title = 'angularapp'; 
}




