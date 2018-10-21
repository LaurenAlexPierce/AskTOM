import { LoginComponent } from './components/login/login.component';
import { Routes } from 'node_modules/@angular/router';

export const appRoutes: Routes = [
    {
        path: 'home',
        component: LoginComponent
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: LoginComponent
    }
]