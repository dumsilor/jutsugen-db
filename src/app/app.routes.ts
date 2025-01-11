import { Routes } from '@angular/router';
import { MoviesComponent } from './features/movies/movies.component';
import { WebDesignComponent } from './features/web-design/web-design.component';

export const routes: Routes = [
    {path:'', redirectTo: 'home', pathMatch: 'full'},
    {path: 'movies', component: MoviesComponent},
    {path: 'webdev', component: WebDesignComponent},
];
