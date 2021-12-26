package com.loel.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.loel.domain.Backlog;
import com.loel.domain.Project;
import com.loel.domain.User;
import com.loel.exceptions.ProjectIDException;
import com.loel.repositories.BacklogRepository;
import com.loel.repositories.ProjectRepository;
import com.loel.repositories.UserRepository;

@Service
public class ProjectService {

	@Autowired
	private ProjectRepository projectRepository;

	@Autowired
	private BacklogRepository backlogRepository;

	@Autowired
	private UserRepository userRepository;

	public Project saveOrUpdateProject(Project project, String username) {
		try {
			User user = userRepository.findByUsername(username);
			project.setUser(user);
			project.setProjectLeader(user.getUsername());
			project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());

			if (project.getId() == null) {
				Backlog backlog = new Backlog();
				project.setBacklog(backlog);
				backlog.setProject(project);
				backlog.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
			}

			if (project.getId() != null) {
				project.setBacklog(
						backlogRepository.findByProjectIdentifier(project.getProjectIdentifier().toUpperCase()));
			}

			return projectRepository.save(project);

		} catch (Exception e) {
			throw new ProjectIDException(
					"Project ID '" + project.getProjectIdentifier().toUpperCase() + "' already exists");
		}

	}

	public Project findProjectByIdentifier(String projectId) {

		// Only want to return the project if the user looking for it is the owner

		Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());

		if (project == null) {
			throw new ProjectIDException("Project ID '" + projectId + "' does not exist");

		}

		return project;
	}

	public Iterable<Project> findAllProjects() {
		return projectRepository.findAll();
	}

	public void deleteProjectByIdentifier(String projectid) {
		Project project = projectRepository.findByProjectIdentifier(projectid.toUpperCase());

		if (project == null) {
			throw new ProjectIDException("Cannot Project with ID '" + projectid + "'. This project does not exist");
		}

		projectRepository.delete(project);
	}

}