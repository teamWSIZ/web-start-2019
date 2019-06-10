import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.less']
})
export class TicTacToeComponent implements OnInit {
  game_title : string;
  game_status: string;


  constructor() { }

  ngOnInit() {
    this.game_title = 'The Tic Tac Toe';
    this.game_status = 'Stopped';
  }

  start_game() {
    this.game_status = 'Started';
  }




}
