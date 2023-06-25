package com.mf.employee.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Employee {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer empId;
	
	@NotBlank(message="First Name should not be null or empty or just white spaces")
	private String firstName;
	
	@NotBlank(message="Last Name should not be null or empty or just white spaces")
	private String lastName;
	
	@Email(message="Email address should be a valid one")
	private String emailId;
	
}
