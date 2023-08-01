import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.sass']
})
export class LoginRegisterComponent implements OnInit {

  registerUser=new FormGroup({
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      emailId: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
  })


  loginUser=new FormGroup({
    emailId: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  @ViewChild("firstName")
  firstName!: ElementRef;

  @ViewChild("lastName")
  lastName!: ElementRef;

  @ViewChild("emailId")
  emailId!: ElementRef;

  @ViewChild("password")
  password!: ElementRef;

  hideRegister:boolean =false;
  hideLogin:boolean=false;
  data1:any=[]
  data2:any=[]
  responseData:any;

  constructor(private router:Router, private service:ProductserviceService) { }

  ngOnInit(): void {} 

  onRegister(){
    var nameValidate=RegExp("^[A-Za-z]+$");
    var emailValidate = RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$");
    var passValidate = RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");

    if( (this.registerUser.value.emailId!='' && emailValidate.test(this.emailId.nativeElement.value) )
        && (this.registerUser.value.password!='' && passValidate.test(this.password.nativeElement.value) )
        && (this.registerUser.value.firstName!='' && nameValidate.test(this.firstName.nativeElement.value) )
        && (this.registerUser.value.lastName!='' && nameValidate.test(this.lastName.nativeElement.value) )){
        console.log("signed up");
        this.hideRegister=false;
        this.service.registerUser(this.registerUser.value).subscribe((result)=>{
            setTimeout(() => {
              console.log('works')
              this.hideRegister = true;
            }, 2000)
            this.data1=result;
            console.warn(result);
        })
    }
    else{
        console.warn("please fill all data");
    }
  }

  onLogin(){
    if( (this.loginUser.value.emailId!='')
        && (this.loginUser.value.password!='' )){
          this.hideLogin=false;
        this.service.loginUser1(this.loginUser.value).subscribe( (result)=>{
          this.data2=result;
    
          if(result!=null){
            // this.responseData=result;
            // localStorage.setItem('token',this.responseData.jwtToken);
            this.service.setUsername(this.data2.firstName);
            this.router.navigate(['/dashboard']);
          }
          else{
            setTimeout(() => {
              console.log('works')
              this.hideLogin = true;
            }, 2000)
          }
          console.log(result);
      })
    }
    else{
      console.warn("sorry!");
    }
  }
}
