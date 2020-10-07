import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-component',
  templateUrl: './index-component.component.html',
  styleUrls: ['./index-component.component.css']
})
export class IndexComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
    locateTo(path){
      if(path=='normaluser'){
        this.router.navigate(['/normaluser']);
      }else{
        this.router.navigate(['/adminuser']);
      }
}
}
