import { Component, OnInit } from '@angular/core';
import { Login, User } from '../auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import AuthService from '../auth.service';
import { tokenFactory } from '@clr/angular/utils/conditional/if-active.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user=new User()
  authForm: FormGroup 
  filename: string='';
  filesize: number=0;
  tailleInvalid: boolean=false;
  show: boolean=false;
  message: any;
  showError: boolean=false;
  data:any
  number: any;
  disabled: boolean=false;
  loginUser:Login= new Login()
 
   constructor(private formBuilder: FormBuilder,private authService: AuthService, private router:Router) { 


    this.authForm = this.formBuilder.group({
    
      email: ["",Validators.required,Validators.email],
      password: ["",Validators.required ,Validators.minLength(6), Validators.maxLength(20)],
      rememberMe: [""],    
      // role: [""],
      // email: [""],
      // password: [""],
      // rememberMe: [""],
  
    });
    
  }  
  ngOnInit(): void {
    
   
  }
  login(){
    this.loginUser.email=this.authForm.value?.email
    this.loginUser.password=this.authForm.value?.password
    console.log('usere',this.loginUser)
    this.authService.loginUser(this.loginUser).subscribe(data=>{
      console.log(data)
      if (data.role=="admin"){this.StoreCredentials(data)
        this.router.navigateByUrl('/dashboard')
    }
    else{
       this.showError=true

       this.message=" you are not superUser"
    }
      
      // document.cookie = "token=" + data.access_token + ";  Max-Age=" +  data.expiresIn + "; path=/";
    

    })}
   
    
    StoreCredentials(user:any){ 
      localStorage.setItem('token',user?.access_token)
      localStorage.setItem('id',user?.userId)
      document.cookie = "token=" + user.access_token + ";  Max-Age=" + user.expiresIn + "; path=/"; 
      // localStorage.setItem('email',user.user.email)  







// if (user.token ){
 
// }
//  if (user.user.UserId){


//  }
//  if (user.user.email){

//  }
//  if (user.user.password){


//  }
  // Onsubmit() {
      
          // }
          //  onClose(){
          //   this.show=false
          //  }
          
    
}
}
