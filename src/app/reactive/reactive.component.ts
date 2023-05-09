import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

  ngForm:any;
  cources:any=['btech',"bsc"]
  allData:any
  submitted:boolean=false;
  
  constructor(private fb:FormBuilder){
    this.ngForm=this.fb.group({
      name2:["" ,[Validators.required]],
      uname:["", [Validators.required]],
      cource:[""]
    })
  }


  onSubmit(){
    this.submitted=true;


  }

onDelete(){

}

onSideUpdate(){

}

  onMainUpdate(){

  }


}
