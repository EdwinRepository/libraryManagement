import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { UserService } from "../user.service";
import { User } from "../user";
@Component({
  selector: 'app-user-details-component',
  templateUrl: './user-details-component.component.html',
  styleUrls: ['./user-details-component.component.css']
})
export class UserDetailsComponentComponent implements OnInit {

  users: Observable<User[]>;

  constructor(private userService: UserService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
    console.log("Init called");
  }
  reloadData() {
    this.users = this.userService.getUserList();
    console.log(this.users);
  }
  clicktoadd(){
    console.log('to add called ');
    this.router.navigate(['/adduser']);
  }
  toupdate(id: number){
    console.log('to update called ');
    this.router.navigate(['updateuser', id]);
  }
  todelete(id: number){
    this.userService.deleteUser(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }
}
