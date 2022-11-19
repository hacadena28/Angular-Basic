import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent   {
heroes: string[] = ["SpiderMan","IronMan","Hulk","Thor","CapitanAmerica"];
heroeBorrado: string = "";

borrarHeroe(): string{
const heroeBorrado =  this.heroes.pop()||""
this.heroeBorrado = heroeBorrado;
return heroeBorrado?.toString()||"";
}

}
