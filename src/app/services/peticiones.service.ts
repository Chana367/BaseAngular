import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  constructor(private httpClient: HttpClient) { }
  
  getPosts(){
    // https://jsonplaceholder.typicode.com/posts
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts")
  }


}
