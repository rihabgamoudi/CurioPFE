import { Component } from '@angular/core';
import { User } from 'src/app/auth/auth';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent {

  data: any;
  number: any;
  id: number=8
  user: User = new User()

  constructor(private usersService:UsersService) {

     
  }
ngOnInit(): void {
  this.id=8
  this.usersService.findUserById(this.id).subscribe(data=>{
    this.user=data

    console.log('data',data)
    this.data=data[0]
    this.number=data[1]

  }) 
}
}
