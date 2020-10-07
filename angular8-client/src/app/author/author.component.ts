import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { AuthorService } from "../author.service";
import { Author } from "../author";


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(private authorService:AuthorService,private router:Router) { }
  author:Author = new Author();
  ngOnInit() {
  }
  onSubmit() {    
    this.save();      
  }
  save() {      
    this.authorService.createAuthor(this.author).subscribe(data => {console.log(data)
      console.log("save method called------",data);
      if(data !=null) {
        this.author = new Author();
        console.log("save method called------",data);
        this.gotoList();
        }
    }, error => console.log(error));

    this.author = new Author();

  }
  gotoList() {        
    this.router.navigate(['/author']);
}
}
