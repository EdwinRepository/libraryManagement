import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { BookService } from "../book.service";
import { Book } from "../book";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private bookService: BookService,private router :Router) { }
book : Book = new Book();
  ngOnInit() {
  }
  onSubmit() {    
    this.save();      
  }
  save() {  
   
    
    this.bookService.createBookCatalogue(this.book).subscribe(data => {console.log(data)
      console.log("save method called------",data);
      if(data !=null) {
        this.book = new Book();
        console.log("save method called------",data);
        this.gotoList();
        }
    }, error => console.log(error));

    this.book = new Book();

  }
  gotoList() {        
    this.router.navigate(['/book']);
}
}
