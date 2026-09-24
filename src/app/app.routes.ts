import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AdditionComponent} from './components/addition/addition.component';
import {SubtractionComponent} from './components/subtraction/subtraction.component';
import {LogicComponent} from './components/logic/logic.component';
import {AboutComponent} from './components/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addition', component: AdditionComponent },
  { path: 'subtraction', component: SubtractionComponent },
  { path: 'logic', component: LogicComponent },
  { path: 'about', component: AboutComponent }
];
