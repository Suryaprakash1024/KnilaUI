import { Component } from '@angular/core';
import { User } from '../add-user/add-user.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users:any;
  pageSize = 10;
  currentPage = 1;
  totalItems = 0;
  
  constructor(private appService: AppService) { }


  ngOnInit() {
    this.loadUsers();
  }
  loadUsers(){
    const url = "https://localhost:7295/api/User/GetUser";
    this.appService.getData(url).subscribe(data => {
      this.users = data;
    })
  }
}
