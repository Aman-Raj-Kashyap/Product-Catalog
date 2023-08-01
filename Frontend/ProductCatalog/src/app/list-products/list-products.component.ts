import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.sass']
})
export class ListProductsComponent implements OnInit {
  collection: any=[];
  finalData:any =[];
  finalResult: any=[];
  result:any=[];
  brands:any=[];

  priceFilter:any=new FormGroup({
    minPrice:new FormControl(''),
    maxPrice:new FormControl(''),
    productBrand: new FormControl('')
  })

  constructor(private service:ProductserviceService) { }

  ngOnInit(): void {
    console.log(this.service.getMessage());
    this.collection=this.service.getMessage();

    this.finalData= this.collection;

    for(const item in this.finalData){
      console.log(this.collection[item].price);
      if(!this.brands.includes(this.collection[item].brand)){
        this.brands.push(this.collection[item].brand);
      }      
    }

    // this.finalData=this.data;
  }

  onFilter(){
    this.collection=[]
    this.finalResult=[]
    this.brands=[]
    this.result=[]

    for(let item in this.finalData){
      if(parseInt(this.priceFilter.value.minPrice) <= parseInt(this.priceFilter.value.maxPrice)){
        if( (this.finalData[item].price >= parseInt(this.priceFilter.value.minPrice)) &&
             (this.finalData[item].price <= parseInt(this.priceFilter.value.maxPrice)) ){
              console.log(this.finalData[item])
                this.result.push(this.finalData[item]);
             }
      }

      this.collection=this.result;
      for(let item in this.result){
        if(!this.brands.includes(this.result[item].brand)){
          this.brands.push(this.result[item].brand);
        }
      }
    }

    //filter after price
    for(let item in this.result){
      if(this.result[item].brand === this.priceFilter.value.productBrand){
        this.finalResult.push(this.result[item]);
        this.collection=this.finalResult;
      }
    }

  }


}
