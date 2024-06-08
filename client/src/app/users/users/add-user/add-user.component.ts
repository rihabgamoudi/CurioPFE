import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../users.service';
import { User } from 'src/app/auth/auth';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  
  user=new User()
  userForm: FormGroup;
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
 constructor(private formBuilder: FormBuilder, private usersService: UsersService) { 
  this.userForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    telephone:['', Validators.required],
    picture:[''],
    password: ['', [Validators.required, Validators.minLength(6)]],
    role:['',Validators.required],
    confirmPassword: ['', Validators.required]
  }, { validator: this.passwordMatchValidator });
}

passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
  const password = group.get('password')?.value;
  const confirmPassword = group.get('confirmPassword')?.value;
  console.log("password", password);
  return password === confirmPassword ? null : { mismatch: true };
}

  
  ngOnInit(): void {
    this.show=false;
  }
   
  closeAction(){
    this.show=false
  } 
  submit(){ 
    console.log("pawordvalid", this.passwordMatchValidator)
     console.log('name',  this.user.firstName=String(this.userForm.get('firstName')?.value))
    console.log('email',  this.user.email=String(this.userForm.get('email')?.value))
    console.log('password',  this.user.password=String(this.userForm.get('password')?.value))
    console.log('confirmPassword',  this.user.password=String(this.userForm.get('confirmPassword')?.value))
       this.user.role=String(this.userForm.get('role')?.value)
      this.user.firstName=String(this.userForm.get('firstName')?.value)
      this.user.email=String(this.userForm.get('email')?.value)
      this.user.password=String(this.userForm.get('password')?.value)
      this.user.confirmPassword=String(this.userForm.get('confirmPassword')?.value)
      
console.log("user",this.userForm.value)
    this.usersService.addUser(this.userForm.value).subscribe(
      data=>{
this.name= this.userForm.value['name']
this.show=true  
      }
    )  
  }
  reset(){
    this.disabled=false;
    this.user= new User()
    this.userForm.reset()
    this.show=false 
  }

}
