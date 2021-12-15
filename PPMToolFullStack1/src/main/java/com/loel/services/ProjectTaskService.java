package com.loel.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.loel.domain.Backlog;
import com.loel.domain.ProjectTask;
import com.loel.repositories.BacklogRepository;
import com.loel.repositories.ProjectTaskRepository;

@Service
public class ProjectTaskService {

	@Autowired
	private BacklogRepository backlogRepository;

	@Autowired
	private ProjectTaskRepository projectTaskRepository;

	public ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask) {

		// Exceptions: Project not found

		// PTs to be added to a specific project, != null.
		Backlog backlog = backlogRepository.findByProjectIdentifier(projectIdentifier);

		// Set the backlog to the projectTasks
		projectTask.setBacklog(backlog);

		// We want our project sequence to be like this: IDPRO-1 IDPRO-2 ....100 101
		Integer BacklogSequence = backlog.getPTSequence();

		// Update the Backlog sequence
		BacklogSequence++;

		backlog.setPTSequence(BacklogSequence);

		// Add sequence to Project Task
		projectTask.setProjectSequence(projectIdentifier + "-" + BacklogSequence);
		projectTask.setProjectIdentifier(projectIdentifier);

		// INITIAL priority when priority null
		if (projectTask.getPriority() == null) {// In the future we need projectTask.getPriority()== 0 to handle the
												// form
			projectTask.setPriority(3);
		}

		// INITIAL status when status is null *could use enums here*
		if (projectTask.getStatus() == "" || projectTask.getStatus() == null) {
			projectTask.setStatus("TO_DO");
		}
		return projectTaskRepository.save(projectTask);
	}

}
