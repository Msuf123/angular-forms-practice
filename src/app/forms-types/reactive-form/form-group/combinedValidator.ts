import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const identityRevealedValidator: ValidatorFn = (
    control: AbstractControl,
  ): ValidationErrors | null => {
    const name = control.get('name');
    
   console.log('me')
    return name  && name.value === 'AkshatMalik'
      ? { identityRevealed: true }
      : null;
  };