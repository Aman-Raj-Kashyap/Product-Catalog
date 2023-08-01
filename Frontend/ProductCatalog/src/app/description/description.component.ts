import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.sass']
})
export class DescriptionComponent implements OnInit {
  data: any=[];
  id: any;

  productData:any=[];
  pinCode:any=[];
  
  starRating=0;
  expectedDate="";

  constructor(private service: ProductserviceService, private acrouter:ActivatedRoute) { }


  ngOnInit(): void {
    this.data=this.service.getMessage();
    this.id=this.acrouter.snapshot.params['id'];

    this.service.listProducts(this.data,this.id).subscribe((result)=>{
      console.log(result);
      this.productData=result;

      this.starRating=this.productData.rating;
    })
  }

  checkPincode(){
    var pin = ((document.getElementById("pincode") as HTMLInputElement).value);
    var pincodes:any=this.productData.pincode;
    var result=pincodes.split(",");

    if(pin!='' && /^\d{6}$/.test(pin)){
      for(var i=0;i<result.length;i++){
          if(result[i]==pin){
            
            this.service.getPincode(pin,this.id).subscribe((res)=>{
                console.log(res);
                this.expectedDate="Delivery by "+res;
            })
            break;
          }
          else{
            this.expectedDate="Not deliverable at "+pin;
          }
      }
    }else{
      this.expectedDate="Please enter valid pincode";
    }

  }



}
