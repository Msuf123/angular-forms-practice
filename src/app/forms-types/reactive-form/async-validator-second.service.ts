import { Injectable } from '@angular/core';

import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AsyncValidatorSecondService implements AsyncValidator {
  namee='Jac'
  constructor() { }
  validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return new Observable((emit)=>{emit.next('Error');emit.complete()}).pipe(map((a)=>control.value.length<5?{error:'This is second error'}:null))
  }
}
