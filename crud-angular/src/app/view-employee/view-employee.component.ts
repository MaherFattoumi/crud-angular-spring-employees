import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css'],
})
export class ViewEmployeeComponent implements OnInit {
  public empId!: number;
  public employee!: Employee;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.empId = this.route.snapshot.params['empId'];
    this.employee = new Employee();
    this.employeeService.getEmployee(this.empId).subscribe((data) => {
      this.employee = data;
    });
  }
}
