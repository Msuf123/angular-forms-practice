import { Injectable } from '@angular/core';
import { QuestionBase } from '../../forms-types/dynamic-form/question-base';
import { DropdownQuestion } from '../../forms-types/dynamic-form/question-dropdown';
import { TextboxQuestion } from '../../forms-types/dynamic-form/question-textbox';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }
  getQuestions() {

    

    const questions: QuestionBase<string>[] = [
    
          new DropdownQuestion({
            key: 'brave',
            lable: 'Bravery Rating',
         
    
       options: [
              {key: 'solid',  value: 'Solid'},
              {key: 'great',  value: 'Great'},
              {key: 'good',   value: 'Good'},
              {key: 'unproven', value: 'Unproven'}
            ],
            order: 3
          }),
    
          new TextboxQuestion({
            key: 'firstName',
            lable: 'First name',
            value: '',
            required: true,
            order: 1
          }),
    
          new TextboxQuestion({
            key: 'emailAddress',
            lable: 'Email',
            type: 'email',
            order: 2
          })
        ];
       
        return of(questions.sort((a, b) => a.order - b.order)).pipe(delay(3000));
      }
}
