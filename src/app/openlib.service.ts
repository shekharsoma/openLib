import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class OpenlibService {

  constructor(private http: HttpClient) { }
  getDetails(){
    return this.http.get<any>(`https://openlibrary.org/api/books?bibkeys=ISBN:9780980200447&jscmd=data&format=json`);
  }
  
}
