import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export default function CountryChecker(control:AbstractControl):ValidationErrors|null{
    if(control.value==='India'){
        return {country:'Dont wrtie any country'}
    }
    else{
        return null
    }
}
export  function WordToExclude(value:string):ValidatorFn{
    return (control:AbstractControl):ValidationErrors|null=>{
        if(control.value===value){
         return {exclude:'Pls dont include this word'}
        }
        else{
            return null
        }
    }
}