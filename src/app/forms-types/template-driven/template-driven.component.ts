import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomDirective } from './directive/custom.directive';

@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [FormsModule,CommonModule,CustomDirective],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {
 value=''
 models=null
 
 changes(){
 // console.log(this.value)
 }
}
