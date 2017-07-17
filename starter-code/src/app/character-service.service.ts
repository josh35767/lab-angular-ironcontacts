import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CharacterServiceService {


  constructor(private http: Http) { }

  getAll() {
    return this.http.get('http://ih-api.herokuapp.com/characters')
        .map((res: Response) => res.json());
  }

  getOne(userId) {
    return this.http.get('http://ih-api .herokuapp.com/characters/'+userId)
        .map((res: Response) => res.json());
  }

  newOne(newCharacter) {
    return this.http.post('http://ih-api.herokuapp.com/characters', newCharacter)
      .map((res: Response) => res.json());
  }

  updateOne(id, newCharacter) {
    return this.http.put('http://ih-api.herokuapp.com/characters/'+id, newCharacter)
      .map((res: Response) => res.json());
  }

  deleteOne(id) {
    return this.http.delete('http://ih-api.herokuapp.com/characters/'+id)
      .map((res: Response) => res.json());
  }


}
