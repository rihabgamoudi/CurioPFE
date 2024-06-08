import { Component } from '@angular/core';
import { User } from '../auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import AuthService from '../auth.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent {
  user=new User()
  authForm: FormGroup;
  filename: string='';
  filesize: number=0;
  tailleInvalid: boolean=false;
  private _handleReaderLoaded: any; 
  error: any;
  show: boolean=false;
  showError: boolean=false;
  message: any;
 name:any
 disabled: boolean=false;
 register:User=new User
 
 
  constructor(private formBuilder: FormBuilder, private authService: AuthService) { 
    this.authForm = this.formBuilder.group({
      name: ['', Validators.required],
      role:['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    })
     {
      validator: this.passwordMatchValidator
    }
 
  }
  passwordMatchValidator(group: FormGroup) {
    
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }
    
 ngOnInit():void { 
  
  this.show=false
  }
  Onsubmit() {
  
//     console.log("accesoire",this.accessoireForm.value)
//     this.productsService.addAccessoire(this.accessoireForm.value).subscribe(
//       data=>{
// this.name= this.accessoireForm.value['name']
// this.show=true  
//       }
//     )  }
    
    // console.log('name',  this.user.name=String(this.authForm.get('name')?.value))
    // console.log('email',  this.user.email=String(this.authForm.get('email')?.value))
    // console.log('password',  this.user.password=String(this.authForm.get('password')?.value))
     
    // if(this.authForm.valid ){
    //   // console.log('auth',this.authForm.valid)
    //   // this.user.role=String(this.authForm.get('role')?.value)
    //   // this.user.name=String(this.authForm.get('name')?.value)
    //   // this.user.email=String(this.authForm.get('email')?.value)
    //   // this.user.password=String(this.authForm.get('password')?.value)
      
    //   // console.log("auth",this.authForm.value)
    //   this.authService.register(this.user).subscribe(data=>{
    //     console.log('User registered successfully:', data);
    //       this.show = true;
    //       this.message="I'm pleased to inform you that the user account for",this.user.name,"has been successfully created."
    //     },
    //     error => {
    //       this.showError=true
    //        this.message="Unfortunately, I encountered an error while attempting to create the user account for",this.user.name
    //     }
    //   );
    // }
  }
        // this.name= this.authForm.value['name']
  //     this.show=true
 
  //    this.message="I'm pleased to inform you that the user account for",this.user.name,"has been successfully created."


  //     },error=>{
  //    this.showError=true
  //  this.message="Unfortunately, I encountered an error while attempting to create the user account for",this.user.name
  //     })
       
  //   }
    

  //     }
   onClose(){
    this.show=false
   }
  
}
