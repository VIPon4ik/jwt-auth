import { Component } from '@angular/core';
import { FormComponent } from '../../../shared/components/form/form.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

}
