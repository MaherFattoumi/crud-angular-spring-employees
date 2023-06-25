package com.mf.employee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mf.employee.exception.EmployeeNotFoundException;
import com.mf.employee.exception.InvalidInputException;
import com.mf.employee.model.Employee;
import com.mf.employee.service.EmployeeService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "*")
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;

	@GetMapping("/getAll")
	public ResponseEntity<List<Employee>> getAllEmployees() throws EmployeeNotFoundException {
		List<Employee> emp = employeeService.getAllEmployees();

		return new ResponseEntity<>(emp, HttpStatus.OK);
	}

	@PutMapping("/update")
	public ResponseEntity<Employee> updateEmployee(@Valid @RequestBody Employee emp) throws InvalidInputException {
		Employee st = employeeService.updateEmployee(emp);

		return new ResponseEntity<>(st, HttpStatus.ACCEPTED);
	}

	@DeleteMapping("/delete/{empId}")
	public ResponseEntity<Employee> deleteEmployeeById(@Valid @PathVariable Integer empId)
			throws EmployeeNotFoundException {
		Employee st = employeeService.deleteEmployeeById(empId);

		return new ResponseEntity<>(st, HttpStatus.OK);
	}

	@GetMapping("/get/{empId}")
	public ResponseEntity<Employee> getEmployeeById(@Valid @PathVariable Integer empId)
			throws EmployeeNotFoundException {
		Employee emp = employeeService.getEmployeeById(empId);

		return new ResponseEntity<>(emp, HttpStatus.OK);
	}

	@PostMapping("/add")
	public ResponseEntity<Employee> addEmployeeController(@Valid @RequestBody Employee emp)
			throws InvalidInputException {
		Employee st = employeeService.addEmployee(emp);

		return new ResponseEntity<>(st, HttpStatus.ACCEPTED);
	}

}
