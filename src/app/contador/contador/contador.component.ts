import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>
    <h3>
      La base es: <strong> {{ base }} </strong>
    </h3>
    <button (click)="acumular(+base)">+ {{ base }}</button>
    <span> {{ numero }} </span>
    <button (click)="acumular(-base)">- {{ base }}</button>
  `,
})
export class contadorComponent {
  public titulo: string = 'Contador App';

  public numero: number = 0;
  public base: number = 5;
  acumular(valor: number) {
    this.numero += valor;
  }
}
