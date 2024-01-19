import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() type:string = 'text';
  @Input() placeholder:string = '';
  @Input() name!:string;
}
