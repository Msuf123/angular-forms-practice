import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export const identityRevealedValidator: ValidatorFn = (
    control: AbstractControl,
  ): ValidationErrors | null => {
    const name = control.get('name');
    
   console.log(name?.value)
    return name  && name.value === 'AkshatMalik'
      ? { identityRevealed: true }
      : null;
  };