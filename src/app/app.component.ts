import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsTypesComponent } from './forms-types/forms-types.component';
import { TemplateDrivenComponent } from './forms-types/template-driven/template-driven.component';
import { HttpClient } from '@angular/common/http';
import { FetchService } from './service/fetch.service';
import { LoggerOneService } from './service/logger-one.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsTypesComponent,TemplateDrivenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[]
})
export class AppComponent {
  title = 'form-practice';
  constructor(private request:FetchService){
  this.request.getData().subscribe((a)=>{
    console.log(a)
  })
  
  }
}
