import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

@Input()  personajes: Personaje[]=[
    {
      nombre: "Goku",
      poder: 15000
    },{
      nombre: "Vegeta",
      poder: 10000
    },
  ];
  nuevo: Personaje = {
    nombre: "Maestro Rishi",
    poder: 1000
  }
  
  agregarNuevoPersonaje(personaje : Personaje){
    debugger;

    this.personajes.push(personaje)

  }
}
