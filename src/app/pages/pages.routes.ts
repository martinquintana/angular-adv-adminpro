import { Routes } from '@angular/router';
import DashboardComponent from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import ProgressComponent from './progress/progress.component';
import Grafica1Component from './grafica1/grafica1.component';

export const routes: Routes = [

    {
        path: '', //pagescomponent
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
    }
    // {
    //     path: 'dashboard', 
    //     loadComponent: () => import('./dashboard/dashboard.component'),
    // },
    // {
    //     path: 'progress',
    //     loadComponent: () => import('./progress/progress.component'),
    // },
    // {
    //     path: 'grafica1',
    //     loadComponent: () => import('./grafica1/grafica1.component'),
    // },
    // {
    //     path: '', redirectTo: 'dashboard', pathMatch: 'full'
    // },

];

export default routes;

export function PagesRoutes(PagesRoutes: any): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
  throw new Error('Function not implemented.');
}
