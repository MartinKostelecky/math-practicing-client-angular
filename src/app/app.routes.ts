import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component')
        .then(m => m.HomeComponent)
  },

  /* {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component')
        .then(m => m.LoginComponent)
  },

  {
    path: 'examples',
    loadComponent: () =>
      import('./components/examples/examples.component')
        .then(m => m.ExamplesComponent)
  },

  {
    path: 'examples/add',
    loadComponent: () =>
      import('./components/add-example/add-example.component')
        .then(m => m.AddExampleComponent)
  },

  {
    path: 'examples/:id/edit',
    loadComponent: () =>
      import('./components/edit-example/edit-example.component')
        .then(m => m.EditExampleComponent)
  }, */

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
    path: 'multiplication',
    loadComponent: () =>
      import('./components/multiplication/multiplication.component')
        .then(m => m.MultiplicationComponent)
  },

  /* {
    path: 'logic-operators',
    loadComponent: () =>
      import('./components/logic-operators/logic-operators.component')
        .then(m => m.LogicOperatorsComponent)
  }, */

  {
    path: '**',
    redirectTo: ''
  }
];
