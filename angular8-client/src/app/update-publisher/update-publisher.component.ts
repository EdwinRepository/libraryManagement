import { Component, OnInit } from '@angular/core';
import { Publisher } from '../publisher';
import { ActivatedRoute, Router } from '@angular/router';
import { PublisherService } from '../publisher.service';
@Component({
  selector: 'app-update-publisher',
  templateUrl: './update-publisher.component.html',
  styleUrls: ['./update-publisher.component.css']
})
export class UpdatePublisherComponent implements OnInit {

  id: number;
  publisher: Publisher;

  constructor(private route: ActivatedRoute,private router: Router,
    private publisherService: PublisherService) { }

  ngOnInit() {
    this.publisher = new Publisher();

    this.id = this.route.snapshot.params['id'];
    console.log('id           ',this.id);
    
    this.publisherService.getPublisher(this.id)
      .subscribe(data => {
        console.log(data)
        this.publisher = data;
      }, error => console.log(error));
  }

  onSubmit() {
    this.updatePublisher();    
  }

  updatePublisher() {
    this.publisherService.updatePublisher(this.id, this.publisher)
      .subscribe(data => {console.log(data)
        if(data !=null) {
          this.publisher = new Publisher();
          this.gotoList();
          }
      }, error => console.log(error));

    this.publisher = new Publisher();
  }
  
  gotoList() {
     this.router.navigate(['/publisher']);    
  }

}
