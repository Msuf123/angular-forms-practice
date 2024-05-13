import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsTypesComponent } from './forms-types/forms-types.component';
import { TemplateDrivenComponent } from './forms-types/template-driven/template-driven.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsTypesComponent,TemplateDrivenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form-practice';
}
