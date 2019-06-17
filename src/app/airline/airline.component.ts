import { Component, OnInit } from '@angular/core';
import {User} from "../_model/user";

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.less']
})
export class AirlineComponent implements OnInit {
  users: User[];
  euser: User;

  constructor() { }

  ngOnInit() {
    this.users = [];
    this.users.push(new User('Warling', 'Wu', 'Beijing'));
    this.users.push(new User('Warling', 'Xiao', 'Beijing'));
    this.euser = new User();

  }

  save() {
    this.users.push(this.euser);
    this.euser = new User();
  }

  cancel() {
    this.euser = new User();
  }
}
