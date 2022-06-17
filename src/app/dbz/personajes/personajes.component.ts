import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent{

  get personajes():Array<Personaje>{
    return this.dbzservice.personajes
  }

  constructor(private dbzservice:DbzService){}

}
