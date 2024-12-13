import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-ngfor',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.css'
})
export class NgforComponent {
 names:string[]= ["Ahmed","Mehmet","Kerim"]
 userList:User[]=[];
 
  constructor(){
    this.userList.push(new User(1,"ahmet","ahmet@hotmail.com","Salata"))
    this.userList.push(new User(1,"ahmet2","ahmet2@hotmail.com","Alinazik"))
    this.userList.push(new User(1,"ahmet3","ahmet3@hotmail.com","Tost"))
  }
}
