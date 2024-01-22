import { Component, Input } from '@angular/core';
import { InputComponent } from '../../UI/input/input.component';
import { ButtonComponent } from '../../UI/button/button.component';
import { CheckboxComponent } from '../../UI/checkbox/checkbox.component';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [InputComponent, ButtonComponent, CheckboxComponent, CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Input() title!: string;
  @Input() formGroup!: FormGroup;
  @Input() onSubmit!: Function;
  @Input() checkboxText!: string;
  @Input() buttonText: string = 'submit';
  @Input() additionalLinkTextGeneral!: string;
  @Input() additionalLinkText!: string;
  @Input() additionalLink!: string;
  

  getType(inputName: string) {
    return ['password', 'email'].includes(inputName) ? inputName : 'text';
  }

  log(value:any) {
    console.log(value);
  }
}
