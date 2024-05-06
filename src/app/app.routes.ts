import { Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';
import { PagesComponent } from './pages/pages.component';
import DashboardComponent from './pages/dashboard/dashboard.component';
import ProgressComponent from './pages/progress/progress.component';
import Grafica1Component from './pages/grafica1/grafica1.component';

export const routes: Routes = [

    {
        path: '',
        component: PagesComponent, // this is the component with the <router-outlet> in the template
        children: [
            {
                path: 'dashboard', // child route path
                component: DashboardComponent, // child route component that the router renders
            },
            {
                path: 'progress',
                component: ProgressComponent, // another child route component that the router renders
            },
            {
                path: 'grafica1',
                component: Grafica1Component, // another child route component that the router renders
            },
            {
                path: '', redirectTo: 'dashboard', pathMatch: 'full'
            },
        ],
    },

    // { path: '', component: PagesComponent },

    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },

    { path: '**', component: NotpagefoundComponent },

];
