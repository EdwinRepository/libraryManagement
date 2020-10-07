import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminuser-component',
  templateUrl: './adminuser-component.component.html',
  styleUrls: ['./adminuser-component.component.css']
})
export class AdminuserComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  locateToUrl(path){
    if(path=='user'){
      this.router.navigate(['/user']);
    }else if(path=='book'){
      this.router.navigate(['/book']);
    }else if(path=='publisher'){
      this.router.navigate(['/publisher']);
    }else if(path=='author'){
      this.router.navigate(['/author']);
    }
  }
}
