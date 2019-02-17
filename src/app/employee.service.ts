import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';



@Injectable()
export class EmployeeService implements OnInit {
    private url = '../assets/data/employeeData.json';
    public employees = [];
    constructor(private http: HttpClient) {
        this.getEmployeeData().subscribe((data) => {
            this.employees = data;
        });
    }

    ngOnInit() {
    }
    getEmployeeData() {
        return this.http.get<IEmployee[]>(this.url);
    }
    // getEmployee() {
    //     return this.employees;
    // }
    // addEmployee(newEmployee) {
    //     return this.employees.push(newEmployee);
    // }
}
