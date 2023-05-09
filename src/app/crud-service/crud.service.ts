import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {


  constructor(private http:HttpClient) {



   }

   postLocalData(data1:any){
   
    return this.http.post("http://localhost:3000/posts",data1)

   }

   getLocalData(){
    return this.http.get("http://localhost:3000/posts")
   }

   deleteLocalData(id:any){
   return this.http.delete("http://localhost:3000/posts/"+id)
   }

   updateLocalData(data2:any){
    return this.http.put("http://localhost:3000/posts/"+data2.id,data2)
   }
  
}
