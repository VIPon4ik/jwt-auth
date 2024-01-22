import { Component } from '@angular/core';
import { FormComponent } from '../../../shared/components/form/form.component';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  constructor(private formBuilder: FormBuilder) { }

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.minLength(8), Validators.maxLength(32), Validators.required]],
  });

  onSubmit = () => {
    console.log(this.loginForm);
  }
}
