import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class RegisterService {

  constructor(private http:HttpClient) { }

  getEmployees(){
    return this.http.get('https://http://forms-api.herokuapp.com/');
}
}