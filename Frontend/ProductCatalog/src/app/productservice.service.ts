import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  message:any=[];
  url="http://localhost:8082/";
  username:any;

  constructor(private http:HttpClient) { }

  registerUser(data:any){
    return this.http.post(`${this.url}`+"register",data);
  }

  loginUser1(data:any){
    return this.http.post(`${this.url}`+"login",data);
  }

  seachProducts(data:any){
    return this.http.post(`${this.url}`+"products",data);
  }

  listProducts(data:any,id:any){
    // console.log(`${this.url}`+"products/"+`${id}`,data);
    return this.http.post(`${this.url}`+"products/"+`${id}`,data);
  }

  getPincode(data:any,id:any){
    return this.http.post(`${this.url}`+"pincode/"+`${id}`,data,{responseType: 'text'});
  }

  setMessage(data:any){
    this.message=data;
  }
  getMessage(){
    return this.message;
  }


  setUsername(data:any){
    this.username=data;
  }
  getUsername(){
    return this.username;
  }
}
