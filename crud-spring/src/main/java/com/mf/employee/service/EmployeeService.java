package com.mf.employee.service;

import java.util.List;

import com.mf.employee.exception.EmployeeNotFoundException;
import com.mf.employee.exception.InvalidInputException;
import com.mf.employee.model.Employee;

public interface EmployeeService {
	
	public List<Employee> getAllEmployees() throws EmployeeNotFoundException;
	
	public Employee updateEmployee(Employee emp) throws InvalidInputException;
	
	public Employee deleteEmployeeById(Integer empId) throws EmployeeNotFoundException;
	
	public Employee getEmployeeById(Integer empId) throws EmployeeNotFoundException;
	
	public Employee addEmployee(Employee emp) throws InvalidInputException;

}
