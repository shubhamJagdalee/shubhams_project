import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

value:number= 2 ;
text ="shubham";
birthday :number = 15/1/1980 ;
date:any= Date();


name:any ={
  user:'shubham',
  password:'shubh'

}
}
