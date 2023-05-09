import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  //<!-- *ngIf -->
flag:boolean=true
age:number=16
name=" structural directive *ngIf"

//<!-- *ngFor -->
district=['pune','nagar','mumbai','nagpur']

//<!-- *ngSwitch -->
color= "green"

// ngClasss & ngStyle

testClass1:any="test1";
testClass2:any;
showFlag:boolean=true;

style1: any= {'color':'aqua'}
style2: any = {'color':'black'}
style3: any 

constructor(){

  if(this.showFlag){
    this.testClass2="test2"
  }else{
    this.testClass2="test3"
  }


  if(this.showFlag){
    this.style3 = {"color":"green"}
   }else{
       this.style3 = {"color":"red"}
  }

}





}



//

