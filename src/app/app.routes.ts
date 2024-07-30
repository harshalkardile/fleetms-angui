import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CountryComponent } from './country/country.component'

export const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'countries', component: CountryComponent},
  {path: '', component: HomeComponent}
];
