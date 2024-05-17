import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsTypesComponent } from './forms-types/forms-types.component';
import { TemplateDrivenComponent } from './forms-types/template-driven/template-driven.component';
import { HttpClient } from '@angular/common/http';
import { FetchService } from './service/fetch.service';
import { LoggerOneService } from './service/logger-one.service';
import { DynamicFormComponent } from './forms-types/dynamic-form/dynamic-form.component';
import { QuestionService } from './service/forms-service/question.service';
import { Observable, delay, of } from 'rxjs';
import { QuestionBase } from './forms-types/dynamic-form/question-base';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsTypesComponent,TemplateDrivenComponent,DynamicFormComponent,AsyncPipe,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[{provide:'name',useValue:'kk',multi:true},{provide:'name',useFactory:()=>'fff',multi:true}]
})
export class AppComponent {
  title = 'form-practice';
  questions$:any
  loading=false
  names=of('aksaht').pipe(delay(5000))
  constructor(private questionl:QuestionService,private request:FetchService,@Inject('name') customnVals:string){
  
  this.questionl.getQuestions().subscribe((a)=>{
    if(Array.isArray(a)&&a.length!==0){

      this.loading=true
      this.questions$=a
    }
  })
  this.questions$=questionl.getQuestions()
  
  }
}
