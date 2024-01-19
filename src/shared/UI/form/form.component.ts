import { Component, Input } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [InputComponent, ButtonComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Input() title!:string;
}
