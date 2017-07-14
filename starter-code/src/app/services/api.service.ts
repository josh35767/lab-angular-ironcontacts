import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  baseUrl = "http://ih-api.herokuapp.com"

  constructor(private myHttp: Http) { }


  getList () {
    let endPoint = "/characters"
    return this.myHttp.get(this.baseUrl+endPoint)
      .toPromise()
      .then(result => result.json());
  }

  createNew () {

  }

  editOne () {

  }

  deleteOne () {
    
  }

}
