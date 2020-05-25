import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { HomeComponent } from './components/home/home.component';
import {ParentComponent } from './components/parent/parent.component';
import {CountriesComponent } from './components/countries/countries.component';


const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'AddEmployee', component:EmployeesComponent},
  { path: 'Parent', component:ParentComponent,pathMatch:'full'},
  {path: 'CovidSummary', component:CountriesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
