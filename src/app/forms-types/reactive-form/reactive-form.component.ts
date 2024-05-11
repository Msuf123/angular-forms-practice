import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
input_field=new FormControl('')
currentValueOfForm:string|null=''
constructor(){
  this.input_field.valueChanges.subscribe((newValue)=>{
    this.currentValueOfForm=newValue
  })
}
}
