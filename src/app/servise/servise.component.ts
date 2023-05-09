import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-servise',
  templateUrl: './servise.component.html',
  styleUrls: ['./servise.component.css']
})
export class ServiseComponent {

  allData1:any
  
  formData:any
  

  constructor(private api:DataServiceService){

    this.getApiData()
    this.SubmitForm()
    this.onUpdate()
    
  }

// get data from backend

  getApiData(){
    this.api.getData().subscribe((res:any)=>{
      console.log(res.data);
      this.allData1= res.data
  })
  }

//posting temporary backend data
  SubmitForm(){

    this.formData={
     "name":"shunham",
     "surname":"jagdale"
    }
   
    this.api.postData(this.formData).subscribe((res:any)=>{
     console.log(res);
  
    })
  }


//   postApiData(data:any){
//  this.api.postData(data).subscribe((res:any)=>{
//   console.log(res.data);
//   this.allData2 = res.data
//  })
//   }

onDelete(data1:any){
  this.api.deleteData(data1).subscribe((res:any)=>{
    console.log(res);
  })
}

onUpdate(){
this.formData.name = " Shivam "

  this.api.updateData(this.formData).subscribe((res:any)=>{
    console.log(res);
    
  })
}

}
