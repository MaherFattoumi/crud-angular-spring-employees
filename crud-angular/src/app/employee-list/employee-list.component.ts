import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees!: Employee[];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees() {
    this.employeeService.getEmployeeList().subscribe((data) => {
      this.employees = data;
    });
  }
  updateEmployee(employee: Employee) {
    this.router.navigate(['updateEmployee', employee]);
  }

  deleteEmployee(empId: number) {
    this.employeeService
      .deleteEmployee(empId)
      .subscribe((data) => this.getEmployees());
    alert('Employee deleted successfully !');
  }
  viewEmployee(empId: number) {
    this.router.navigate(['viewEmployee', empId]);
  }
}
