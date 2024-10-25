import { Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';
import { authGuard } from './pages/login/auth.guard';
import { UserByIdComponent } from './pages/user-by-id/user-by-id.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [authGuard],
  },
  {
    path: 'users/:id',
    component: UserByIdComponent,
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];
