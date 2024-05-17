import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoggerOneService } from './logger-one.service';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
   errorHandling(err:HttpErrorResponse){
    return new Observable((e)=>e.next(err.message))
   }
  constructor(private http:HttpClient,private loggin:LoggerOneService) { }
  getData(){
    
   return this.http.get('https://jsonplaceholder.typicode.com/posts',{responseType:'json',observe:'body'}).pipe(catchError(this.errorHandling))
  }
}
