import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoggerOneService } from './logger-one.service';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http:HttpClient,private loggin:LoggerOneService) { }
  getData(){
    this.loggin.log('JJJJJJJJJJJJJJJJJJJJJJj')
   return this.http.get('https://jsonplaceholder.typicode.com/posts',{responseType:'json',observe:'body'})
  }
}
