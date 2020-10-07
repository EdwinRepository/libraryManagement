import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  id: number;
  book: Book;

  constructor(private route: ActivatedRoute,private router: Router,
    private bookService: BookService) { }

  ngOnInit() {
    this.book = new Book();

    this.id = this.route.snapshot.params['id'];
    console.log('id           ',this.id);
    
    this.bookService.getBooks(this.id)
      .subscribe(data => {
        console.log(data)
        this.book = data;
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateBook();    
  }

  updateBook() {
    this.bookService.updateBook(this.id, this.book)
      .subscribe(data => {console.log(data)
        if(data !=null) {
          this.book = new Book();
          this.gotoList();
          }
      }, error => console.log(error));

    this.book = new Book();
  }
  
  gotoList() {
     this.router.navigate(['/book']);    
  }


}
