import { Component, OnInit } from '@angular/core';
import { CharacterServiceService } from '../character-service.service';

@Component({
  selector: 'app-characters-forms',
  templateUrl: './characters-forms.component.html',
  styleUrls: ['./characters-forms.component.css'],
  providers: [CharacterServiceService]
})
export class CharactersFormsComponent implements OnInit {
  success: string;

  characterToCreate = {};

  characterToEdit = {};
  editId: string;

  constructor(private character: CharacterServiceService) { }

  ngOnInit() {
  }

  createNew(){
    this.character.newOne(this.characterToCreate)
      .subscribe((newCharacter) =>
        {console.log(newCharacter)})
        this.success = "good";
  }

  editOne(){
    this.character.updateOne(this.editId, this.characterToEdit)
      .subscribe((newCharacter) =>
        {console.log(newCharacter)})
  }

}
