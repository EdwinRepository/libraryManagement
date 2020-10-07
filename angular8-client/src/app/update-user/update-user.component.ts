import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id: number;
  user: User;

  constructor(private route: ActivatedRoute,private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.user = new User();

    this.id = this.route.snapshot.params['id'];
    console.log('id           ',this.id);
    
    this.userService.getUser(this.id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateUser();    
  }

  updateUser() {
    this.userService.updateUser(this.id, this.user)
      .subscribe(data => {console.log(data)
        if(data !=null) {
          this.user = new User();
          this.gotoList();
          }
      }, error => console.log(error));

    this.user = new User();
  }
  
  gotoList() {
     this.router.navigate(['/user']);    
  }

}
