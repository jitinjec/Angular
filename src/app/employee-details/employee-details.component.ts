import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  template: `
  <div class="form-group">
  <h4> Employee Details</h4>
  <div class="row" *ngFor="let employee of employeeList">
      <div class="col-md-2">
          {{employee.Id}}
      </div>
      <div class="col-md-2">
          {{employee.Name}}
      </div>
      <div class="col-md-2">
          {{employee.department}}
      </div>
  </div>
</div>
  `,
  styles: []
  // providers: [EmployeeService]
})
export class EmployeeDetailsComponent implements OnInit {
  // @Input() public employeeList ;
  public employeeList ;
  constructor(private employeeService: EmployeeService)  {
   // this.employeeList = this.employeeService.getEmployee();
  }

  ngOnInit() {
    this.employeeService.getEmployeeData().subscribe((data) => {
      this.employeeList = data;
    });
  }

}
