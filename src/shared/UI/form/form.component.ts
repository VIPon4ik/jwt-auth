import { Component, Input } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
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
}
