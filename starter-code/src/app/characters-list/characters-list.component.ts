import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  characters: Array<any> = [
    {name: "TheName",
    id: "TheID",
    occupation: "TheOccupation",
    debt: "TheDebt",
    weapon: "TheWeapon"
  }
  ];

  constructor() { }

  ngOnInit() {
  }

  fetchAll () {

  }

  fetchOne (id) {

  }

  deleteOne (id) {

  }

}
