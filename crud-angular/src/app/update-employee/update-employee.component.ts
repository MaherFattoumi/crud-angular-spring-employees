import { Component } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent {
  public empId!: number;
  public employee!: Employee;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}
  ngOnInit(): void {
    this.empId = this.route.snapshot.params['empId'];
    this.employee = new Employee();
    this.employeeService.getEmployee(this.empId).subscribe((data) => {
      this.employee = data;
    });
  }

  onSubmit() {
    this.employeeService.addEmployee(this.employee).subscribe((data) => {
      this.router.navigate(['/all']);
      alert('Employee updated successfully !');
    });
  }
}
