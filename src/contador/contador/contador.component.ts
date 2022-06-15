import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    template:`
    <h1>{{title}}</h1>
<p>La base es:{{base}}</p>

<button (click)="acumular(base)">+{{base}}</button>
<span>{{numero}}</span>
<button (click)="acumular(base*-1)">-{{base}}</button>
    `
})
export class Contador{
    public title:string = 'Contador app';
    public numero:number = 0;
  
    public base:number = 5;
  
    acumular(valor:number)
    {
      return this.numero+=valor;
    }
}