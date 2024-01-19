import { Component, Input } from '@angular/core';
import { InputComponent } from '../input/input.component';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Input() title!:string;
}
