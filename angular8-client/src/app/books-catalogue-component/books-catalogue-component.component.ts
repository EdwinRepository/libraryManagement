import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { BookService } from "../book.service";
import { Book } from "../book";
@Component({
  selector: 'app-books-catalogue-component',
  templateUrl: './books-catalogue-component.component.html',
  styleUrls: ['./books-catalogue-component.component.css']
})
export class BooksCatalogueComponentComponent implements OnInit {

  books: Observable<Book[]>;

  constructor(private bookService: BookService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
    console.log("Init called");
  }
  reloadData() {
    this.books = this.bookService.getBookList();
  }

  toadd(){
    console.log("click called");
    this.router.navigate(['/addbook']);
  }
 
  toupdate(id: number){
    console.log('to update called ');
    this.router.navigate(['updatebook', id]);
  }
  todelete(id: number){
    this.bookService.deleteBook(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }
}
