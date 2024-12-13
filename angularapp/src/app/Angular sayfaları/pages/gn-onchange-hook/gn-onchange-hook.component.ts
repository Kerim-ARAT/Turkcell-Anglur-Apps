import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-gn-onchange-hook',
  standalone: true,
  imports: [],
  templateUrl: './gn-onchange-hook.component.html',
  styleUrl: './gn-onchange-hook.component.css'
})
export class GnOnchangeHookComponent implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

  }
  @Input() cound:number| undefined;
  

}
