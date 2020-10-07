import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = 'http://localhost:8080/server/api/v1/books';

  constructor(private http: HttpClient) { }

  getBooks(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createBookCatalogue(book: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, book);
  }

  updateBook(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }


  getBookList(): Observable<any> {
    console.log("entered getlist method for book catalogue",this.baseUrl);
    return this.http.get(`${this.baseUrl}`);
  }
}
