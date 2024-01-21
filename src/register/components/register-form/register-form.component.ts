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
    name: ['', Validators.required],
    email: [''],
    password: [''],
  });

  onSubmit = () => {
    console.log(this.registerForm.value);
  }

  constructor(private formBuilder: FormBuilder) { }
}
