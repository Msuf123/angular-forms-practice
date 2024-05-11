import { Component } from '@angular/core';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@Component({
  selector: 'app-forms-types',
  standalone: true,
  imports: [ReactiveFormComponent],
  templateUrl: './forms-types.component.html',
  styleUrl: './forms-types.component.css'
})
export class FormsTypesComponent {

}
