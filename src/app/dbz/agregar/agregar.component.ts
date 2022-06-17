import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  constructor(private dbzservice:DbzService){}

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  //@Output() onNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter()

  agregar() {
    if (this.nuevo.nombre !== '') {
      this.dbzservice.agregarPersonaje(this.nuevo);
      this.nuevo={...this.nuevo,nombre:'',poder:0}
    }
  }
}
