import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmployeeService]
})
export class AppComponent {
  name = '';
  empId = '';
  department = 'HR';
  title = 'Welcome to Angular World';
 employeeList = [];


//  employeeList = [
//   {
//       Id: '1',
//       Name: 'Jitin',
//       department: 'HR'
//   },
//   {
//       Id: '2',
//       Name: 'John',
//       department: 'Admin'
//   },
//   {
//       Id: '3',
//       Name: 'Deo',
//       department: 'Tech'
//   },
//   {
//       Id: '4',
//       Name: 'Kumar',
//       department: 'Tech'
//   }
// ];

  constructor(private employeeService: EmployeeService) {
     this.employeeList = this.employeeService.employees;
  }


  // AddEmployee() {

  //   const newEmp = {
  //     Id : this.empId,
  //     Name : this.name,
  //     department: this.department
  //   };
  //   this.employeeList.push(newEmp);
  // }
  // ChangingValue(event) {
  //   this.department = event.target.value;
  //  }



}
