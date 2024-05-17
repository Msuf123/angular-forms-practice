import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appCustom]',
  standalone: true,
  providers:[ {
    provide: NG_VALIDATORS,
    useExisting: CustomDirective,
    multi: true,
  }]
})
export class CustomDirective implements Validator{
  @Input('appCustomsNAme') name:string=''
  constructor() { 
    
  }
  validate(control: AbstractControl): ValidationErrors | null {
    
    if(control.value==='j'){
      return {customError:'Error'}
    }
    return null
  }

}
