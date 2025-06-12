import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => {
            return import('./start/start').then((m) => m.Start);
        }
    },
    {
        path: 'play/:questions',
        loadComponent: () => {
            return import('./play/play').then((m) => m.Play);
        }
    },
    {
        path: '**',
        redirectTo: ''
    }
];
