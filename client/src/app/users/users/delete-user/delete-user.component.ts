import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from 'src/app/products/products.service';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  constructor(private usersService:UsersService) { }
  @Input() 
  listUser:any
  @Output()
  closed= new EventEmitter<boolean>()
  @Output() saved= new EventEmitter<boolean>()
  ngOnInit(): void {
    
  }
  actionClose()
  {this.closed.emit(true) }
  deleteConfirm(){
    this.usersService.deleteUser(this.listUser
    ).subscribe(
      res => {
        console.log("deleteCategory",res)
        this.saved.emit(true);
      }   

    ); 
}
} 
 