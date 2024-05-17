import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component, DoCheck } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import NumberChecker, { WordToExclude } from './validator';
import CountryChecker from './validator';
import { AsyncValidatorService } from './async-validator.service';
import { AsyncValidatorSecondService } from './async-validator-second.service';
import { FormGroupComponent } from './form-group/form-group.component';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule,FormGroupComponent],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements DoCheck {
  diasble=false
  displayError=false
  errorMessage=''
input_field=new FormControl('',{updateOn:'change',validators:[CountryChecker,WordToExclude('lost')],asyncValidators:[this.asyncTwo.validate.bind(this.asyncTwo),this.async.validate.bind(this.async),]})
currentValueOfForm:string|null=''

constructor(private async:AsyncValidatorService,private asyncTwo:AsyncValidatorSecondService){
 
  this.input_field.statusChanges.subscribe((a)=>{
    
    let errorObj=this.input_field.errors
    if(this.input_field.errors){
      
      this.displayError=true
    for(let a in errorObj){
      this.errorMessage=errorObj[a]
    }
  

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
