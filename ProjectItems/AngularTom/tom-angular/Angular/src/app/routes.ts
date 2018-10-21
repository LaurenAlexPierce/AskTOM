import { LoginComponent } from './components/login/login.component';
import { Routes } from 'node_modules/@angular/router';
import { HomeComponent } from './components/home/home.component';

export const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: HomeComponent
    }
]