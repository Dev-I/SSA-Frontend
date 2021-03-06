import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { User } from 'src/app/models/User';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  users: User | any = [];

  constructor(private usersService: UsersService, private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 800);
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe(
      res => {
        this.users = res[0];
      },
      err => console.log(err)
    );
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id).subscribe(
      res => {
        console.log(res);
        this.getUsers();
      },
      err => console.log(err)
    );
  }
}
