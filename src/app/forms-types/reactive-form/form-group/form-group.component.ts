import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.css'
})
export class FormGroupComponent {
  showErrorLable=false
  formGroup=this.formBuilder.group({
    name:['',[Validators.required]],
    password:['',[Validators.minLength(6)]],
    hobbies:this.formBuilder.array([])
  },)
 constructor(private formBuilder:FormBuilder) {
  
 }
 adHobbies(){
  
  this.arrayOfForm.push(new FormControl('hoobies'))
 }
 get arrayOfForm(){
    return  this.formGroup.get('hobbies') as FormArray
 }
 formSubmit(){
  console.log(this.formGroup.value)
 }
}
