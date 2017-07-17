import { Component, OnInit } from '@angular/core';
import { CharacterServiceService } from '../character-service.service';


@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
  providers: [CharacterServiceService]
})
export class CharactersListComponent implements OnInit {
  colors = "good";

  characters: Array<any> = [
    {name: "TheName",
    id: "TheID",
    occupation: "TheOccupation",
    debt: "TheDebt",
    weapon: "TheWeapon"
  }
  ];

  constructor(private character: CharacterServiceService) { }

  ngOnInit() {
  }

  fetchAll () {
    
    this.character.getAll().subscribe((characterArray) => {this.characters = characterArray})
  }

  fetchOne (id) {
    this.character.getOne(id).subscribe((oneCharacter) => {
      this.characters = [];
      this.characters.push(oneCharacter)
    })
  }

  deleteOne (id) {
    this.character.deleteOne(id).subscribe((deletedCharacter) => {
      console.log("Deleted "+deletedCharacter);
    })
  }

}
