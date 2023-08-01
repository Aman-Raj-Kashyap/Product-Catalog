import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.sass']
})
export class SearchProductsComponent implements OnInit {

  searchProducts= new FormGroup({
    productCode:new FormControl(''),
    name:new FormControl(''),
    brand:new FormControl('')
  })

  constructor(private router:Router, private service:ProductserviceService) { }

  ngOnInit(): void {
  }

  onSearch(){
      if(this.searchProducts.value.productCode!='' && this.searchProducts.value.name!=''
         && this.searchProducts.value.brand!=''){
            console.log("abc1");
            this.service.seachProducts(this.searchProducts.value).subscribe((result)=>{
                
                  console.log(result);
                  this.router.navigate(['/products']);
                  this.service.setMessage(result);
                
        })
        
      }
      else{
        console.log("Please enter data");
      }
  }

}
