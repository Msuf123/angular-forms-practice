import { AbstractControl, ValidationErrors } from "@angular/forms";

export default function CountryChecker(control:AbstractControl):ValidationErrors|null{
    if(control.value==='India'){
        return {country:'Dont wrtie any country'}
    }
    else{
        return null
    }
}