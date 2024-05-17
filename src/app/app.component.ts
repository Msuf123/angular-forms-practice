import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsTypesComponent } from './forms-types/forms-types.component';
import { TemplateDrivenComponent } from './forms-types/template-driven/template-driven.component';
import { HttpClient } from '@angular/common/http';
import { FetchService } from './service/fetch.service';
import { LoggerOneService } from './service/logger-one.service';
import { DynamicFormComponent } from './forms-types/dynamic-form/dynamic-form.component';
import { QuestionService } from './service/forms-service/question.service';
import { Observable } from 'rxjs';
import { QuestionBase } from './forms-types/dynamic-form/question-base';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsTypesComponent,TemplateDrivenComponent,DynamicFormComponent,AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[{provide:'name',useValue:'kk',multi:true},{provide:'name',useFactory:()=>'fff',multi:true}]
})
export class AppComponent {
  title = 'form-practice';
  questions$:any
  constructor(private questionl:QuestionService,private request:FetchService,@Inject('name') customnVals:string){
  this.request.getData().subscribe((a)=>{
   
  })
  
  this.questions$=questionl.getQuestions()
  console.log(this.questions$)
  }
}
