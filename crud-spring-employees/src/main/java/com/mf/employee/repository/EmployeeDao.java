package com.mf.employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mf.employee.model.Employee;


@Repository
public interface EmployeeDao extends JpaRepository<Employee, Integer>{
	
}
