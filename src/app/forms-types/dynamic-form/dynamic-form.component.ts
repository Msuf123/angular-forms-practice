import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QuestionControlService } from '../../service/forms-service/question-control.service';
import { QuestionBase } from './question-base';
import { CommonModule } from '@angular/common';
import { DynamicFormQuestionComponent } from '../dynamic-form-question/dynamic-form-question.component';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,DynamicFormQuestionComponent],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent {

  @Input() questions: QuestionBase<string>[] | null = [];
     form!:FormGroup
     payLoad=''
     constructor(private qcs:QuestionControlService){}
     ngOnInit(){
      if(this.questions){
      this.form=this.qcs.toFormGroup(this.questions as QuestionBase<string>[])
    }
     }
     onSubmit(){
      console.log(this.form.value)
      this.payLoad = JSON.stringify(this.form.getRawValue());
     }
}
