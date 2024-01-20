import { Routes } from '@angular/router';
import { RegisterFormComponent } from '../register/components/register-form/register-form.component';
import { LoginFormComponent } from '../login/components/login-form/login-form.component';

export const routes: Routes = [{ path: 'register', component: RegisterFormComponent }, { path: 'login', component: LoginFormComponent }];
