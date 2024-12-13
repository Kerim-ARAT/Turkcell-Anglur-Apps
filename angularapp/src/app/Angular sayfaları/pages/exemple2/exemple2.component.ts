import { Component } from '@angular/core';

@Component({
  selector: 'app-exemple2',
  standalone: true,
  imports: [],
  template: `<h1> ikinci companetns</h1>
  <p>{{email}}</p>`,
  styles:[`.h1{color:red}`] 
})
export class Exemple2Component {
  email:string="ahmet@gmail.com";

}
