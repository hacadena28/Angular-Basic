import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
 //personajes: Personaje[]= [];

  nuevo: Personaje = {
    nombre: 'Maestro Rishi',
    poder: 1000,
  };

  // get personajes(): Personaje[]{
  //   return this.dbzService.personajes

  // }
  // agregarNuevoPersonaje(personaje: Personaje) {
    // this.personajes.push(personaje);
  // }
  constructor(){
//this.personajes = this.dbzService.personajes
  }
}
