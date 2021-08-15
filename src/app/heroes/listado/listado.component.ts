import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
heroes:String[]=['Spiderman','Ironman','Thor','Hulk'];
borrado:string='';  

borrar(){
    this.borrado= this.heroes.splice(0,1).toString();
 
}
}
