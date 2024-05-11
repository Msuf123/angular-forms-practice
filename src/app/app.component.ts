import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsTypesComponent } from './forms-types/forms-types.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsTypesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form-practice';
}
