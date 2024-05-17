import { Component, Input } from '@angular/core';
import { QuestionBase } from '../dynamic-form/question-base';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-form-question',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './dynamic-form-question.component.html',
  styleUrl: './dynamic-form-question.component.css'
})
export class DynamicFormQuestionComponent {
  @Input() question!:QuestionBase<string>
  @Input() form!:FormGroup
  get isValid(){
     return this.form.controls[this.question.key].valid;
  }
}
