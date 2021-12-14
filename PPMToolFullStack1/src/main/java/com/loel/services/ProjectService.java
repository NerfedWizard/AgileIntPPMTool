package com.loel.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.loel.domain.Backlog;
import com.loel.domain.Project;
import com.loel.exceptions.ProjectIDException;
import com.loel.repositories.BacklogRepository;
import com.loel.repositories.ProjectRepository;

@Service
public class ProjectService {

	@Autowired
	private ProjectRepository projectRepository;
	@Autowired
	private BacklogRepository backlogRepository;
	String identToUpper = "project.getProjectIdentifier().toUpperCase()";

	public Project saveOrUpdateProject(Project project) {

		try {
			project.setProjectIdentifier(identToUpper);
			if (project.getId() == null) {
				Backlog backlog = new Backlog();
				project.setBacklog(backlog);
				backlog.setProject(project);
				backlog.setProjectIdentifier(identToUpper);
			}
			if (project.getId() != null) {
				project.setBacklog(backlogRepository.findByProjectIdentifier(identToUpper));
			}
			return projectRepository.save(project);

		} catch (Exception e) {
			throw new ProjectIDException("Project ID '" + identToUpper + "' already exists");
		}
	}

	public Project findProjectByIndentifier(String projectId) {

		Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());
		if (project == null) {
			throw new ProjectIDException("Project '" + projectId.toUpperCase() + "' does not exist");
		}
		return project;
	}

	public Iterable<Project> findAllProjects() {

		return projectRepository.findAll();

	}

	public void deleteProjectByIdentifier(String projectID) {
		Project project = projectRepository.findByProjectIdentifier(projectID.toUpperCase());

		if (project == null) {
			throw new ProjectIDException(
					"Cannot delete Project with ID '" + projectID.toUpperCase() + "' it doesn't exist");
		}
		projectRepository.delete(project);
	}
}
