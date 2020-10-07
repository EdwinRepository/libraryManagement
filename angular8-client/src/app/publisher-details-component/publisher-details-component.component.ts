import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { PublisherService } from "../publisher.service";
import { Publisher } from "../publisher";
@Component({
  selector: 'app-publisher-details-component',
  templateUrl: './publisher-details-component.component.html',
  styleUrls: ['./publisher-details-component.component.css']
})
export class PublisherDetailsComponentComponent implements OnInit {

  publishers: Observable<Publisher[]>;

  constructor(private publisherService: PublisherService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
    console.log("Init called");
  }
  reloadData() {
    this.publishers = this.publisherService.getPublisherList();
  }
  toadd(){
    console.log('to add called ');
    this.router.navigate(['/addpublisher']);
  }
  toupdate(id: number){
    console.log('to update called ');
    this.router.navigate(['updatepublisher', id]);
  }
  todelete(id: number){
    this.publisherService.deletePublisher(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }
}
