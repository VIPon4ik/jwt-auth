import { Component } from '@angular/core';
import { FormComponent } from '../../../shared/UI/form/form.component';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

}
