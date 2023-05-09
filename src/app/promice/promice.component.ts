import { Component } from '@angular/core';
import { DataServiceService } from '../servise/data-service.service';

@Component({
  selector: 'app-promice',
  templateUrl: './promice.component.html',
  styleUrls: ['./promice.component.css']
})
export class PromiceComponent {


// obervables are asynchronus or parallel flow of execution which can handle single event at a time
// observable responce ==> 1....2....3....4...5.  
// promise responce ==> 12345


public prm:any

constructor(private api:DataServiceService){
this.getPromiseData();

  this.prm = new Promise (( resolve, reject )=> {

    setTimeout(()=>{
    resolve("promise is resolved/successfully executed");  
    reject ("promice is rejected/not executed");
    }, 4000);
  })


this.prm
.then((res:any)=>{
  console.log(res);
})

.catch((err:any)=>{
  console.log(err)
})

}

getPromiseData(){
  this.api.getPromData()
  .then((res:any)=>{
    console.log(res);
  })
  .catch((err:any)=>{
    console.log(err);
  })
}
}
