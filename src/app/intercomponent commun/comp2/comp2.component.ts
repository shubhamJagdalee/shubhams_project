import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {


// 2


  @Output() event:any=new EventEmitter <any> 

  dataToSend:any= "data from child on button click"

  outputMethod(){

  this.event.emit(this.dataToSend)

}
}
