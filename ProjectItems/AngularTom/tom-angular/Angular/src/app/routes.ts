import { LoginComponent } from './components/login/login.component';
import { Routes } from 'node_modules/@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResponseComponent } from './components/response/response.component';
import { RegisterComponent } from './components/register/register.component';

export const appRoutes: Routes = [
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'responses',
        component: ResponseComponent
    },
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