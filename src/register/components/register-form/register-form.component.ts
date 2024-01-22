import { Component } from '@angular/core';
import { FormComponent } from '../../../shared/components/form/form.component';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormComponent, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  registerForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(12)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.minLength(8), Validators.maxLength(32), Validators.required]],
  });

  onSubmit = () => {
    console.log(this.registerForm);
  }

  constructor(private formBuilder: FormBuilder) { }
}
