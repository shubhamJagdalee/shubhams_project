import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent {


data:any

  constructor(private act:ActivatedRoute ){
    //param
   console.log(this.act.snapshot.params['id'])

   //paramMap
   console.log(this.act.paramMap.subscribe((res:any)=>{
    this.data=res;
    console.log(this.data.params.name)
   }))
  }
}
