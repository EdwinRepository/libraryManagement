import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { AuthorService } from "../author.service";
import { Author } from "../author";
@Component({
  selector: 'app-author-details-component',
  templateUrl: './author-details-component.component.html',
  styleUrls: ['./author-details-component.component.css']
})
export class AuthorDetailsComponentComponent implements OnInit {

  authors: Observable<Author[]>;

  constructor(private authorService: AuthorService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
    console.log("Init called");
  }
  reloadData() {
    console.log("author service called");
    this.authors = this.authorService.getAuthorList();
    console.log(this.authors);
  }
  toadd(){
    console.log("click called");
    this.router.navigate(['/addauthor']);
  }
 
  toupdate(id: number){
    console.log('to update called ');
    this.router.navigate(['updateauthor', id]);
  }
  todelete(id: number){
    this.authorService.deleteAuthor(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }
}
