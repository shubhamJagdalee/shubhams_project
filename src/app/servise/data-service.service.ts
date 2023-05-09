import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient) { 

   
  }

  // data get from backend

  getData(){
    return this.http.get("https://reqres.in/api/users")
  }

  // data post to the backend


  postData(data:any){
    return this.http.post("https://reqres.in/api/users",data)
  }

  deleteData(data1:any){
   return this.http.delete("https://reqres.in/api/users/"+data1)
  }

  updateData(data2:any){
    return this.http.put("https://reqres.in/api/users/"+data2.data1, data2)
  }




  getPromData(){
    return this.http.get("https://reqres.in/api/users").toPromise();
  }
}
