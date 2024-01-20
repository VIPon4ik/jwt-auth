import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { bootstrapEyeFill } from '@ng-icons/bootstrap-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [NgIconComponent, CommonModule],
  viewProviders: [provideIcons({ bootstrapEyeFill })],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() type:string = 'text';
  @Input() placeholder:string = '';
  @Input() name:string = '';
  changingType: boolean = false;

  toggleShowPassword = () => {
    this.changingType = !this.changingType;
  }
}
