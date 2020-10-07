import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { PublisherService } from "../publisher.service";
import { Publisher } from '../publisher';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {

  constructor(private publisherService:PublisherService,private router:Router) { }
  publisher:Publisher=new Publisher();
  ngOnInit() {
  }
  onSubmit() {    
    this.save();      
  }
  save() {      
    this.publisherService.createPublisher(this.publisher).subscribe(data => {console.log(data)
      console.log("save method called------",data);
      if(data !=null) {
        this.publisher = new Publisher();
        console.log("save method called------",data);
        this.gotoList();
        }
    }, error => console.log(error));

    this.publisher = new Publisher();

  }
  gotoList() {        
    this.router.navigate(['/publisher']);
}
}
