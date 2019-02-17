import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  template: `
  <div class="form-group">
    <h4> Employee List</h4>
      <li *ngFor="let employee of employeeList">
          {{employee.Name}}
      </li>
  </div>
  `,
  styles: []
  // providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {

 // @Input() public employeeList ;
  public employeeList ;
  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute)  {
    console.log(this.route);
  }

  ngOnInit() {
    //this.employeeList = this.employeeService.employees;

    this.employeeService.getEmployeeData().subscribe((data) => {
      this.employeeList = data;
    });
  }

}
