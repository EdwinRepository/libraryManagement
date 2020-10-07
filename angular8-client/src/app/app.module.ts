import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { IndexComponentComponent } from './index-component/index-component.component';
import { NormaluserComponentComponent } from './normaluser-component/normaluser-component.component';
import { AdminuserComponentComponent } from './adminuser-component/adminuser-component.component';
import { UserDetailsComponentComponent } from './user-details-component/user-details-component.component';
import { BooksCatalogueComponentComponent } from './books-catalogue-component/books-catalogue-component.component';
import { PublisherDetailsComponentComponent } from './publisher-details-component/publisher-details-component.component';
import { AuthorDetailsComponentComponent } from './author-details-component/author-details-component.component';
import { BookComponent } from './book/book.component';
import { UserComponent } from './user/user.component';
import { PublisherComponent } from './publisher/publisher.component';
import { AuthorComponent } from './author/author.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UpdatePublisherComponent } from './update-publisher/update-publisher.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';


@NgModule({
  declarations: [
    AppComponent,    
    IndexComponentComponent,
    NormaluserComponentComponent,
    AdminuserComponentComponent,
    UserDetailsComponentComponent,
    BooksCatalogueComponentComponent,
    PublisherDetailsComponentComponent,
    AuthorDetailsComponentComponent,
    BookComponent,
    UserComponent,
    PublisherComponent,
    AuthorComponent,
    UpdateUserComponent,
    UpdateBookComponent,
    UpdatePublisherComponent,
    UpdateAuthorComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
