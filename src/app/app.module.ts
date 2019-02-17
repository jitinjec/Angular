import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { EmployeeService } from './employee.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const appRoutes: Routes = [
  { path: 'employeeList', component: EmployeeListComponent },
  { path: 'employeeDetails', component: EmployeeDetailsComponent },
  // { path: 'login', component: LoginFormComponent },
  { path: 'login', component: ReactiveFormComponent },
  { path: 'add', component: AddNewEmployeeComponent },
  { path: '', redirectTo: '/employeeList', pathMatch: 'full' }
];



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    AddNewEmployeeComponent,
    LoginFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
