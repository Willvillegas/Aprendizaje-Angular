import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
// import { AboutComponent } from './pages/about/about.component';
// import { ContacsComponent } from './pages/contacs/contacs.component';
import { ByCapitalComponent } from './contries/pages/by-capital/by-capital.component';
import { ByContryComponent } from './contries/pages/by-contry/by-contry.component';
import { ByRegionComponent } from './contries/pages/by-region/by-region.component';
import { ContryComponent } from './contries/pages/contry/contry.component';
import { ByLanguajeComponent } from './contries/pages/by-languaje/by-languaje.component';

export const routes: Routes = [
    {
        path:'home',
        component: HomeComponent
    },
    {
        path: 'countries',
        children:[
            {
                path:'by-capital',
                component: ByCapitalComponent
            },
            {
                path:'by-country',
                component: ByContryComponent
            },
            {
                path:'by-region',
                component: ByRegionComponent
            },
            {
                path:'by-languaje',
                component: ByLanguajeComponent
            },
            {
                path:'by/:id',
                component: ContryComponent
            },
            {
                path:'**',
                redirectTo: 'by-capital'
            }
        ]
        
    },
    {
        path:'**',
        redirectTo: 'countries'
    },
    // {
    //     path: 'home',
    //     component: HomeComponent
    // },
    // {
    //     path: 'about',
    //     component: AboutComponent
    // },
    // {
    //     path: 'contacts',
    //     component: ContacsComponent
    // },
    // {
    //     path: '**',
    //     redirectTo: ''
    // }

];
