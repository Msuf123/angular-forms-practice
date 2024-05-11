import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsyncValidatorService implements AsyncValidator {
 name='Jack'
  constructor() { }
  validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return new Observable((emit)=>{emit.next('Error');emit.complete()}).pipe(tap((a)=>console.log('I am in first validator')),map((a)=>control.value===this.name?{error:'Jack why are you using this'}:null))
  }
}
