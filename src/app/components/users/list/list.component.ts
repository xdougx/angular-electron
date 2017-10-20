import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor() { }

  elements = ['Aqui é o meu Elemento monstrão']

  ngOnInit() {

  }

}
