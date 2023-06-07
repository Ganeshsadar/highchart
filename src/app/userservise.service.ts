import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserserviseService {

  constructor( private http:HttpClient) {


   }
   adddata(data:any){
    return this.http.post('http://localhost:3000/posts',data);
   }
   getdata(){
    return this.http.get('http://localhost:3000/posts');
   }
   deletdata(id:any){
    return this.http.delete(`http://localhost:3000/posts/`+id);
   }

   updatedata(id:any,data:any){
    return this.http.put(`http://localhost:3000/posts/${id}`,data);
   }
}
