import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component')
        .then(m => m.HomeComponent)
  },
  {
    path: 'addition',
    loadComponent: () =>
      import('./components/addition/addition.component')
        .then(m => m.AdditionComponent)
  },
  {
    path: 'subtraction',
    loadComponent: () =>
      import('./components/subtraction/subtraction.component')
        .then(m => m.SubtractionComponent)
  },
  {
    path: 'logic',
    loadComponent: () =>
      import('./components/logic/logic.component')
        .then(m => m.LogicComponent)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about.component')
        .then(m => m.AboutComponent)
  }
];
