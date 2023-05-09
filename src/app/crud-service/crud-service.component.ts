
import { Component } from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-crud-service',
  templateUrl: './crud-service.component.html',
  styleUrls: ['./crud-service.component.css']
})
export class CrudServiceComponent {

  idd: any;
  fn:any;
  ln:any;
 allData:any=[];


  constructor(private api:CrudService){

  
  }

  SubmitForm(dt1:any){

    this.api.postLocalData(dt1.value).subscribe((res:any)=>{
      console.log(res)
    })
    this.getFormData()
  }

  getFormData(){
    this.api.getLocalData().subscribe((res:any)=>{
      console.log(res)
     this.allData=res
     console.log(this.allData)
    })
  }

  onDelete(dt2:any){
   this.api.deleteLocalData(dt2.id).subscribe((res:any)=>{
    console.log(res)
   })
   this.getFormData();
  }


  onSideUpdate(dt3:any){
    this.idd=dt3.id;
    this.fn=dt3.fname
    this.ln= dt3.lname

  }

  onMainUpdate(dt4:any){
    this.api.updateLocalData(dt4.value).subscribe((res:any)=>{
      console.log(res)
    })
    this.getFormData();
  }


}
