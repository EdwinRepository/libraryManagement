import { Component, OnInit } from '@angular/core';
import { Author } from '../author';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../author.service';
@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {

 
  id: number;
  author: Author;

  constructor(private route: ActivatedRoute,private router: Router,
    private authorService: AuthorService) { }

  ngOnInit() {
    this.author = new Author();

    this.id = this.route.snapshot.params['id'];
    console.log('id           ',this.id);
    
    this.authorService.getAuthor(this.id)
      .subscribe(data => {
        console.log(data)
        this.author = data;
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateAuthor();    
  }

  updateAuthor() {
    this.authorService.updateAuthor(this.id, this.author)
      .subscribe(data => {console.log(data)
        if(data !=null) {
          this.author = new Author();
          this.gotoList();
          }
      }, error => console.log(error));

    this.author = new Author();
  }
  
  gotoList() {
     this.router.navigate(['/author']);    
  }

}
