import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  private baseUrl = 'http://localhost:8080/server/api/v1/publishers';

  constructor(private http: HttpClient) { }

  getPublisher(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPublisher(publisher: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, publisher);
  }

  updatePublisher(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletePublisher(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getPublisherList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
