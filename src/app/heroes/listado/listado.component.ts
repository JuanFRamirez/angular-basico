import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  constructor() { 

  }

  heroes:Array<string>=['Spiderman','Ironman','Hulk','Thor'];
  heroesBorrados:Array<string>=[];

  borrarHeroe():void{
    let heroeBorrado = this.heroes.pop();
    if(heroeBorrado)
    {
      this.heroesBorrados.push(heroeBorrado);
      console.log(this.heroesBorrados)
    }
  }

}
