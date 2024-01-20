import { Component } from '@angular/core';
import { AuthMenuComponent } from '../auth-menu/auth-menu.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AuthMenuComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
