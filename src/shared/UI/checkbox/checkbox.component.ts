import { Component, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {
  isCheckboxChecked: boolean = false;
  @Input() checkboxText!: string;
  @Output() toggleCheckboxEvent = new EventEmitter<boolean>();

  toggleCheckbox() {
    this.isCheckboxChecked = !this.isCheckboxChecked
    this.toggleCheckboxEvent.emit(this.isCheckboxChecked);
  }
}
