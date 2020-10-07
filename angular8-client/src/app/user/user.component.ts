import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { UserService } from "../user.service";
import { User } from "../user";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User = new User();
  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }
  newUser(): void {
    
    this.user = new User();
  }
  
  
  onSubmit() {    
    this.save();      
  }
  save() {  
   
    
    this.userService.addUser(this.user).subscribe(data => {console.log(data)
      console.log("save method called------",data);
      if(data !=null) {
        this.user = new User();
        console.log("save method called------",data);
        this.gotoList();
        }
    }, error => console.log(error));

    this.user = new User();

  }
  gotoList() {        
    this.router.navigate(['/user']);
}
}
