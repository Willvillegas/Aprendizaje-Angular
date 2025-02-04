import { Routes } from '@angular/router';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { LayoutPageComponent } from './heroes/pages/layout-page/layout-page.component';
import { ListPageComponent } from './heroes/pages/list-page/list-page.component';
import { SearchPageComponent } from './heroes/pages/search-page/search-page.component';
import { NewPageComponent } from './heroes/pages/new-page/new-page.component';
import { HeroePageComponent } from './heroes/pages/heroe-page/heroe-page.component';

export const routes: Routes = [
    {
        path: 'auth',
        component: LoginPageComponent
    },
    {
        path: 'heroes',
        component: LayoutPageComponent,
        children: [
            {
                path: 'list',
                component: ListPageComponent
            },
            {
                path: 'search',
                component: SearchPageComponent
            },
            {
                path: 'new-hero',
                component: NewPageComponent
            },
            {
                path: 'edit/:id',
                component: NewPageComponent
            },
            {
                path: 'id',
                component: HeroePageComponent
            },
            {
                path: '**',
                redirectTo: 'list'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'heroes',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'auth'
    }
];
