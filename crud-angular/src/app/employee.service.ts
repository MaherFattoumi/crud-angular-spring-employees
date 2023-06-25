import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  public URL = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public getEmployeeList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.URL + '/getAll');
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.URL + '/add', employee);
  }

  public getEmployee(empId: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.URL}/get/${empId}`);
  }

  public deleteEmployee(empId: number): Observable<Employee> {
    return this.http.delete<Employee>(`${this.URL}/delete/${empId}`);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.URL + '/update', employee);
  }
}
