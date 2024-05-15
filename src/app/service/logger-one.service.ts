import { Injectable } from '@angular/core';

@Injectable()
export class LoggerOneService {

  constructor() { }
  log(data:string){
    console.log('I am logging '+data)
  }
}
