
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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

const routes: Routes = [
  { path: '', redirectTo: 'indexPage', pathMatch: 'full' },
  { path: 'indexPage', component: IndexComponentComponent },
  { path: 'normaluser', component: NormaluserComponentComponent },
  { path: 'adminuser', component: AdminuserComponentComponent },
  { path: 'user', component: UserDetailsComponentComponent },
  { path: 'book', component: BooksCatalogueComponentComponent },
  { path: 'publisher', component: PublisherDetailsComponentComponent },
  { path: 'author', component: AuthorDetailsComponentComponent },
  { path: 'addbook', component: BookComponent},
  { path: 'updatebook/:id',component: UpdateBookComponent},
  { path: 'adduser', component: UserComponent},
  { path: 'updateuser/:id', component: UpdateUserComponent},
  { path: 'addpublisher', component: PublisherComponent},
  { path: 'updatepublisher/:id',component: UpdatePublisherComponent},
  { path: 'addauthor', component: AuthorComponent},
  { path: 'updateauthor/:id',component: UpdateAuthorComponent}
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
