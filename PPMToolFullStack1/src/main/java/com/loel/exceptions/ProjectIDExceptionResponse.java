package com.loel.exceptions;

import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
public class ProjectIDExceptionResponse {
	private String projectIdentifier;

	public ProjectIDExceptionResponse(String projectIdentifier) {
		this.projectIdentifier = projectIdentifier;
	}
}
