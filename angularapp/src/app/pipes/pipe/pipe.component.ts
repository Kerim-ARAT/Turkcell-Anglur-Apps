import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { getActiveConsumer } from '@angular/core/primitives/signals';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  myPrice:number=25001;// Asgari ücret Tahmini aslında hayalettiğim ama 23000 tl olacak gibi bu not da gelecekteki bana vesselam 
  mydate= new Date();
  person1:Person={firstname:"ahmed",lastname:"Yıldız",age:25}
  person2:any={firstname:"Hasan",lastname:"Pala",age:30}
}
interface Person{
  firstname:string;
  lastname:string;
  age:number;
}
