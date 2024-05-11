import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component, DoCheck } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import NumberChecker, { WordToExclude } from './validator';
import CountryChecker from './validator';
import { AsyncValidatorService } from './async-validator.service';
import { AsyncValidatorSecondService } from './async-validator-second.service';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements DoCheck {
  diasble=false
  displayError=false
  errorMessage=''
input_field=new FormControl('',{updateOn:'change',validators:[CountryChecker,WordToExclude('lost')],asyncValidators:[this.async.validate.bind(this.async),this.asyncTwo.validate.bind(this.asyncTwo)]})
currentValueOfForm:string|null=''

constructor(private async:AsyncValidatorService,private asyncTwo:AsyncValidatorSecondService){
  console.log(this.input_field)
  this.input_field.statusChanges.subscribe((a)=>{
    console.log(a)
    let errorObj=this.input_field.errors
    if(this.input_field.errors){
      console.log(this.input_field.errors)
      this.displayError=true
    for(let a in errorObj){
      this.errorMessage=errorObj[a]
    }
  console.log('contians error')

  }
  else{
    this.displayError=false
  }
  })
  this.input_field.valueChanges.subscribe((newValue)=>{
    
    this.currentValueOfForm=newValue
  })
}
ngDoCheck(): void {
  if(this.input_field.value==='ass'){
    this.input_field.reset({value:'Dont user abusive word',disabled:true})
  }
}
}
