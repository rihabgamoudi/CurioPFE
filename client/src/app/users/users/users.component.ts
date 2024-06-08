import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/auth/auth';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  data: any;
  number: any; 
  selected: any[] = []; 
  selectedUser:User[]=[]
  list:any
  show=false
  id: number | undefined;

  constructor(private formBuilder: FormBuilder,private usersService:UsersService) {
 
     
  } 
  ngOnInit(): void {
   this.getAllUsers()
  } 
  getAllUsers(){
  this.usersService.getAllUsers().subscribe(data=>{
    console.log('data',data)
    this.data=data[0]
    this.number=data[1]

  })  
}
userSelect(event:any){

 let list = this.selectedUser.map(x=>x.id )
 this.list=list
 this.id=this.selectedUser[0].id
}
 
refresh(event:any)
{
  this.getAllUsers()
  console.log("refresh",event)
}
 
  
  showClick()
  {
    this.show=true
  }
  close(){
    this.show=false
    this.getAllUsers()
  }
  save(){
    this.show=false
    this.getAllUsers()
  } 
  
}
