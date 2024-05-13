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
    console.log(this.name,'k')
  }
  validate(control: AbstractControl): ValidationErrors | null {
    console.log(control.value,this.name)
    if(control.value==='j'){
      return {customError:'Error'}
    }
    return null
  }

}
