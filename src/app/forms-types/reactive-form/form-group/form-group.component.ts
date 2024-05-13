import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { identityRevealedValidator } from './combinedValidator';

@Component({
  selector: 'app-form-group',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.css'
})
export class FormGroupComponent {
  showErrorLable=false
  showTheDomain=false
  showPassError=false
  error=''
  formGroup=new FormGroup({
    name:new FormControl('',{validators:[Validators.required]}),
    password:new FormControl('',{validators:[Validators.minLength(6)]}),
   
  },{validators:[identityRevealedValidator]})
  // jack=new FormGroup({name:new FormControl('')},{validators:})
 constructor(private formBuilder:FormBuilder) {
  this.formGroup.statusChanges.subscribe((a)=>{
    console.log(this.formGroup.errors)
    let errors=this.formGroup.get('password')?.errors
    console.log(errors,'errors')
    if(errors){
     
     this.showPassError=true
      for(let a in errors){
      this.error=errors[a]['requiredLength']
    }
  }
  })
//   this.formGroup.valueChanges.subscribe((a)=>{
//     if(a.coder==='yes'){
      
//       this.showTheDomain=true
//     }
//     else{
//       this.showTheDomain=false
//     }
//   })
  }
//  adHobbies(){
  
//   this.arrayOfForm.push(new FormControl(''))
//  }
//  get arrayOfForm(){
//     return  this.formGroup.get('hobbies') as FormArray
//  }
 formSubmit(){
  console.log(this.formGroup.value)
 }
//  ngDoCheck(){
//   }
//   heIsaCoder(){
//     if(this.formGroup.value.coder==='yes'){
//       this.formGroup.patchValue({domain:''})
//     }
 // }
}
