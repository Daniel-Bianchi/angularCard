import { Component } from '@angular/core';
import { User } from '../models/user';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  user : User = {
    picture : "assets/starstrek.jpg",
    name : "Gandalf",
    age : 5854,
    quote : "Use the Force Harry !",
    hide : true
  }

  constructor() { }

  showAge() : void {
    this.user.hide = !this.user.hide;
  }


}
