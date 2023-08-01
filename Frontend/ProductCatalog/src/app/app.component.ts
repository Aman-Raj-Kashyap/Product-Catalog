import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Product Catalog';

  showHeader: boolean= false;

  constructor(private router:Router){
    router.events.forEach((event)=>{
      if(event instanceof NavigationStart){
        if(event['url']=='/'){
          this.showHeader=false;
        }
        else{
          this.showHeader=true;
        }
      }
    });
  }

}
