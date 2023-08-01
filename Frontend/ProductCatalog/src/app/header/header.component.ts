import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  username:any;
  constructor(private service: ProductserviceService) { }

  ngOnInit(): void {
    this.username=this.service.getUsername();
  }

}
