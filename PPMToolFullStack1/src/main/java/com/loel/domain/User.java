package com.loel.domain;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Email(message = "Username needs to be an Email")
	@NotBlank(message = "username is required")
	@Column(unique = true)
	private String username;
	@NotBlank(message = "Please enter your First Name")
	private String firstName;
	@NotBlank(message = "Please enter your Last Name")
	private String lastName;
	@NotBlank(message = "Password field is required")
	private String password;
	@Transient
	private String confirmPassword;
	private Date createAt;
	private Date updateAt;

	// OneToMany with Project

	public User() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirmPassword() {
		return confirmPassword;
	}

	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}

	public Date getCreateAt() {
		return createAt;
	}

	public void setCreateAt(Date createAt) {
		this.createAt = createAt;
	}

	public Date getUpdateAt() {
		return updateAt;
	}

	public void setUpdateAt(Date updateAt) {
		this.updateAt = updateAt;
	}

	@PrePersist
	protected void onCreate() {
		this.createAt = new Date();
	}

	@PreUpdate
	protected void onUpdate() {
		this.updateAt = new Date();
	}

}