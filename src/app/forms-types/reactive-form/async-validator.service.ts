import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsyncValidatorService implements AsyncValidator {
 name='Jack'
  constructor() { }
  validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return new Observable((emit)=>{emit.next(control.value);emit.complete()}).pipe(delay(200),map((a)=>a===this.name?{error:'Jack why are you using this'}:null))
  }
}
