import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  employee!: Employee;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employee = new Employee();
  }

  onSubmit() {
    this.employeeService.addEmployee(this.employee).subscribe((data) => {
      this.router.navigate(['/all']);
      alert('New Employee added successfully !');
    });
  }
}
