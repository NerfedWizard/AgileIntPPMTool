package com.loel.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.loel.domain.Project;
import com.loel.services.ProjectService;

@RestController
@RequestMapping("/api/project")
public class ProjectController {

	@Autowired
	private ProjectService projectService;

	@PostMapping("")
	public ResponseEntity<?> createdNewProject(@Valid @RequestBody Project project, BindingResult result) {

		if (result.hasErrors()) {
			/**
			 * He wants the json response to be field : errorMsg which is a key value pair
			 * 
			 * Extract the key value pairs to track our error
			 * 
			 * Eventually this will go so we don't have logic in the controller 
			 * Will refactor so we can use this again 
			 * Maybe create a class to handle just the errors
			 * 
			 */
			Map<String, String> errorMap = new HashMap<>();

			for (FieldError error : result.getFieldErrors()) {
				errorMap.put(error.getField(), error.getDefaultMessage());
			}

			return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
		}

		Project project1 = projectService.saveOrUpdateProject(project);
		return new ResponseEntity<Project>(project1, HttpStatus.CREATED);

	}

}
