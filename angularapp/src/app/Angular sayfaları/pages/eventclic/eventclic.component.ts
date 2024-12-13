import { Component } from '@angular/core';
import { GnOnchangeHookComponent } from "../gn-onchange-hook/gn-onchange-hook.component";

@Component({
  selector: 'app-eventclic',
  standalone: true,
  imports: [GnOnchangeHookComponent],
  templateUrl: './eventclic.component.html',
  styleUrl: './eventclic.component.css'
})
export class EventclicComponent {
  //one-way binding 
  count=0;
  increaseCound(){
    this.count++;
  }
  clear(){
    this.count=0;
  }
  writeToConsole():void{
    console.log("Clik");
  }
  
  
  

}
