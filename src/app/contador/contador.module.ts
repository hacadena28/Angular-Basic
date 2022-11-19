import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { contadorComponent } from "./contador/contador.component";
@NgModule({
    declarations:[
        contadorComponent
    ],
    exports:[
        contadorComponent
    ],
    imports:[
    ],

})
export class ContadorModule{

}