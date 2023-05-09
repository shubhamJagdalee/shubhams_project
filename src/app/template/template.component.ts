import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  allData:any=[];
  idd:any;
  count:number=1;
  showFlag:boolean=false;
  nm:any
  gd:any
  
 
  onSubmit(data:any){
    
     this.showFlag=true;
     if(data.value.id==undefined){
      data.value.id=this.count;
    this.allData.push(data.value);
    console.log(this.allData);
    data.reset();
     }this.count++;

    //  if(this.allData.gender.value = data.gender.value.male){
    //   this.nm = data.gender

    //  }
    
    }    
  

  onDelete(data:any){
    this.allData.forEach((element:any,index:any) => {
      if(element.id==data.id){
       this.allData.splice(index,1)
      }
    });
  
  }

  onSideUpdate(data:any){
    this.idd=data.id;
    this.nm=data.name2;
    this.gd=data.gender;
   
   
  }

  onMainUpdate(dt:any){
      this.allData.forEach((element:any)=>{
        if(element.id == dt.value.id){
          element.name2 = dt.value.name2
          element.gender=dt.value.gender

          dt.reset();
        }
      })

  }
}

// <!-- name1-lable name, name2- input name , name3- for validations -->

