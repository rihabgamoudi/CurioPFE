import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/auth/auth';
import { UsersService } from '../../users.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent  implements OnInit{
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
 id: number=0;
 isEmailDisabled = true;
 isTelephoneDisabled = true;
 isPasswordDisabled=true;
 isPicturDisabled=true;
 constructor(private formBuilder: FormBuilder, private usersService: UsersService, private route:ActivatedRoute) { 
  this.userForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: [{ value:''  ,disabled: this.isEmailDisabled},[Validators.required, Validators.email]],
    telephone:[{ value:''  ,disabled: this.isTelephoneDisabled}, Validators.required],
    picture:[{ value:''  ,disabled: this.isPicturDisabled}],
    password: [{ value:''  ,disabled: this.isPasswordDisabled}, [Validators.required, Validators.minLength(6)]],
    confirmPassword: [{ value:''  ,disabled: this.isPasswordDisabled}, Validators.required],
    role:['',Validators.required],
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
  ngOnInit(): void {
    this.show=false;
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.getUserById(this.id)
    });
   
  }
  getUserById(id:number){
    this.usersService.findUserById(id).subscribe(data=>{
      this.userForm.get('firstName')?.setValue(data.firstName);
      this.userForm.get('lastName')?.setValue(data.lastName);
      this.userForm.get('role')?.setValue(data.role); 
      
    })
  } 
   
  closeAction(){
    this.show=false
  }
  submit(){ 
    this.id
console.log("user",this.userForm.value)
this.usersService.editUserById(this.id,this.userForm.value).subscribe(
  data=>{
this.name= this.userForm.value['name']
this.show=true  
  }
)  }

}
