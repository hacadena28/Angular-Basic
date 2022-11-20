import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent
  ],
  exports:[
    MainPageComponent,
    //No se exporta por que se utiliza internamente || PersonajesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
