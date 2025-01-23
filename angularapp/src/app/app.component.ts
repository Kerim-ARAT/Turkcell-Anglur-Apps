import { Component, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateDrivenComponent } from "./Forms/template-driven/template-driven.component";
import { NgClass } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponent } from "./Forms/reactive/reactive.component";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TemplateDrivenComponent, ReactiveFormsModule, ReactiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
  
})



export class AppComponent {
  save(input:string){
    console.log(input);
  }
  title = 'angularapp'; 
}




