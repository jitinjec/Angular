import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-new-employee',
  template: `
  <div class="form-group">
  <input type="text" name="id" id="empId" [(ngModel)]="empId" class="form-control" >
</div>
<div class="form-group">
  <input type="text" name="name" id="name" [(ngModel)]="name" class="form-control" >
</div>
<div class="form-group">
      <select name="department" id="department" class="form-control" (change)="ChangingValue($event)" >
              <option value="HR"> HR</option>
              <option value="Tech"> Tech</option>
              <option value="Admin"> Admin</option>
   </select>
</div>
<div class="form-group">
  <input type="button" value="Add Employee" (click)="AddEmployee()">
</div>
  `,
  styles: []
})
export class AddNewEmployeeComponent implements OnInit {
empId = '';
name= '';
department = 'HR';
  // @Output() public onEmployeeAdded = new EventEmitter();
  constructor(private employeeService: EmployeeService)  {
   }

  ngOnInit() {
  }
  AddEmployee() {

    const newEmp = {
      Id : this.empId,
      Name : this.name,
      department: this.department
    };
    //this.onEmployeeAdded.emit(newEmp);
    //this.employeeService.addEmployee(newEmp);
  }
  ChangingValue(event) {
    this.department = event.target.value;
   }
}
