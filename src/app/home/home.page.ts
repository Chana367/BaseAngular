import { Component } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  booleanoHola= true;
  posts=[{"nombre": "Fran", "Likes":20}, {"nombre": "Sonia", "Likes":4000} ]
  constructor(private peticionesHtpp: PeticionesService) {
    this.prueba();
  }

  prueba(){
    this.peticionesHtpp.getPosts().subscribe((posts: any[]) =>{
         for(let i=0; i<posts.length;i++){
      console.log(posts[i].title);
    }
   });

}
}
