import { Component } from '@angular/core';
import { User } from '../auth';
import { UsersService } from 'src/app/users/users.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  data: any;
  number: any;
  id: number=2
  user: User = new User()

  constructor(private usersService:UsersService) {

     
  }
ngOnInit(): void {
  this.id=2
  this.usersService.findUserById(this.id).subscribe(data=>{
    this.user=data

    console.log('data',data)
    this.data=data[0]
    this.number=data[1]

  }) 
}}
