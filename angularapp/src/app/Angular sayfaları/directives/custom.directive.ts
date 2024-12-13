import { Directive, ElementRef } from '@angular/core';
import { eventListeners } from '@popperjs/core';

@Directive({
  selector: '[appCustom]',
  standalone: true,
})
export class CustomDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.backgroundColor='yellow';
    console.log("çalıştı");
    
  }

}
